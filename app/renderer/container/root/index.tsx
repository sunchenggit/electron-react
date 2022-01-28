import React, { useEffect } from 'react';
import './index.less';
import Logo from '@assets/logo.png';
import { useNavigate } from 'react-router';
import { shell } from 'electron';
import { ROUTER_KEY, ROUTER_ENTRY } from '@common/contants/router';
import { isHttpOrHttps } from '@common/utils/router';
import { useSelector, useDispatch } from 'react-redux';

function Root() {
  const navigate = useNavigate();
  const onRouterToLink = (item: TSRouter.Item) => {
    if (isHttpOrHttps(item.url)) {
      // 通过shell模块打开默认浏览器，进入对应链接所在页面
      shell.openExternal('https://github.com/PDKSophia/visResumeMook');
    } else {
      navigate('/resume');
    }
  };
  const dispatch = useDispatch();
  const appName = useSelector((state: any) => state.globalModel.appName);
  useEffect(() => {
    setTimeout(() => {
      console.log('3s 后修改...');
      dispatch({
        type: 'globalModel/setStore',
        payload: {
          key: 'appName',
          values: 'visResumeMook',
        },
      });
    }, 3000);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    console.log('appName = ', appName);
  }, [appName]);

  return (
    <div styleName="root">
      <div styleName="container">
        <img src={Logo} alt="" />
        <div styleName="title">一个模板简历制作平台, 让你的简历更加出众 ~</div>
        <div styleName="action">
          {ROUTER_ENTRY.map((item: TSRouter.Item) => {
            return (
              <div key={item.key} styleName="item" onClick={() => onRouterToLink(item)}>
                {item.text}
              </div>
            );
          })}
        </div>
        <div styleName="copyright">
          <div styleName="footer">
            <p styleName="copyright">
              Copyright © 2018-{new Date().getFullYear()} All Rights Reserved. Copyright By pengdaokuan
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Root;
