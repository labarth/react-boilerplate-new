import { combineReducers } from 'redux';
import { List } from 'immutable';

export function addTodo(payload) {
  return {
    type: 'ADD_TODO',
    payload,
  };
}

export function test(state = new List(), action) {
  switch (action.type) {
    case 'ADD_TODO':
      return state.push(action.payload);
    default:
      return state;
  }
}

export default combineReducers({
  test,
});
