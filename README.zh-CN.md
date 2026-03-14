# OpenCode Provider Editor

一个用于可视化编辑 `opencode.json` 中 `provider` 部分的 Windows 桌面程序。

[English README](./README.md)

## 下载方式

请从 [Releases](https://github.com/leolulu/opencode-provider-editor/releases/latest) 下载最新便携版。

解压后直接运行 `OpenCode Provider Editor.exe` 即可。

## 这个程序是做什么的

这个工具是给需要管理 OpenCode provider 配置的用户准备的。

你不需要再手动修改层级很深的 JSON，可以直接通过界面来：

- 打开已有配置文件
- 在侧边栏切换 provider
- 用表单编辑 provider 和 model
- 实时查看生成出来的 provider JSON
- 在带校验的前提下安全保存

程序只会写回配置文件中的 `provider` 部分。

## 界面说明

### 左侧栏

左边是主控制区。

你可以在这里：

- 加载程序目录或当前工作目录里的默认配置
- 手动打开其他 JSON 配置文件
- 保存当前 provider 修改
- 浏览 provider 列表
- 切换语言和主题

### Provider 面板

中上区域用于编辑当前选中的 provider。

可以修改的内容包括：

- provider 键名
- 显示名称
- npm 包
- Base URL
- API 密钥
- 缓存键行为
- provider 选项 JSON

### Model 面板

右上区域用于编辑当前 provider 下的模型。

你可以：

- 添加或删除模型
- 编辑模型键名和显示名称
- 配置 thinking、上下文限制、输出限制
- 编辑 modalities、model options、variants 这些 JSON 字段

### 预览面板

底部区域会实时显示当前生成的 `provider` JSON。

保存前可以先在这里确认最终写回的内容。

## 基本使用流程

1. 下载并解压最新 Release。
2. 启动 `OpenCode Provider Editor.exe`。
3. 加载需要编辑的配置文件。
4. 在左侧选择一个 provider。
5. 修改 provider 字段和 model 字段。
6. 查看底部实时 JSON 预览。
7. 保存回原始文件。

## 文件读取方式

程序支持以下几种方式：

- 读取可执行文件同目录下的默认 `opencode.json`
- 读取当前工作目录中的默认 `opencode.json`
- 手动打开任意 JSON 配置文件

## 保存安全规则

这个程序的保存逻辑是故意做得比较严格的。

- `provider` 之外的内容不会被改写
- 一次保存只允许修改一个 provider
- 如果一次改到了多个 provider，会直接拒绝保存
- 高级 JSON 字段格式不合法时，也会先拦住，不会写坏文件

这样做的目的，是尽量减少配置文件被误改坏的风险。

## 偏好设置

程序内置：

- 中文 / 英文界面
- 浅色 / 深色主题

这些偏好会保存在本地，下次打开时继续生效。

## 使用建议

- API 密钥尽量使用 `{env:YOUR_API_KEY}` 这种环境变量写法。
- 保存前先看一眼底部预览区，确认嵌套 JSON 没问题。
- 如果要编辑别的配置文件，直接用 `Open another config`，不需要手动搬文件。
