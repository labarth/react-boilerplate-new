import { v4 } from 'uuid';
import { List, Map } from 'immutable';
import { handleActions } from 'redux-actions';
import { actions } from './actions';
import { getLocalStorage, setLocalStorage } from 'utils/utils';

const initialState = () => {
  const notes = getLocalStorage('notes');

  if (notes === null) {
    return List();
  }

  const newNotes = notes.map((item) => Map(item));

  return List(newNotes);
}

const addNode = (state, { payload }) => {
  const newState = state.push(payload.note);
  setLocalStorage('notes', newState);

  return newState;
}

const deleteNote = (state, { payload }) => {
  const newState = state.filter((note) => note.get('id') !== payload.id);
  setLocalStorage('notes', newState);
  return newState;
}


export default  handleActions({
  [actions.addNote]: addNode,
  [actions.deleteNote]: deleteNote,
}, initialState());