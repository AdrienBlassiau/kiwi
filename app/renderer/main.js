import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import MainPage from './components/MainPage';
import * as serviceWorker from './serviceWorker';

import { HashRouter, Route } from 'react-router-dom';

ReactDOM.render(
  <HashRouter>
    <App />
  </HashRouter>,
  document.getElementById('root'),
);

serviceWorker.unregister();
