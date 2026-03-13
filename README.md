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

## Config Files

- `opencode.json` is your local working config and is ignored by Git.
- `opencode.example.json` is the sanitized template for GitHub.
