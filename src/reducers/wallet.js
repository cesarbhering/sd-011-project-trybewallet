// Esse reducer será responsável por tratar o todas as informações relacionadas as despesas
const INITIAL_STATE = {
  currencies: [],
  expenses: [],
};

const wallet = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case 'CURRENCIES':
    return {
      ...state, currencies: [...action.payload.currencies],
    };
  case 'SAVE_EXPENSE':
    return {
      ...state,
      expenses: [
        ...state.expenses,
        { id: state.expenses.length, ...action.payload.expenses },
      ],
    };
  case 'DELETE_EXPENSE':
    return {
      ...state,
      expenses: [
        ...(state.expenses.filter((expense) => expense.id !== action.payload.expenseId)),
      ],
    };
  default:
    return state;
  }
};

export default wallet;
