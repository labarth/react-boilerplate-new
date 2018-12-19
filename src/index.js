import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { GlobalStyle } from 'styled/GlobalStyles';
import { App } from './App';
import configureStore from './store';

const store = configureStore();
const rootEl = document.getElementById('root');
window.store = store;


const RootReduxComponent = (props) => (
  <Provider store={props.store}>
    <Fragment>
      <GlobalStyle />
      <App />
    </Fragment>
  </Provider>
);

RootReduxComponent.propTypes = {
  store: PropTypes.shape({}).isRequired,
};

ReactDOM.render(
  <RootReduxComponent store={store} />,
  rootEl,
);

if (module.hot) {
  module.hot.accept();
}
