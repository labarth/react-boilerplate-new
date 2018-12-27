import { handleActions } from 'redux-actions';
import { v4 } from 'uuid';
import { List, Map } from 'immutable';
import { getLocalStorage } from 'utils/utils';
import { addCategory, deleteCategory } from './actions';

const defaultCategories = List([
  Map({
    label: 'Здоровье',
    value: v4(),
  }),
  Map({
    label: 'Авто',
    value: v4(),
  }),
  Map({
    label: 'Еда',
    value: v4(),
  }),
  Map({
    label: 'Зарплата',
    value: v4(),
  }),
  Map({
    label: 'Кредиты',
    value: v4(),
  }),
  Map({
    label: 'Вклады',
    value: v4(),
  }),
  Map({
    label: 'Дом',
    value: v4(),
  }),
  Map({
    label: 'Одежда',
    value: v4(),
  }),
  Map({
    label: 'Развлечения',
    value: v4(),
  }),
]);

const initialState = () => {
  const categories = getLocalStorage('categories');

  if (categories === null) {
    return defaultCategories;
  }

  const newCategories = categories.map((item) => Map(item));

  return List(newCategories);
};

const addCategoryReducer = (state, { payload }) => state.push(payload.category);

const deleteCategoryReducer = (state, { payload }) => (
  state.filter((category) => category.get('value') !== payload.value)
);

export default handleActions({
  [addCategory]: addCategoryReducer,
  [deleteCategory]: deleteCategoryReducer,
}, initialState());
