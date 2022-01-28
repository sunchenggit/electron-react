import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Test from './components/Test';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Test text="可视化简历平台" />} />
    </Routes>
  );
}

ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById('root')
);
