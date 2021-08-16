// Coloque aqui suas actions
export const userEmail = (email) => ({ type: 'USER_EMAIL', email });
export const currenciesAction = (currencies) => ({
  type: 'GET_CURRENCIES',
  currencies,
});
export const newExpenseAction = (details) => ({ type: 'ADD_EXPENSE', details });
export const delExpenseAction = (id) => ({ type: 'DELETE_EXPENSE', id });
export const changeFormMenu = (bool, objToChange) => ({
  type: 'CHANGE_FORM',
  bool,
  objToChange,
});
export const changeExpense = (bool, changedObj) => ({
  type: 'CHANGE_EXPENSE',
  bool,
  changedObj,
});

export const fetchCurrencies = () => (dispatch) => fetch('https://economia.awesomeapi.com.br/json/all')
  .then((result) => result.json())
  .then((data) => dispatch(currenciesAction(data)));
