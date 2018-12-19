import React, { Fragment } from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { App } from './App';
import configureStore from './store';
import { GlobalStyle } from 'styled/GlobalStyles';
const store = configureStore();
const rootEl = document.getElementById('root');
window.store = store;



const RootReduxComponent = ({ store }) => (
  <Provider store={store}>
    <Fragment>
      <GlobalStyle />
      <App />
    </Fragment>
  </Provider>
)

ReactDOM.render(
  <RootReduxComponent store={store} />,
  rootEl,
);

if (module.hot) {
  module.hot.accept();
}
