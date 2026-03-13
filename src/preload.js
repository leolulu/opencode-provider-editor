const { contextBridge, ipcRenderer } = require('electron');

contextBridge.exposeInMainWorld('providerEditorApi', {
  loadDefaultConfig: () => ipcRenderer.invoke('config:load-default'),
  openConfigFile: () => ipcRenderer.invoke('config:open'),
  saveProviderSection: (payload) => ipcRenderer.invoke('config:save-provider', payload)
});
