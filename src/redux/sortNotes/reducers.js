import { handleActions } from 'redux-actions';
import { SORT_DATE_ASC } from 'contstants/constants';
import { sortNotesType } from './actions';


const sortNotesTypeReducer = (_, { payload }) => payload.type;

export default handleActions({
  [sortNotesType]: sortNotesTypeReducer,
}, SORT_DATE_ASC);
