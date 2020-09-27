import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { Provider } from "react-redux";
import * as serviceWorker from './serviceWorker';

import { HashRouter } from 'react-router-dom';
import { store } from './js/store';

ReactDOM.render(
  <Provider store={store}>
    <HashRouter>
      <App />
    </HashRouter>
  </Provider>,
  document.getElementById('root'),
);

serviceWorker.unregister();


