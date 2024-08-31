import React from 'react';
import ReactDOM from 'react-dom/client';

import {
  BrowserRouter,
  Route,
  Routes,
} from 'react-router-dom';

import { Provider } from 'react-redux';

import App from './App';

import store from './store';

const app = ReactDOM.createRoot(document.getElementById("app"));

const basename = process.env.NODE_ENV === 'production' ? '/fancheer' : '/';

app.render(
  (
    <Provider store={store}>
      <BrowserRouter basename={basename}>
        <App />
      </BrowserRouter>
    </Provider>
  )
)
