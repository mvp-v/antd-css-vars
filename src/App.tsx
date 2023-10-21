import { ConfigProvider } from 'antd';
import React from 'react';

import {Test} from './Test';
import { CssTokenBridge } from './CssTokenBridge';

import './App.css';

const customTheme = {
  token: {
    colorPrimary: '#00a96b'
  }
};

const App: React.FC = () => (
  <ConfigProvider theme={customTheme}>
    <CssTokenBridge />
    <Test />
  </ConfigProvider>
);

export default App;