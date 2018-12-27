import { createSelector } from 'reselect';
import { sortByDate } from 'utils/sort';


const notesSelector = (state) => state.notes;

const sortNotesTypeSelector = (state) => state.sortNotes;

export const totalBalanceSelector = createSelector(
  notesSelector,
  (items) => (
    items.reduce(((acc, item) => acc + (item.get('isInc') ? Number(item.get('price')) : item.get('price') * -1)), 0)
  ),
);

export const sortByDateSelector = createSelector(
  [notesSelector, sortNotesTypeSelector],
  (items, type) => sortByDate(items, type),
);
