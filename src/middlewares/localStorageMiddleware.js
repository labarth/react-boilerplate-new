import { ADD_NOTE, DELETE_NOTE, DELETE_CATEGORY, ADD_CATEGORY } from 'contstants/actionTypes';
import { setLocalStorage } from 'utils/utils';

export const localStorageMiddleware = (store) => (next) => (action) => {
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
