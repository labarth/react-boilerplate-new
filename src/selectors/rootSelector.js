import { createSelector } from 'reselect';

const notesSelector = (state) => state.notes;

export const totalBalanceSelector = createSelector(
  notesSelector,
  (items) => (
    items.reduce(((acc, item) => acc + (item.get('isInc') ? Number(item.get('price')) : item.get('price') * -1)), 0)
  ),
);
