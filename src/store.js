import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import rootReducer from 'redux/rootReducer';
import { localStorageMiddleware } from 'middlewares/localStorageMiddleware';


export default function configureStore() {
  const enhancer = applyMiddleware(thunk, logger, localStorageMiddleware);

  const store = createStore(
    rootReducer,
    composeWithDevTools(enhancer),
  );

  if (module.hot) {
    module.hot.accept('./redux/rootReducer', () => {
      const nextRootReducer = require('./redux/rootReducer').default; // eslint-disable-line global-require
      store.replaceReducer(nextRootReducer);
    });
  }

  return store;
}
