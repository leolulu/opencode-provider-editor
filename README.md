# OpenCode Provider Editor

A Windows desktop app for editing the `provider` section of `opencode.json` without hand-editing JSON.

[中文说明 / Chinese documentation](./README.zh-CN.md)

## Download

Download the latest portable build from [Releases](https://github.com/leolulu/opencode-provider-editor/releases/latest).

After extracting the zip, run `OpenCode Provider Editor.exe`.

## What This App Is For

This tool is built for people who want to manage OpenCode provider settings visually.

Instead of editing nested JSON manually, you can:

- open an existing config file
- switch between providers in a sidebar
- edit provider and model fields in forms
- review the generated provider JSON live
- save back safely with scope validation

The app only writes the `provider` section of your config file.

## Interface Overview

### Sidebar

The left side is your control area.

- load the default config in the app folder or current workspace
- open any other JSON config file manually
- save the current provider changes
- browse the provider list
- switch language and theme

### Provider Panel

The upper middle panel is where you edit one provider.

You can change:

- provider key
- display name
- npm package
- base URL
- API key
- cache key behavior
- provider options JSON

### Model Panel

The upper right panel is for models under the selected provider.

You can:

- add or remove models
- edit model key and display name
- configure thinking, context limit, and output limit
- edit modalities, model options, and variants as JSON

### Preview Panel

The bottom panel shows the generated `provider` JSON in real time.

This helps you confirm what will be written before saving.

## Typical Workflow

1. Download and extract the latest Release package.
2. Start `OpenCode Provider Editor.exe`.
3. Load the config you want to edit.
4. Select a provider from the sidebar.
5. Update provider fields and model fields.
6. Check the live JSON preview.
7. Save the changes back to the original file.

## File Behavior

The app can work with:

- the default `opencode.json` next to the executable
- the default `opencode.json` in the current working directory
- any JSON file you open manually

## Safety Rules

The save flow is intentionally strict.

- content outside `provider` is not rewritten
- only one provider may change in a single save
- if multiple providers changed, the save is rejected
- malformed JSON in advanced fields is rejected before write-back

This is designed to reduce accidental config corruption.

## Preferences

The app includes:

- Chinese and English UI
- light and dark themes

Language and theme preferences are remembered locally.

## Tips

- Use environment-variable style values such as `{env:YOUR_API_KEY}` when possible.
- Use the preview panel to confirm nested JSON changes before saving.
- If you need to edit a different config file, use `Open another config` instead of moving files around.
