import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Root from '@src/container/root';
import Resume from '@src/container/resume';
import ROUTER from '@common/contants/router';

function Router() {
  return (
    <Routes>
      <Route path={ROUTER.root} element={<Root />} />
      <Route path={ROUTER.resume} element={<Resume />} />
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  );
}

export default Router;
