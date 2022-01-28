import React from 'react';
import fileAction from '@common/utils/file';
import { getAppPath } from '@common/utils/appPath';

function Resume() {
  getAppPath().then((rootPath: string) => {
    console.log(rootPath);
    fileAction.read(`${rootPath}/Renderer/container/resume/index.tsx`).then((data: string) => {
      console.log(data);
    });
  });
  return <div>我是简历模块</div>;
}

export default Resume;
