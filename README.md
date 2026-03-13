# OpenCode Provider Editor

Windows desktop editor for the `provider` section of `opencode.json`.

## Features

- Edit only the `provider` section
- Chinese/English UI, default Chinese
- Light/dark theme, default light
- Save-scope validation so a save may touch only one provider at a time
- Portable Windows build output

## Development

```bash
pnpm install
pnpm start
```

## Build Portable App

```bash
pnpm run dist:portable
```

The portable app is written to `release/portable-win-x64/`.

## Release Delivery

Compiled app delivery is handled through GitHub Releases.

- Push a tag like `v0.1.1` to trigger the release workflow automatically.
- Or run the `Build and Release Portable App` workflow manually and provide a release tag.
- The workflow builds the Windows portable app, zips `release/portable-win-x64/`, uploads it as a workflow artifact, and publishes the zip to GitHub Releases.
- CI builds set `SKIP_LOCAL_CONFIG_COPY=true`, so your local `opencode.json` is not bundled into release artifacts.

## Config Files

- `opencode.json` is your local working config and is ignored by Git.
- `opencode.example.json` is the sanitized template for GitHub.
