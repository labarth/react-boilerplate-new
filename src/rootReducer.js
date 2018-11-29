import { combineReducers } from 'redux';

export function addTodo(payload) {
  return {
    type: 'ADD_TODO',
    payload
  }
}



function test(state = ['zalupa'], action) {
  switch (action.type) {
    case 'ADD_TODO':
      return state.concat([action.payload]);
    default:
      return state;
  }
}

export default combineReducers({
  test,
});
