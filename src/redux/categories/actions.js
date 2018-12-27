import { createAction } from 'redux-actions';
import { ADD_CATEGORY, DELETE_CATEGORY } from 'contstants/actionTypes';

export const addCategory = createAction(ADD_CATEGORY);
export const deleteCategory = createAction(DELETE_CATEGORY);
