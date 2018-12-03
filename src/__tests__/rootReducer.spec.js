import { test } from '../rootReducer';

describe('test reducer', () => {
  it('test', () => {
    expect(test([], { type: 'ADD_TODO', payload: 'test' })).toEqual(['test']);
  });
});
