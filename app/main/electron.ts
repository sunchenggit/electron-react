/**
 * @desc electron 主入口
 */

const path = require('path');
const { app, BrowserWindow, ipcMain } = require('electron');
const ROOT_PATH = path.join(app.getAppPath(), '../');

// 监听渲染进程发送来的消息
ipcMain.on('get-root-path', (event, arg) => {
  // 给渲染进程回复信息
  event.reply('reply-root-path', ROOT_PATH);
});

function isDev() {
  return process.env.NODE_ENV === 'development';
}

function createWindow() {
  // 创建浏览器窗口
  const mainWindow = new BrowserWindow({
    width: 1200,
    height: 800,
    webPreferences: {
      nodeIntegration: true, // 注入node模块
      contextIsolation: false,
    },
  });
  if (isDev()) {
    mainWindow.loadURL(`http://127.0.0.1:7001`);
  } else {
    mainWindow.loadURL(`file://${path.join(__dirname, '../dist/index.html')}`);
  }
}

app.whenReady().then(() => {
  createWindow();
  app.on('active', function () {
    if (BrowserWindow.getAllWindows().length === 0) createWindow();
  });
});
