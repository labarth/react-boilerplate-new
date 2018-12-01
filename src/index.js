import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import App from './App/App';
import configureStore from './store';

const store = configureStore();
const rootEl = document.getElementById('root');
window.store = store;

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  rootEl,
);

if (module.hot) {
  module.hot.accept();
}
