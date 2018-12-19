import { createAction } from 'redux-actions';

export const actions = {
  addNote: createAction('add_note'),
  deleteNote: createAction('delete_note'),
};
