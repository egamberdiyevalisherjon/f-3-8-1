import {
  NEW_EXPENSE,
  NEW_INCOME,
  REMOVE_EXPENSE,
  REMOVE_INCOME,
} from "../action/types";

const initialState = {
  total: 0,
  income: [],
  expense: [],
};

const balanceReducer = (state = initialState, action) => {
  switch (action.type) {
    case NEW_INCOME:
      return {
        ...state,
        total: state.total + +action.payload.value,
        income: [...state.income, action.payload],
      };
    case NEW_EXPENSE:
      return {
        ...state,
        total: state.total - +action.payload.value,
        expense: [...state.expense, action.payload],
      };
    case REMOVE_INCOME: {
      const transaction = state.income.find((a) => a.id === action.payload);

      const total = state.total - +transaction.value;
      return {
        ...state,
        total,
        income: state.income.filter((a) => a.id !== action.payload),
      };
    }
    case REMOVE_EXPENSE: {
      const transaction = state.expense.find((a) => a.id === action.payload);

      const total = state.total + +transaction.value;
      return {
        ...state,
        total,
        expense: state.expense.filter((a) => a.id !== action.payload),
      };
    }
    default:
      return state;
  }
};

export default balanceReducer;
