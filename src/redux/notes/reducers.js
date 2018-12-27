import { List, Map } from 'immutable';
import { handleActions } from 'redux-actions';
import { getLocalStorage } from 'utils/utils';
import { actions } from './actions';

const initialState = () => {
  const notes = getLocalStorage('notes');

  if (notes === null) {
    return List();
  }

  const newNotes = notes.map((item) => Map(item));

  return List(newNotes);
};

const addNode = (state, { payload }) => state.push(payload.note);

const deleteNote = (state, { payload }) => state.filter((note) => note.get('id') !== payload.id);


export default handleActions({
  [actions.addNote]: addNode,
  [actions.deleteNote]: deleteNote,
}, initialState());
