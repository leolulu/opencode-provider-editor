# Implementation Plan: Bilingual UI & Theme Switching

## Overview
Add bilingual support (Chinese default, English supported) and light/dark theme switching (light default) to the existing Electron renderer without adding frameworks.

---

## 1. State Shape (app.js)

Extend the existing state object with `i18n` and `theme` properties:

```javascript
const state = {
  filePath: '',
  fullConfig: { provider: {} },
  selectedProviderKey: '',
  selectedModelKey: '',
  
  // NEW: Language and Theme State
  i18n: {
    locale: 'zh',              // 'zh' (default) | 'en'
    t: {}                      // Loaded translations
  },
  theme: {
    mode: 'light'              // 'light' (default) | 'dark'
  }
};
```

---

## 2. Translation Strategy

### 2.1 Translation Dictionary Structure
Create a `translations` object with nested keys matching UI context:

```javascript
const translations = {
  zh: {
    // Global / Common
    app: {
      title: 'Provider 编辑器',
      eyebrow: 'OpenCode / Provider 工作台'
    },
    
    // Sidebar Actions
    actions: {
      loadWorkspace: '加载工作区配置',
      openConfig: '打开其他配置',
      saveProvider: '保存 provider 配置',
      addProvider: '添加 provider'
    },
    
    // File Card
    fileCard: {
      currentFile: '当前文件',
      notLoaded: '未加载',
      status: '状态',
      ready: '就绪'
    },
    
    // Providers Section
    providers: {
      title: 'Providers',
      delete: '删除 provider',
      selectPrompt: '选择一个 provider',
      countLabel: '{count} 个 provider'  // Template for dynamic values
    },
    
    // Provider Form Labels
    providerForm: {
      key: 'Provider 键名',
      name: '显示名称',
      npm: 'npm 包名',
      baseUrl: 'Base URL',
      apiKey: 'API 密钥',
      setCacheKey: '设置缓存键',
      optionsJson: 'Provider 选项 JSON',
      placeholderKey: 'provider-id',
      placeholderName: '可选的显示名称',
      placeholderNpm: '@ai-sdk/openai',
      placeholderBaseUrl: 'https://api.example.com/v1',
      placeholderApiKey: '建议使用 {env:YOUR_API_KEY}'
    },
    
    // Models Section
    models: {
      title: 'Models',
      listTitle: '模型列表',
      add: '添加模型',
      delete: '删除模型',
      selectPrompt: '选择一个模型',
      unnamed: '未命名模型'
    },
    
    // Model Form Labels
    modelForm: {
      key: '模型键名',
      name: '显示名称',
      thinking: 'Thinking',
      contextLimit: '上下文限制',
      outputLimit: '输出限制',
      modalitiesJson: 'Modalities JSON',
      optionsJson: '模型选项 JSON',
      variantsJson: '变体 JSON',
      placeholderKey: 'gpt-5.4',
      placeholderName: 'GPT-5.4'
    },
    
    // Preview Section
    preview: {
      title: 'Provider JSON',
      eyebrow: '预览'
    },
    
    // Select Options
    select: {
      unset: '未设置',
      true: '是',
      false: '否'
    },
    
    // Status Messages (Dynamic)
    status: {
      configLoaded: '配置已加载',
      defaultMissing: '默认配置缺失 - 以空的 provider 树开始',
      changesApplied: '更改已本地应用。准备好后保存。',
      providerAdded: '已添加 {key}',
      providerDeleted: 'Provider 已本地删除。保存以持久化。',
      modelAdded: '已添加 {key}',
      modelDeleted: '模型已本地删除。保存以持久化。',
      saved: '已保存 {count} 个 provider 条目',
      loadFirst: '保存前请先加载配置文件',
      selectProviderFirst: '请先选择或创建一个 provider',
      keyRequired: '{type} 键名为必填项',
      keyExists: '键名已存在: {key}',
      invalidJson: '{label} 必须是有效的 JSON 对象',
      invalidNumber: '无效的数字: {value}'
    }
  },
  
  en: {
    // Mirror structure with English values
    app: { title: 'Provider Editor', eyebrow: 'OpenCode / Provider Workbench' },
    actions: {
      loadWorkspace: 'Load workspace config',
      openConfig: 'Open another config',
      saveProvider: 'Save provider section',
      addProvider: 'Add provider'
    },
    // ... (all other English translations)
  }
};
```

### 2.2 Translation Helper Function
Add a lightweight `t()` function with support for nested keys and interpolation:

```javascript
function t(key, vars = {}) {
  const dict = translations[state.i18n.locale] || translations.zh;
  const value = key.split('.').reduce((obj, k) => obj?.[k], dict) || key;
  return value.replace(/\{(\w+)\}/g, (_, name) => vars[name] ?? `{${name}}`);
}
```

### 2.3 Translatable Content Inventory
**Static HTML elements** (33 translation targets):
- 3 eyebrow texts
- 3 section headings (h1, h2s)
- 1 lede paragraph
- 6 button labels
- 6 form section labels
- 11 input/select labels
- 2 file card labels
- 1 badge label

**Dynamic JS-generated content** (6 translation targets):
- Provider count badge (`{n} provider(s)`)
- Model count meta (`{n} model(s)`)
- Status messages (11 unique messages)
- Editor placeholder titles

---

## 3. DOM Update Approach

### 3.1 Static Content Strategy: `data-i18n` Attributes
Add data attributes to HTML elements for automatic translation:

```html
<!-- Example in index.html -->
<p class="eyebrow" data-i18n="app.eyebrow">OpenCode / Provider Workbench</p>
<h1 data-i18n="app.title">Provider Editor</h1>

<button id="loadDefaultButton" data-i18n="actions.loadWorkspace">Load workspace config</button>

<label>
  <span data-i18n="providerForm.key">Provider key</span>
  <input data-i18n-placeholder="providerForm.placeholderKey" placeholder="provider-id" />
</label>
```

**Translation function for static content:**
```javascript
function applyTranslations() {
  // Text content
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    el.textContent = t(key);
  });
  
  // Placeholders
  document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
    const key = el.getAttribute('data-i18n-placeholder');
    el.placeholder = t(key);
  });
  
  // HTML lang attribute
  document.documentElement.lang = state.i18n.locale === 'zh' ? 'zh-CN' : 'en';
}
```

### 3.2 Dynamic Content Strategy: Replace Hardcoded Strings
Update JS render functions to use `t()`:

```javascript
// BEFORE:
els.providerCountBadge.textContent = `${entries.length} provider${entries.length === 1 ? '' : 's'}`;
meta.textContent = `${modelCount} model${modelCount === 1 ? '' : 's'}`;
setStatus('Config loaded.');

// AFTER:
els.providerCountBadge.textContent = t('providers.countLabel', { count: entries.length });
meta.textContent = t('models.countLabel', { count: modelCount });
setStatus(t('status.configLoaded'));
```

### 3.3 Language Switcher UI
Add toggle buttons to the sidebar (top-right of header or in actions panel):

```html
<div class="lang-switcher">
  <button data-lang="zh" class="lang-btn active">中</button>
  <button data-lang="en" class="lang-btn">EN</button>
</div>
```

**Event handler:**
```javascript
function setLocale(locale) {
  if (state.i18n.locale === locale) return;
  state.i18n.locale = locale;
  applyTranslations();
  render(); // Re-render dynamic content
  
  // Update active state on buttons
  document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.classList.toggle('active', btn.dataset.lang === locale);
  });
}
```

---

## 4. Styling Changes (Light/Dark Theme)

### 4.1 CSS Variable Strategy
Replace hardcoded dark values with theme-scoped variables:

```css
/* Light Theme (default) */
:root {
  --bg: #f5f7fa;
  --panel: rgba(255, 255, 255, 0.92);
  --panel-border: rgba(0, 0, 0, 0.08);
  --panel-strong: rgba(255, 255, 255, 0.98);
  --accent: #0d9488;
  --accent-strong: #0f766e;
  --warn: #dc2626;
  --text: #1f2937;
  --muted: #6b7280;
  --shadow: 0 24px 70px rgba(0, 0, 0, 0.12);
  --radius: 24px;
  --radius-sm: 16px;
  --grid-gap: 18px;
  --font-display: "Segoe UI Semibold", "Trebuchet MS", "Microsoft YaHei", sans-serif;
  --font-body: "Segoe UI", "Microsoft YaHei UI", sans-serif;
  
  /* Component-specific tokens */
  --input-bg: #ffffff;
  --input-border: rgba(0, 0, 0, 0.12);
  --button-bg: rgba(0, 0, 0, 0.04);
  --button-hover-bg: rgba(0, 0, 0, 0.08);
  --preview-bg: #f0f4f8;
  --preview-text: #0f766e;
}

/* Dark Theme (moved from :root) */
[data-theme="dark"] {
  --bg: #0a0e13;
  --panel: rgba(16, 22, 28, 0.88);
  --panel-border: rgba(151, 182, 200, 0.14);
  --panel-strong: rgba(20, 28, 34, 0.96);
  --accent: #7ee1c3;
  --accent-strong: #b8ffde;
  --warn: #ff8d79;
  --text: #f2f7fb;
  --muted: #8fa4b2;
  --shadow: 0 24px 70px rgba(0, 0, 0, 0.34);
  --input-bg: rgba(5, 10, 14, 0.6);
  --input-border: rgba(255, 255, 255, 0.08);
  --button-bg: rgba(255, 255, 255, 0.04);
  --button-hover-bg: rgba(255, 255, 255, 0.08);
  --preview-bg: rgba(2, 6, 9, 0.72);
  --preview-text: #c8f5e6;
}
```

### 4.2 Background Gradient Adjustments
The current dark theme uses complex radial gradients. For light theme, simplify to:

```css
html, body {
  background: var(--bg);
}

/* Optional: subtle gradient for light theme */
[data-theme="light"] body {
  background: 
    radial-gradient(circle at top left, rgba(13, 148, 136, 0.08), transparent 40%),
    radial-gradient(circle at right 10% top 14%, rgba(220, 38, 38, 0.06), transparent 30%),
    linear-gradient(135deg, #f5f7fa, #ffffff);
}

[data-theme="dark"] body {
  /* Existing dark gradient from current styles.css */
}
```

### 4.3 Component Style Mappings
Update selectors to use theme variables:

```css
button {
  background: var(--button-bg);
  color: var(--text);
  border: 1px solid var(--input-border);
}

button:hover {
  background: var(--button-hover-bg);
}

button.primary {
  background: linear-gradient(135deg, var(--accent), var(--accent-strong));
  color: white; /* Always white text on accent */
}

input, select, textarea {
  background: var(--input-bg);
  border: 1px solid var(--input-border);
  color: var(--text);
}

.preview-pane {
  background: var(--preview-bg);
  color: var(--preview-text);
}

.list-item {
  background: var(--button-bg);
  border: 1px solid var(--input-border);
}

.list-item.active {
  background: linear-gradient(135deg, 
    color-mix(in srgb, var(--accent) 18%, transparent),
    color-mix(in srgb, var(--accent) 8%, transparent)
  );
  border-color: var(--accent);
}
```

### 4.4 Theme Switcher UI
Add to sidebar alongside language switcher:

```html
<div class="theme-switcher">
  <button data-theme="light" class="theme-btn active" title="Light">☀</button>
  <button data-theme="dark" class="theme-btn" title="Dark">☾</button>
</div>
```

**Theme application logic:**
```javascript
function setTheme(mode) {
  state.theme.mode = mode;
  document.documentElement.setAttribute('data-theme', mode);
  
  // Update active button state
  document.querySelectorAll('.theme-btn').forEach(btn => {
    btn.classList.toggle('active', btn.dataset.theme === mode);
  });
}
```

---

## 5. Implementation Steps

### Step 1: Extend State & Add Translations (app.js)
1. Add `i18n` and `theme` to state object
2. Create `translations` object with `zh` and `en` keys
3. Implement `t(key, vars)` helper function

### Step 2: Add data-i18n Attributes (index.html)
1. Add `data-i18n` attributes to all static text elements
2. Add `data-i18n-placeholder` to all inputs with placeholders
3. Add language switcher buttons to sidebar header
4. Add theme switcher buttons to sidebar header

### Step 3: Apply Static Translations (app.js)
1. Create `applyTranslations()` function
2. Call it during initialization and when language changes
3. Add event listeners to language switcher buttons

### Step 4: Update Dynamic Content (app.js)
1. Replace all hardcoded strings in render functions with `t()` calls
2. Update `setStatus()` calls with translation keys
3. Update pluralization logic to use translation templates

### Step 5: Implement Theme System (styles.css)
1. Move current dark variables to `[data-theme="dark"]` selector
2. Define light theme variables in `:root`
3. Update all hardcoded colors to use CSS variables
4. Adjust gradients for light theme

### Step 6: Add Theme Switching Logic (app.js)
1. Create `setTheme(mode)` function
2. Initialize theme on load (check `localStorage` or use default)
3. Add event listeners to theme switcher buttons
4. Persist theme preference to `localStorage`

### Step 7: Persistence (app.js)
1. Save `locale` and `theme` to `localStorage` on change
2. Load saved preferences on app initialization
3. Fall back to defaults if no saved preferences

---

## 6. File Change Summary

| File | Changes |
|------|---------|
| `index.html` | Add `data-i18n` attributes, add switcher UI |
| `styles.css` | Restructure variables for themes, update selectors |
| `app.js` | Add i18n/theme state, translation functions, update all render functions |

---

## 7. Key Design Decisions

1. **No Frameworks**: Use vanilla JS with `data-*` attributes for translation markers
2. **CSS Variables for Themes**: Single stylesheet with attribute-based theming
3. **Chinese Default**: Set `locale: 'zh'` in initial state
4. **Light Default**: Define light colors in `:root`, dark in `[data-theme="dark"]`
5. **Interpolation**: Use `{var}` syntax in translations for dynamic values
6. **Persistence**: Use `localStorage` for user preferences
7. **Nested Keys**: Use dot notation (`providerForm.key`) for organization
8. **Fallback**: Return key string if translation missing

---

## 8. Edge Cases & Considerations

- **Empty provider tree**: Status messages already handle this
- **JSON parse errors**: Keep error messages translatable
- **File loading errors**: Pass error messages through translation layer
- **Right-to-left**: Not needed (Chinese/English are LTR)
- **Font loading**: Current fonts already support both languages
- **Screen readers**: Update `aria-label` attributes with translations
- **System preference**: Could respect `prefers-color-scheme` as default
