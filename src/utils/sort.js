import { SORT_DATE_ASC, SORT_DATE_DES } from 'contstants/constants';

const sortDateAsc = (list) => (
  list.sort((a, b) => new Date(a.get('date')).getTime() - new Date(b.get('date')).getTime())
);

const sortDateDes = (list) => list.sort((a, b) => (
  new Date(b.get('date')).getTime() - new Date(a.get('date')).getTime()));

export const sortNotes = (list, type = SORT_DATE_ASC) => {
  switch (type) {
    case SORT_DATE_ASC:
      return sortDateAsc(list);
    case SORT_DATE_DES:
      return sortDateDes(list);
    default: console.log('error sort');
  }

  return sortDateAsc(list);
};
