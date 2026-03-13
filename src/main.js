const { app, BrowserWindow, dialog, ipcMain } = require('electron');
const fs = require('node:fs/promises');
const path = require('node:path');

function getDefaultConfigCandidates() {
  const cwdPath = path.join(process.cwd(), 'opencode.json');

  if (!app.isPackaged) {
    return [cwdPath];
  }

  const exeDirPath = path.join(path.dirname(process.execPath), 'opencode.json');
  return Array.from(new Set([exeDirPath, cwdPath]));
}

async function resolveDefaultConfigPath() {
  const candidates = getDefaultConfigCandidates();

  for (const candidate of candidates) {
    try {
      await fs.access(candidate);
      return candidate;
    } catch {
      // Continue searching other candidates.
    }
  }

  return candidates[0];
}

function assertConfigFilePath(filePath) {
  const normalized = path.basename(filePath).toLowerCase();
  if (!normalized.endsWith('.json')) {
    throw new Error('This editor only supports JSON config files.');
  }
}

function createWindow() {
  const win = new BrowserWindow({
    width: 1500,
    height: 980,
    minWidth: 1200,
    minHeight: 760,
    backgroundColor: '#101418',
    title: 'OpenCode Provider Editor',
    webPreferences: {
      preload: path.join(__dirname, 'preload.js'),
      contextIsolation: true,
      nodeIntegration: false,
      sandbox: true
    }
  });

  win.removeMenu();
  win.loadFile(path.join(__dirname, 'renderer', 'index.html'));
}

async function readJson(filePath) {
  const raw = await fs.readFile(filePath, 'utf8');
  const parsed = JSON.parse(raw);
  return { raw, parsed };
}

async function readJsonOrDefault(filePath) {
  try {
    return await readJson(filePath);
  } catch (error) {
    if (error.code === 'ENOENT') {
      return {
        raw: JSON.stringify({ provider: {} }, null, 2),
        parsed: { provider: {} },
        missingDefault: true
      };
    }
    throw error;
  }
}

async function loadConfigWithFallback() {
  const filePath = await resolveDefaultConfigPath();
  const result = await readJsonOrDefault(filePath);
  return { ...result, filePath };
}

function validateProviderPayload(payload) {
  if (!payload || typeof payload !== 'object' || Array.isArray(payload)) {
    throw new Error('provider must be a JSON object.');
  }
}

function normalizeProviderTree(provider) {
  if (!provider || typeof provider !== 'object' || Array.isArray(provider)) {
    return {};
  }
  return provider;
}

function deepEqualJson(left, right) {
  return JSON.stringify(left) === JSON.stringify(right);
}

function withoutProvider(config) {
  if (!config || typeof config !== 'object' || Array.isArray(config)) {
    return {};
  }
  const { provider, ...rest } = config;
  return rest;
}

function diffProviderScope(baselineProvider, nextProvider) {
  const baseline = normalizeProviderTree(baselineProvider);
  const current = normalizeProviderTree(nextProvider);
  const baselineKeys = Object.keys(baseline);
  const currentKeys = Object.keys(current);
  const added = currentKeys.filter((key) => !(key in baseline));
  const removed = baselineKeys.filter((key) => !(key in current));
  const changed = baselineKeys.filter((key) => key in current && !deepEqualJson(baseline[key], current[key]));

  if (added.length === 0 && removed.length === 0 && changed.length === 0) {
    return { type: 'none', touchedKeys: [] };
  }

  if (added.length === 0 && removed.length === 0 && changed.length === 1) {
    return { type: 'update', touchedKeys: [changed[0]] };
  }

  if (added.length === 1 && removed.length === 0 && changed.length === 0) {
    return { type: 'add', touchedKeys: [added[0]] };
  }

  if (added.length === 0 && removed.length === 1 && changed.length === 0) {
    return { type: 'delete', touchedKeys: [removed[0]] };
  }

  if (added.length === 1 && removed.length === 1 && changed.length === 0) {
    return { type: 'rename', touchedKeys: [removed[0], added[0]] };
  }

  return {
    type: 'invalid',
    touchedKeys: Array.from(new Set([...added, ...removed, ...changed])).sort()
  };
}

function validateSaveScope(existingConfig, nextProvider) {
  const nextConfig = { ...existingConfig, provider: nextProvider };
  if (!deepEqualJson(withoutProvider(existingConfig), withoutProvider(nextConfig))) {
    throw new Error('Save validation failed: content outside provider would be modified.');
  }

  const scope = diffProviderScope(existingConfig.provider, nextProvider);
  if (scope.type === 'none') {
    throw new Error('Save validation failed: no provider changes detected.');
  }
  if (scope.type === 'invalid') {
    throw new Error(`Save validation failed: only one provider may change. Detected changes in: ${scope.touchedKeys.join(', ')}`);
  }

  return nextConfig;
}

ipcMain.handle('config:load-default', async () => {
  const result = await loadConfigWithFallback();
  return {
    filePath: result.filePath,
    config: result.parsed,
    missingDefault: Boolean(result.missingDefault)
  };
});

ipcMain.handle('config:open', async () => {
  const defaultPath = await resolveDefaultConfigPath();
  const selected = await dialog.showOpenDialog({
    title: 'Select opencode.json',
    defaultPath,
    properties: ['openFile'],
    filters: [{ name: 'JSON files', extensions: ['json'] }]
  });

  if (selected.canceled || selected.filePaths.length === 0) {
    return { canceled: true };
  }

  const filePath = selected.filePaths[0];
  assertConfigFilePath(filePath);
  const result = await readJson(filePath);
  return { canceled: false, filePath, config: result.parsed };
});

ipcMain.handle('config:save-provider', async (_event, payload) => {
  const { filePath, provider } = payload || {};

  if (!filePath || typeof filePath !== 'string') {
    throw new Error('Missing target config path.');
  }

  assertConfigFilePath(filePath);
  validateProviderPayload(provider);

  const existing = await readJsonOrDefault(filePath);
  const nextConfig = validateSaveScope(existing.parsed, provider);
  const tempPath = `${filePath}.tmp`;

  try {
    await fs.writeFile(tempPath, `${JSON.stringify(nextConfig, null, 2)}\n`, 'utf8');
    await fs.rename(tempPath, filePath);
  } catch (error) {
    throw new Error(`Failed to save provider section to ${filePath} via temp file ${tempPath}: ${error.message}`);
  }

  return {
    ok: true,
    filePath,
    providerCount: Object.keys(provider).length
  };
});

app.whenReady().then(() => {
  createWindow();

  app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) {
      createWindow();
    }
  });
});

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});
