import { createSelector } from 'reselect';

const notesSelector = (state) => state.notes;

export const totalBalanceSelector = createSelector(
  notesSelector,
  (items) => (
    items.reduce(((acc, item) => acc + (item.get('isInc') ? Number(item.get('price')) : item.get('price') * -1)), 0)
  ),
);

export const sortByDateSelector = createSelector(
  notesSelector,
  (items) => {
    const result = items.sort((firstDate, secondDate) => {
      const firstDateValue = new Date(firstDate.get('date')).toLocaleDateString();
      const secondDateValue = new Date(secondDate.get('date')).toLocaleDateString();
      if (firstDateValue > secondDateValue) {
        return 1;
      }
      if (firstDateValue < secondDateValue) {
        return -1;
      }
      return 0;
    });

    return result;
  },
);
