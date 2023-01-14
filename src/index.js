import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';

import './css/style.css';

import { store } from './store/store.js';

import Imager from './module/Imager.js';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <React.StrictMode>
      <Imager />
    </React.StrictMode>
  </Provider>
);
