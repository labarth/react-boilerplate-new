import { v4 } from 'uuid';
import { List, Map } from 'immutable';
import { handleActions } from 'redux-actions';
import { actions } from './actions';

const initialState = List([
  Map({
    id: v4(),
    price: '20',
    description: 'Носки',
    type: 'dec',
    currency: 'BYN',
    date: new Date(),
    category: 'Одежда'
  })
])


const addNode = (state, { payload }) => state.push(payload.note);

const deleteNote = (state, { payload }) => state.filter((note) => note.get('id') !== payload.id);


export default  handleActions({
  [actions.addNote]: addNode,
  [actions.deleteNote]: deleteNote,
}, initialState);