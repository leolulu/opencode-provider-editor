const fs = require('node:fs/promises');
const path = require('node:path');

const rootDir = process.cwd();
const electronDistDir = path.join(rootDir, 'node_modules', 'electron', 'dist');
const releaseDir = path.join(rootDir, 'release');
const appDir = path.join(releaseDir, 'portable-win-x64');
const appResourcesDir = path.join(appDir, 'resources', 'app');
const sourcePackagePath = path.join(rootDir, 'package.json');
const sourceConfigPath = path.join(rootDir, 'opencode.json');
const shouldCopyDefaultConfig = process.env.SKIP_LOCAL_CONFIG_COPY !== 'true';

async function exists(targetPath) {
  try {
    await fs.access(targetPath);
    return true;
  } catch {
    return false;
  }
}

async function ensureRuntimePresent() {
  if (!(await exists(electronDistDir))) {
    throw new Error('Electron runtime is missing. Run `pnpm install` first.');
  }
}

async function createAppPackageJson() {
  const sourcePackage = JSON.parse(await fs.readFile(sourcePackagePath, 'utf8'));
  const runtimePackage = {
    name: sourcePackage.name,
    version: sourcePackage.version,
    productName: sourcePackage.build && sourcePackage.build.productName ? sourcePackage.build.productName : sourcePackage.name,
    description: sourcePackage.description,
    main: sourcePackage.main
  };

  await fs.writeFile(
    path.join(appResourcesDir, 'package.json'),
    `${JSON.stringify(runtimePackage, null, 2)}\n`,
    'utf8'
  );
}

async function copyDefaultConfigIfPresent() {
  if (!shouldCopyDefaultConfig) {
    return;
  }

  if (await exists(sourceConfigPath)) {
    await fs.copyFile(sourceConfigPath, path.join(appDir, 'opencode.json'));
  }
}

async function main() {
  await ensureRuntimePresent();

  await fs.rm(appDir, { recursive: true, force: true });
  await fs.mkdir(appResourcesDir, { recursive: true });

  await fs.cp(electronDistDir, appDir, { recursive: true });
  await fs.rename(path.join(appDir, 'electron.exe'), path.join(appDir, 'OpenCode Provider Editor.exe'));
  await fs.cp(path.join(rootDir, 'src'), path.join(appResourcesDir, 'src'), { recursive: true });
  await createAppPackageJson();
  await copyDefaultConfigIfPresent();

  console.log(`Portable app created at: ${appDir}`);
}

main().catch((error) => {
  console.error(error.message);
  process.exitCode = 1;
});
