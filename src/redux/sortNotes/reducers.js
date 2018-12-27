import { handleActions } from 'redux-actions';
import { sortNotesType } from './actions';
import { SORT_DATE_ASC } from 'contstants/constants';


const sortNotesTypeReducer = (_, { payload }) => payload.type;

export default handleActions({
  [sortNotesType]: sortNotesTypeReducer,
}, SORT_DATE_ASC);