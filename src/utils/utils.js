export const getLocalStorage = (item) => (window.localStorage ? JSON.parse(window.localStorage.getItem(item)) : null);
export const setLocalStorage = (name, item) => (
  window.localStorage ? window.localStorage.setItem(name, JSON.stringify(item)) : null
);
