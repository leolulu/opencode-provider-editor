// Translation dictionary - Chinese as default
const i18n = {
  zh: {
    'app.title': 'Provider 编辑器',
    'app.subtitle': 'OpenCode / Provider 工作台',
    'app.description': '这是一个仅用于编辑 `provider` 配置的桌面编辑器。加载 `opencode.json`，编辑提供商和模型，然后仅保存 provider 部分。',
    
    'button.loadWorkspace': '加载工作区配置',
    'button.openConfig': '打开其他配置',
    'button.saveProvider': '保存 provider 部分',
    'button.addProvider': '添加提供商',
    'button.deleteProvider': '删除提供商',
    'button.addModel': '添加模型',
    'button.deleteModel': '删除模型',
    
    'label.currentFile': '当前文件',
    'label.status': '状态',
    'label.language': '语言',
    'label.theme': '主题',
    'label.providerKey': 'Provider 键名',
    'label.displayName': '显示名称',
    'label.npmPackage': 'npm 包',
    'label.baseUrl': '基础 URL',
    'label.apiKey': 'API 密钥',
    'label.setCacheKey': '设置缓存键',
    'label.providerOptions': 'Provider 选项 JSON',
    'label.modelKey': '模型键名',
    'label.thinking': '思考模式',
    'label.contextLimit': '上下文限制',
    'label.outputLimit': '输出限制',
    'label.modalities': '模态 JSON',
    'label.modelOptions': '模型选项 JSON',
    'label.variants': '变体 JSON',
    
    'placeholder.providerKey': 'provider-id',
    'placeholder.displayName': '可选的显示名称',
    'placeholder.npmPackage': '@ai-sdk/openai',
    'placeholder.baseUrl': 'https://api.example.com/v1',
    'placeholder.apiKey': '建议使用 {env:YOUR_API_KEY}',
    'placeholder.providerOptions': '额外的 provider 选项对象',
    'placeholder.modelKey': 'gpt-5.4',
    'placeholder.modelDisplayName': 'GPT-5.4',
    'placeholder.contextLimit': '400000',
    'placeholder.outputLimit': '128000',
    'placeholder.modalities': '{"input":["text"],"output":["text"]}',
    'placeholder.modelOptions': '额外的模型选项对象',
    'placeholder.variants': '变体定义对象',
    
    'option.unset': '未设置',
    'option.selectNpmPackage': '-- 选择 npm 包 --',
    'option.true': '是',
    'option.false': '否',
    
    'section.providers': '提供商',
    'section.preferences': '偏好设置',
    'section.providerDetails': 'Provider 详情',
    'section.modelDetails': '模型详情',
    'section.models': '模型',
    'section.preview': '预览',
    'section.providerJson': 'Provider JSON',
    
    'text.notLoaded': '未加载',
    'text.ready': '就绪',
    'text.selectProvider': '选择一个 provider',
    'text.selectModel': '选择一个模型',
    'text.unnamedModel': '未命名模型',
    
    'count.providers': '个提供商',
    'count.provider': '个提供商',
    'count.models': '个模型',
    'count.model': '个模型',
    
    'theme.light': '浅色',
    'theme.dark': '深色',
    
    'status.configLoaded': '配置已加载。',
    'status.defaultMissing': '默认配置缺失 - 已使用空的 provider 树启动。',
    'status.changesApplied': '更改已本地应用。准备好后保存。',
    'status.saved': '已保存 {count} 个 provider 条目。',
    'status.loadFirst': '保存前请先加载配置文件。',
    'status.noProviderChanges': '没有检测到 provider 修改。',
    'status.multipleProviderChanges': '一次保存只能修改一个 provider。当前检测到这些 provider 发生变化：{keys}',
    'status.scopeValidationFailed': '保存校验失败：只允许修改一个 provider，且其他 provider 与 provider 外部内容必须保持不变。',
    'status.providerAdded': '已添加 {key}。',
    'status.providerDeleted': 'Provider 已本地删除。保存以持久化。',
    'status.modelAdded': '已添加 {key}。',
    'status.modelDeleted': '模型已本地删除。保存以持久化。',
    'status.selectProviderFirst': '请先选择或创建一个 provider。',
    'status.providerKeyRequired': 'Provider 键名是必需的。',
    'status.modelKeyRequired': '模型键名是必需的。',
    'status.keyExists': '键名已存在：{key}',
    'status.invalidNumber': '无效的数字：{value}'
    ,
    'error.providerOptionsJson': 'Provider 选项 JSON',
    'error.modalitiesJson': '模态 JSON',
    'error.modelOptionsJson': '模型选项 JSON',
    'error.variantsJson': '变体 JSON',
    'error.mustBeObject': '{label} 必须是 JSON 对象。'
  },
  en: {
    'app.title': 'Provider Editor',
    'app.subtitle': 'OpenCode / Provider Workbench',
    'app.description': 'A desktop editor for the `provider` section only. Load `opencode.json`, edit providers and models, then write back just the provider tree.',
    
    'button.loadWorkspace': 'Load workspace config',
    'button.openConfig': 'Open another config',
    'button.saveProvider': 'Save provider section',
    'button.addProvider': 'Add provider',
    'button.deleteProvider': 'Delete provider',
    'button.addModel': 'Add model',
    'button.deleteModel': 'Delete model',
    
    'label.currentFile': 'Current file',
    'label.status': 'Status',
    'label.language': 'Language',
    'label.theme': 'Theme',
    'label.providerKey': 'Provider key',
    'label.displayName': 'Display name',
    'label.npmPackage': 'npm package',
    'label.baseUrl': 'Base URL',
    'label.apiKey': 'API key',
    'label.setCacheKey': 'Set cache key',
    'label.providerOptions': 'Provider options JSON',
    'label.modelKey': 'Model key',
    'label.thinking': 'Thinking',
    'label.contextLimit': 'Context limit',
    'label.outputLimit': 'Output limit',
    'label.modalities': 'Modalities JSON',
    'label.modelOptions': 'Model options JSON',
    'label.variants': 'Variants JSON',
    
    'placeholder.providerKey': 'provider-id',
    'placeholder.displayName': 'Optional display name',
    'placeholder.npmPackage': '@ai-sdk/openai',
    'placeholder.baseUrl': 'https://api.example.com/v1',
    'placeholder.apiKey': 'Prefer {env:YOUR_API_KEY}',
    'placeholder.providerOptions': 'Additional provider options object',
    'placeholder.modelKey': 'gpt-5.4',
    'placeholder.modelDisplayName': 'GPT-5.4',
    'placeholder.contextLimit': '400000',
    'placeholder.outputLimit': '128000',
    'placeholder.modalities': '{"input":["text"],"output":["text"]}',
    'placeholder.modelOptions': 'Additional model options object',
    'placeholder.variants': 'Variant definitions object',
    
    'option.unset': 'Unset',
    'option.selectNpmPackage': '-- Select npm package --',
    'option.true': 'true',
    'option.false': 'false',
    
    'section.providers': 'Providers',
    'section.preferences': 'Preferences',
    'section.providerDetails': 'Provider Details',
    'section.modelDetails': 'Model Details',
    'section.models': 'Models',
    'section.preview': 'Preview',
    'section.providerJson': 'Provider JSON',
    
    'text.notLoaded': 'Not loaded',
    'text.ready': 'Ready',
    'text.selectProvider': 'Select a provider',
    'text.selectModel': 'Select a model',
    'text.unnamedModel': 'Unnamed model',
    
    'count.providers': 'providers',
    'count.provider': 'provider',
    'count.models': 'models',
    'count.model': 'model',
    
    'theme.light': 'Light',
    'theme.dark': 'Dark',
    
    'status.configLoaded': 'Config loaded.',
    'status.defaultMissing': 'Default config missing - started with empty provider tree.',
    'status.changesApplied': 'Changes applied locally. Save when ready.',
    'status.saved': 'Saved {count} provider entries.',
    'status.loadFirst': 'Load a config file before saving.',
    'status.noProviderChanges': 'No provider changes detected.',
    'status.multipleProviderChanges': 'Only one provider may change per save. Detected changes in: {keys}',
    'status.scopeValidationFailed': 'Save validation failed: only one provider may change, and everything else must remain unchanged.',
    'status.providerAdded': 'Added {key}.',
    'status.providerDeleted': 'Provider removed locally. Save to persist.',
    'status.modelAdded': 'Added {key}.',
    'status.modelDeleted': 'Model removed locally. Save to persist.',
    'status.selectProviderFirst': 'Select or create a provider first.',
    'status.providerKeyRequired': 'Provider key is required.',
    'status.modelKeyRequired': 'Model key is required.',
    'status.keyExists': 'Key already exists: {key}',
    'status.invalidNumber': 'Invalid number: {value}',
    'error.providerOptionsJson': 'Provider options JSON',
    'error.modalitiesJson': 'Modalities JSON',
    'error.modelOptionsJson': 'Model options JSON',
    'error.variantsJson': 'Variants JSON',
    'error.mustBeObject': '{label} must be a JSON object.'
  }
};

// Preference management
const Prefs = {
  storageKey: 'provider-editor-prefs',
  defaultLang: 'zh',
  defaultTheme: 'light',
  
  load() {
    try {
      const stored = localStorage.getItem(this.storageKey);
      if (stored) {
        return JSON.parse(stored);
      }
    } catch (e) {
      console.warn('Failed to load preferences:', e);
    }
    return { lang: this.defaultLang, theme: this.defaultTheme };
  },
  
  save(prefs) {
    try {
      localStorage.setItem(this.storageKey, JSON.stringify(prefs));
    } catch (e) {
      console.warn('Failed to save preferences:', e);
    }
  }
};

// Current preferences
const currentPrefs = Prefs.load();

// Translation helper
function t(key, params = {}) {
  const lang = currentPrefs.lang;
  const dict = i18n[lang] || i18n.zh;
  let text = dict[key] || key;
  
  // Replace parameters
  Object.entries(params).forEach(([k, v]) => {
    text = text.replace(`{${k}}`, v);
  });
  
  return text;
}

// Apply translations to the DOM
function applyTranslations() {
  document.title = t('app.title');

  // Update html lang attribute
  document.documentElement.lang = currentPrefs.lang === 'zh' ? 'zh-CN' : 'en';
  
  // Translate elements with data-i18n
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (key) {
      el.textContent = t(key);
    }
  });
  
  // Translate placeholders
  document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
    const key = el.getAttribute('data-i18n-placeholder');
    if (key) {
      el.placeholder = t(key);
    }
  });
  
  // Update language toggle UI
  document.querySelectorAll('#languageToggle button').forEach(btn => {
    btn.classList.toggle('active', btn.dataset.lang === currentPrefs.lang);
  });
  
  // Update theme toggle UI
  document.querySelectorAll('#themeToggle button').forEach(btn => {
    btn.classList.toggle('active', btn.dataset.theme === currentPrefs.theme);
  });
}

// Apply theme
function applyTheme() {
  document.documentElement.setAttribute('data-theme', currentPrefs.theme);
}

// Save and apply preferences
function setPreference(key, value) {
  currentPrefs[key] = value;
  Prefs.save(currentPrefs);
  
  if (key === 'lang') {
    applyTranslations();
    render(); // Re-render dynamic content
  } else if (key === 'theme') {
    applyTheme();
  }
}

// Default npm package options for the dropdown
const DEFAULT_NPM_PACKAGES = [
  '@ai-sdk/openai',
  '@ai-sdk/anthropic',
  '@ai-sdk/google',
  '@ai-sdk/openai-compatible'
];

const state = {
  filePath: '',
  fullConfig: { provider: {} },
  originalProvider: {},
  selectedProviderKey: '',
  selectedModelKey: ''
};

const els = {
  currentFileLabel: document.getElementById('currentFileLabel'),
  statusLabel: document.getElementById('statusLabel'),
  providerList: document.getElementById('providerList'),
  modelList: document.getElementById('modelList'),
  previewPane: document.getElementById('previewPane'),
  providerCountBadge: document.getElementById('providerCountBadge'),
  providerEditorTitle: document.getElementById('providerEditorTitle'),
  modelEditorTitle: document.getElementById('modelEditorTitle'),
  loadDefaultButton: document.getElementById('loadDefaultButton'),
  openFileButton: document.getElementById('openFileButton'),
  saveButton: document.getElementById('saveButton'),
  addProviderButton: document.getElementById('addProviderButton'),
  deleteProviderButton: document.getElementById('deleteProviderButton'),
  addModelButton: document.getElementById('addModelButton'),
  deleteModelButton: document.getElementById('deleteModelButton'),
  providerKeyInput: document.getElementById('providerKeyInput'),
  providerNameInput: document.getElementById('providerNameInput'),
  providerNpmInput: document.getElementById('providerNpmInput'),
  providerBaseUrlInput: document.getElementById('providerBaseUrlInput'),
  providerApiKeyInput: document.getElementById('providerApiKeyInput'),
  providerSetCacheKeyInput: document.getElementById('providerSetCacheKeyInput'),
  providerOptionsInput: document.getElementById('providerOptionsInput'),
  modelKeyInput: document.getElementById('modelKeyInput'),
  modelNameInput: document.getElementById('modelNameInput'),
  modelThinkingInput: document.getElementById('modelThinkingInput'),
  modelContextLimitInput: document.getElementById('modelContextLimitInput'),
  modelOutputLimitInput: document.getElementById('modelOutputLimitInput'),
  modelModalitiesInput: document.getElementById('modelModalitiesInput'),
  modelOptionsInput: document.getElementById('modelOptionsInput'),
  modelVariantsInput: document.getElementById('modelVariantsInput'),
  listItemTemplate: document.getElementById('listItemTemplate')
};

function ensureProviderTree(config) {
  if (!config.provider || typeof config.provider !== 'object' || Array.isArray(config.provider)) {
    config.provider = {};
  }
}

function clone(value) {
  return JSON.parse(JSON.stringify(value));
}

function deepEqualJson(left, right) {
  return JSON.stringify(left) === JSON.stringify(right);
}

function normalizeProviderTree(provider) {
  if (!provider || typeof provider !== 'object' || Array.isArray(provider)) {
    return {};
  }
  return provider;
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
    return { type: 'update', touchedKeys: [changed[0]], originalKey: changed[0], currentKey: changed[0] };
  }

  if (added.length === 1 && removed.length === 0 && changed.length === 0) {
    return { type: 'add', touchedKeys: [added[0]], currentKey: added[0] };
  }

  if (added.length === 0 && removed.length === 1 && changed.length === 0) {
    return { type: 'delete', touchedKeys: [removed[0]], originalKey: removed[0] };
  }

  if (added.length === 1 && removed.length === 1 && changed.length === 0) {
    return {
      type: 'rename',
      touchedKeys: [removed[0], added[0]],
      originalKey: removed[0],
      currentKey: added[0]
    };
  }

  return {
    type: 'invalid',
    touchedKeys: Array.from(new Set([...added, ...removed, ...changed])).sort(),
    added,
    removed,
    changed
  };
}

function providerEntries() {
  ensureProviderTree(state.fullConfig);
  return Object.entries(state.fullConfig.provider);
}

function selectedProvider() {
  return state.fullConfig.provider[state.selectedProviderKey] || null;
}

function selectedModels() {
  const provider = selectedProvider();
  if (!provider) {
    return {};
  }
  if (!provider.models || typeof provider.models !== 'object' || Array.isArray(provider.models)) {
    return {};
  }
  return provider.models;
}

function selectedModel() {
  return selectedModels()[state.selectedModelKey] || null;
}

function setStatus(message, isError = false) {
  els.statusLabel.textContent = message;
  els.statusLabel.style.color = isError ? 'var(--warn)' : '';
}

function prettifyJson(value) {
  return JSON.stringify(value, null, 2);
}

function parseObjectInput(text, label) {
  const trimmed = text.trim();
  if (!trimmed) {
    return {};
  }
  const parsed = JSON.parse(trimmed);
  if (!parsed || typeof parsed !== 'object' || Array.isArray(parsed)) {
    throw new Error(t('error.mustBeObject', { label }));
  }
  return parsed;
}

function parseOptionalBoolean(value) {
  if (value === 'true') {
    return true;
  }
  if (value === 'false') {
    return false;
  }
  return undefined;
}

function parseOptionalNumber(value) {
  if (!value) {
    return undefined;
  }
  const parsed = Number(value);
  if (!Number.isFinite(parsed)) {
    throw new Error(t('status.invalidNumber', { value }));
  }
  return parsed;
}

function renderProviderList() {
  els.providerList.innerHTML = '';
  const entries = providerEntries();
  entries.forEach(([key, provider]) => {
    const button = els.listItemTemplate.content.firstElementChild.cloneNode(true);
    button.classList.toggle('active', key === state.selectedProviderKey);
    const title = document.createElement('span');
    title.textContent = key;
    const meta = document.createElement('small');
    const modelCount = Object.keys(provider.models || {}).length;
    const modelLabel = modelCount === 1 ? t('count.model') : t('count.models');
    meta.textContent = `${modelCount} ${modelLabel}`;
    button.append(title, meta);
    button.addEventListener('click', () => {
      state.selectedProviderKey = key;
      state.selectedModelKey = Object.keys(provider.models || {})[0] || '';
      render();
    });
    els.providerList.appendChild(button);
  });
  
  const providerCount = entries.length;
  const providerLabel = providerCount === 1 ? t('count.provider') : t('count.providers');
  els.providerCountBadge.textContent = `${providerCount} ${providerLabel}`;
}

function renderModelList() {
  els.modelList.innerHTML = '';
  const models = selectedModels();
  Object.entries(models).forEach(([key, model]) => {
    const button = els.listItemTemplate.content.firstElementChild.cloneNode(true);
    button.classList.toggle('active', key === state.selectedModelKey);
    const title = document.createElement('span');
    title.textContent = key;
    const meta = document.createElement('small');
    meta.textContent = model.name || t('text.unnamedModel');
    button.append(title, meta);
    button.addEventListener('click', () => {
      state.selectedModelKey = key;
      render();
    });
    els.modelList.appendChild(button);
  });
}

function renderProviderForm() {
  const provider = selectedProvider();
  if (!provider) {
    els.providerEditorTitle.textContent = t('text.selectProvider');
    els.providerKeyInput.value = '';
    els.providerNameInput.value = '';
    els.providerNpmInput.value = '';
    els.providerBaseUrlInput.value = '';
    els.providerApiKeyInput.value = '';
    els.providerSetCacheKeyInput.value = '';
    els.providerOptionsInput.value = '';
    return;
  }

  els.providerEditorTitle.textContent = state.selectedProviderKey;
  const options = clone(provider.options || {});
  const baseURL = typeof options.baseURL === 'string' ? options.baseURL : '';
  const apiKey = typeof options.apiKey === 'string' ? options.apiKey : '';
  const setCacheKey = typeof options.setCacheKey === 'boolean' ? String(options.setCacheKey) : '';
  delete options.baseURL;
  delete options.apiKey;
  delete options.setCacheKey;

  els.providerKeyInput.value = state.selectedProviderKey;
  els.providerNameInput.value = provider.name || '';
  
  // Handle npm dropdown: add custom value if not in defaults
  const npmValue = provider.npm || '';
  const npmSelect = els.providerNpmInput;
  
  // Remove any previously added custom options (keep the default ones)
  while (npmSelect.options.length > 1 + DEFAULT_NPM_PACKAGES.length) {
    npmSelect.remove(npmSelect.options.length - 1);
  }
  
  // If npm value exists and is not in defaults, add it as a custom option
  if (npmValue && !DEFAULT_NPM_PACKAGES.includes(npmValue)) {
    const customOption = document.createElement('option');
    customOption.value = npmValue;
    customOption.textContent = npmValue;
    customOption.className = 'custom-npm-option';
    npmSelect.appendChild(customOption);
  }
  
  npmSelect.value = npmValue;
  
  els.providerBaseUrlInput.value = baseURL;
  els.providerApiKeyInput.value = apiKey;
  els.providerSetCacheKeyInput.value = setCacheKey;
  els.providerOptionsInput.value = Object.keys(options).length ? prettifyJson(options) : '';
}

function renderModelForm() {
  const model = selectedModel();
  if (!model) {
    els.modelEditorTitle.textContent = t('text.selectModel');
    els.modelKeyInput.value = '';
    els.modelNameInput.value = '';
    els.modelThinkingInput.value = '';
    els.modelContextLimitInput.value = '';
    els.modelOutputLimitInput.value = '';
    els.modelModalitiesInput.value = '';
    els.modelOptionsInput.value = '';
    els.modelVariantsInput.value = '';
    return;
  }

  els.modelEditorTitle.textContent = state.selectedModelKey;
  els.modelKeyInput.value = state.selectedModelKey;
  els.modelNameInput.value = model.name || '';
  els.modelThinkingInput.value = typeof model.thinking === 'boolean' ? String(model.thinking) : '';
  els.modelContextLimitInput.value = model.limit && Number.isFinite(model.limit.context) ? String(model.limit.context) : '';
  els.modelOutputLimitInput.value = model.limit && Number.isFinite(model.limit.output) ? String(model.limit.output) : '';
  els.modelModalitiesInput.value = model.modalities ? prettifyJson(model.modalities) : '';
  els.modelOptionsInput.value = model.options ? prettifyJson(model.options) : '';
  els.modelVariantsInput.value = model.variants ? prettifyJson(model.variants) : '';
}

function renderPreview() {
  els.previewPane.textContent = prettifyJson({ provider: state.fullConfig.provider || {} });
}

function renderMeta() {
  els.currentFileLabel.textContent = state.filePath || t('text.notLoaded');
}

function render() {
  ensureProviderTree(state.fullConfig);
  if (!selectedProvider() && providerEntries().length > 0) {
    state.selectedProviderKey = providerEntries()[0][0];
  }
  if (selectedProvider() && !selectedModel()) {
    state.selectedModelKey = Object.keys(selectedModels())[0] || '';
  }
  renderMeta();
  renderProviderList();
  renderProviderForm();
  renderModelList();
  renderModelForm();
  renderPreview();
}

function loadConfigPayload(payload) {
  if (!payload || payload.canceled) {
    return;
  }
  state.filePath = payload.filePath;
  state.fullConfig = clone(payload.config || { provider: {} });
  ensureProviderTree(state.fullConfig);
  state.originalProvider = clone(state.fullConfig.provider);
  state.selectedProviderKey = Object.keys(state.fullConfig.provider)[0] || '';
  state.selectedModelKey = state.selectedProviderKey
    ? Object.keys(state.fullConfig.provider[state.selectedProviderKey].models || {})[0] || ''
    : '';
  setStatus(payload.missingDefault ? t('status.defaultMissing') : t('status.configLoaded'));
  render();
}

function renameObjectKey(target, oldKey, newKey) {
  if (oldKey === newKey) {
    return;
  }
  if (target[newKey]) {
    throw new Error(t('status.keyExists', { key: newKey }));
  }
  target[newKey] = target[oldKey];
  delete target[oldKey];
}

function syncProviderFromForm() {
  const provider = selectedProvider();
  if (!provider) {
    return;
  }

  const nextKey = els.providerKeyInput.value.trim();
  if (!nextKey) {
    throw new Error(t('status.providerKeyRequired'));
  }

  const options = parseObjectInput(els.providerOptionsInput.value, t('error.providerOptionsJson'));
  const mergedOptions = { ...options };

  if (els.providerBaseUrlInput.value.trim()) {
    mergedOptions.baseURL = els.providerBaseUrlInput.value.trim();
  }
  if (els.providerApiKeyInput.value.trim()) {
    mergedOptions.apiKey = els.providerApiKeyInput.value.trim();
  }

  const setCacheKey = parseOptionalBoolean(els.providerSetCacheKeyInput.value);
  if (typeof setCacheKey === 'boolean') {
    mergedOptions.setCacheKey = setCacheKey;
  }

  provider.name = els.providerNameInput.value.trim() || undefined;
  provider.npm = els.providerNpmInput.value.trim() || undefined;
  provider.options = Object.keys(mergedOptions).length ? mergedOptions : undefined;
  renameObjectKey(state.fullConfig.provider, state.selectedProviderKey, nextKey);
  state.selectedProviderKey = nextKey;
}

function syncModelFromForm() {
  const model = selectedModel();
  if (!model) {
    return;
  }

  const models = selectedModels();
  const nextKey = els.modelKeyInput.value.trim();
  if (!nextKey) {
    throw new Error(t('status.modelKeyRequired'));
  }

  const modalities = parseObjectInput(els.modelModalitiesInput.value, t('error.modalitiesJson'));
  const options = parseObjectInput(els.modelOptionsInput.value, t('error.modelOptionsJson'));
  const variants = parseObjectInput(els.modelVariantsInput.value, t('error.variantsJson'));
  const thinking = parseOptionalBoolean(els.modelThinkingInput.value);
  const contextLimit = parseOptionalNumber(els.modelContextLimitInput.value.trim());
  const outputLimit = parseOptionalNumber(els.modelOutputLimitInput.value.trim());

  model.name = els.modelNameInput.value.trim() || undefined;
  model.modalities = Object.keys(modalities).length ? modalities : undefined;
  model.options = Object.keys(options).length ? options : undefined;
  model.variants = Object.keys(variants).length ? variants : undefined;
  model.thinking = thinking;
  model.limit = typeof contextLimit === 'number' || typeof outputLimit === 'number' ? {} : undefined;
  if (model.limit) {
    if (typeof contextLimit === 'number') {
      model.limit.context = contextLimit;
    }
    if (typeof outputLimit === 'number') {
      model.limit.output = outputLimit;
    }
  }

  renameObjectKey(models, state.selectedModelKey, nextKey);
  state.selectedModelKey = nextKey;
}

function guardRender(action) {
  try {
    action();
    render();
    setStatus(t('status.changesApplied'));
    return true;
  } catch (error) {
    setStatus(error.message, true);
    return false;
  }
}

els.loadDefaultButton.addEventListener('click', async () => {
  try {
    loadConfigPayload(await window.providerEditorApi.loadDefaultConfig());
  } catch (error) {
    setStatus(error.message, true);
  }
});

els.openFileButton.addEventListener('click', async () => {
  try {
    loadConfigPayload(await window.providerEditorApi.openConfigFile());
  } catch (error) {
    setStatus(error.message, true);
  }
});

els.saveButton.addEventListener('click', async () => {
  const snapshot = clone(state.fullConfig);
  const selectionSnapshot = {
    providerKey: state.selectedProviderKey,
    modelKey: state.selectedModelKey
  };

  if (!guardRender(syncProviderFromForm)) {
    state.fullConfig = snapshot;
    state.selectedProviderKey = selectionSnapshot.providerKey;
    state.selectedModelKey = selectionSnapshot.modelKey;
    render();
    return;
  }
  if (!guardRender(syncModelFromForm)) {
    state.fullConfig = snapshot;
    state.selectedProviderKey = selectionSnapshot.providerKey;
    state.selectedModelKey = selectionSnapshot.modelKey;
    render();
    return;
  }

  if (!state.filePath) {
    setStatus(t('status.loadFirst'), true);
    return;
  }

  const scope = diffProviderScope(state.originalProvider, state.fullConfig.provider);
  if (scope.type === 'none') {
    setStatus(t('status.noProviderChanges'), true);
    return;
  }
  if (scope.type === 'invalid') {
    setStatus(t('status.multipleProviderChanges', { keys: scope.touchedKeys.join(', ') || '-' }), true);
    return;
  }

  try {
    const result = await window.providerEditorApi.saveProviderSection({
      filePath: state.filePath,
      provider: state.fullConfig.provider
    });
    state.originalProvider = clone(state.fullConfig.provider);
    setStatus(t('status.saved', { count: result.providerCount }));
  } catch (error) {
    setStatus(error.message, true);
  }
});

els.addProviderButton.addEventListener('click', () => {
  const baseKey = 'new-provider';
  let nextKey = baseKey;
  let index = 1;
  while (state.fullConfig.provider[nextKey]) {
    nextKey = `${baseKey}-${index}`;
    index += 1;
  }
  state.fullConfig.provider[nextKey] = { models: {} };
  state.selectedProviderKey = nextKey;
  state.selectedModelKey = '';
  render();
  setStatus(t('status.providerAdded', { key: nextKey }));
});

els.deleteProviderButton.addEventListener('click', () => {
  if (!state.selectedProviderKey) {
    return;
  }
  delete state.fullConfig.provider[state.selectedProviderKey];
  state.selectedProviderKey = Object.keys(state.fullConfig.provider)[0] || '';
  state.selectedModelKey = state.selectedProviderKey
    ? Object.keys(state.fullConfig.provider[state.selectedProviderKey].models || {})[0] || ''
    : '';
  render();
  setStatus(t('status.providerDeleted'));
});

els.addModelButton.addEventListener('click', () => {
  const provider = selectedProvider();
  if (!provider) {
    setStatus(t('status.selectProviderFirst'), true);
    return;
  }
  provider.models = provider.models || {};
  const baseKey = 'new-model';
  let nextKey = baseKey;
  let index = 1;
  while (provider.models[nextKey]) {
    nextKey = `${baseKey}-${index}`;
    index += 1;
  }
  provider.models[nextKey] = {};
  state.selectedModelKey = nextKey;
  render();
  setStatus(t('status.modelAdded', { key: nextKey }));
});

els.deleteModelButton.addEventListener('click', () => {
  const models = selectedModels();
  if (!state.selectedModelKey || !models[state.selectedModelKey]) {
    return;
  }
  delete models[state.selectedModelKey];
  state.selectedModelKey = Object.keys(models)[0] || '';
  render();
  setStatus(t('status.modelDeleted'));
});

[
  els.providerKeyInput,
  els.providerNameInput,
  els.providerNpmInput,
  els.providerBaseUrlInput,
  els.providerApiKeyInput,
  els.providerSetCacheKeyInput,
  els.providerOptionsInput
].forEach((element) => {
  element.addEventListener('change', () => guardRender(syncProviderFromForm));
});

[
  els.modelKeyInput,
  els.modelNameInput,
  els.modelThinkingInput,
  els.modelContextLimitInput,
  els.modelOutputLimitInput,
  els.modelModalitiesInput,
  els.modelOptionsInput,
  els.modelVariantsInput
].forEach((element) => {
  element.addEventListener('change', () => guardRender(syncModelFromForm));
});

// Language toggle handlers
document.querySelectorAll('#languageToggle button').forEach(btn => {
  btn.addEventListener('click', () => {
    const lang = btn.dataset.lang;
    if (lang !== currentPrefs.lang) {
      setPreference('lang', lang);
    }
  });
});

// Theme toggle handlers
document.querySelectorAll('#themeToggle button').forEach(btn => {
  btn.addEventListener('click', () => {
    const theme = btn.dataset.theme;
    if (theme !== currentPrefs.theme) {
      setPreference('theme', theme);
    }
  });
});

// Initialize
applyTheme();
applyTranslations();
setStatus(t('text.ready'));
loadConfigPayload({ config: { provider: {} } });
window.providerEditorApi.loadDefaultConfig().then(loadConfigPayload).catch((error) => {
  setStatus(error.message, true);
});
