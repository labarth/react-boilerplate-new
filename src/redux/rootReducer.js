import { combineReducers } from 'redux';
import notes from 'redux/notes/reducers';
import categories from 'redux/categories/reducers';

export default combineReducers({
  notes,
  categories,
});
