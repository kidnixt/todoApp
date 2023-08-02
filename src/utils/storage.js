const setToLocalStorage = (key, value) => {
  const stringData = JSON.stringify(value);
  localStorage.setItem(key, stringData);
};

const getFromLocalStorage = (key) => {
  const value = localStorage.getItem(key);
  return value ? JSON.parse(value) : null;
};
const removeFromLocalStorage = (key) => {
  localStorage.removeItem(key);
};

export { setToLocalStorage, getFromLocalStorage, removeFromLocalStorage };
