import React from 'react';
import { HashRouter, Switch, Route, Redirect } from 'react-router-dom';
import Root from './container/root';
import Resume from './container/resume';
import ROUTER from '@common/constants/router';

function Router() {
  return (
    <HashRouter>
      <Switch>
        <Route path={ROUTER.root} exact>
          <Root />
        </Route>
        <Route path={ROUTER.resume} exact>
          <Resume />
        </Route>
      </Switch>
      <Redirect to="/" />
    </HashRouter>
  );
}

export default Router;
