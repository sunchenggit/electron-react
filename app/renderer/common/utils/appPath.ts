// 监听主进程和渲染进程通信
import { ipcRenderer } from 'electron';

// 获取项目绝对路径
export function getAppPath() {
  return new Promise((resolve: (value: string) => void, reject: (value: Error) => void) => {
    // 像主进程发送消息，获取 根目录
    ipcRenderer.send('get-root-path', '');
    // 监听主进程发送过来的消息
    ipcRenderer.on('reply-root-path', (event, arg: string) => {
      if (arg) {
        resolve(arg);
      } else {
        reject(new Error('项目路径错误'));
      }
    });
  });
}
