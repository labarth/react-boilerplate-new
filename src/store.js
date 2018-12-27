import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import { setLocalStorage } from 'utils/utils';
import { ADD_CATEGORY, ADD_NOTE, DELETE_CATEGORY, DELETE_NOTE } from 'contstants/actionTypes';
import rootReducer from './redux/rootReducer';

const setlocalStorageMiddleware = (store) => (next) => (action) => {
  const result = next(action);

  switch (action.type) {
    case ADD_NOTE:
      setLocalStorage('notes', store.getState().notes);
      break;
    case DELETE_NOTE:
      setLocalStorage('notes', store.getState().notes);
      break;
    case ADD_CATEGORY:
      setLocalStorage('categories', store.getState().categories);
      break;
    case DELETE_CATEGORY:
      setLocalStorage('categories', store.getState().categories);
      break;
    default:
      return null;
  }

  return result;
};

export default function configureStore() {
  const enhancer = applyMiddleware(thunk, logger, setlocalStorageMiddleware);

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
