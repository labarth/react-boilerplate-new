import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import App from './App/App';
import configureStore from './store';

const store = configureStore();
const rootEl = document.getElementById('root');
window.store = store;


const RootReduxComponent = ({ store }) => (
  <Provider store={store}>
    <App />
  </Provider>
)

ReactDOM.render(
  <RootReduxComponent store={store} />,
  rootEl,
);

if (module.hot) {
  module.hot.accept();
}
