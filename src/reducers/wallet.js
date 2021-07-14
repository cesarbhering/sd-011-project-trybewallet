import {
  FETCH_CURRENCIES,
  FETCH_CURRENCIES_SUCCEEDED,
  FETCH_CURRENCIES_FAILED,
  WALLET_ADDED_EXPENSE,
  WALLET_REMOVED_EXPENSE,
} from '../actions';

const DEFAULT_STATE = {
  currencies: [],
  expenses: [],
};

const walletReducer = (state = DEFAULT_STATE, action) => {
  switch (action.type) {
  case FETCH_CURRENCIES:
    return { ...state, loading: true };
  case FETCH_CURRENCIES_SUCCEEDED:
    return {
      ...state,
      currencies: action.currencies,
    };
  case FETCH_CURRENCIES_FAILED:
    return {
      ...state,
      error: action.err,
    };
  case WALLET_ADDED_EXPENSE:
    return { ...state, expenses: [...state.expenses, action.expense] };
  case WALLET_REMOVED_EXPENSE:
    return {
      ...state,
      expenses: state.expenses.filter(({ id }) => id !== action.expenseId),
    };
  default:
    return state;
  }
};

export default walletReducer;
