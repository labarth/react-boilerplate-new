import { SORT_DATE_ASC, SORT_DATE_DES } from 'contstants/constants';

export const sortByDate = (list, type = SORT_DATE_ASC) => (list.sort((firstDate, secondDate) => {
  const firstDateValue = new Date(firstDate.get('date')).toLocaleDateString();
  const secondDateValue = new Date(secondDate.get('date')).toLocaleDateString();
  if (type === SORT_DATE_ASC) {
    if (firstDateValue > secondDateValue) {
      return 1;
    }

    if (firstDateValue < secondDateValue) {
      return -1;
    }
    return 0;
  }
  if (type === SORT_DATE_DES) {
    if (firstDateValue < secondDateValue) {
      return 1;
    }

    if (firstDateValue > secondDateValue) {
      return -1;
    }

    return 0;
  }

  return null;
}));
