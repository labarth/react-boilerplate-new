import { combineReducers } from 'redux';
import notes from 'redux/notes/reducers';
import categories from 'redux/categories/reducers';
import sortNotes from 'redux/sortNotes/reducers';

export default combineReducers({
  notes,
  categories,
  sortNotes,
});
