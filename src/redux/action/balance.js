import {
  NEW_EXPENSE,
  NEW_INCOME,
  REMOVE_EXPENSE,
  REMOVE_INCOME,
} from "./types";

export const newIncome = (income) => {
  return {
    type: NEW_INCOME,
    payload: income,
  };
};

export const newExpense = (expense) => {
  return {
    type: NEW_EXPENSE,
    payload: expense,
  };
};

export const removeExpense = (id) => {
  return {
    type: REMOVE_EXPENSE,
    payload: id,
  };
};

export const removeIncome = (id) => {
  return {
    type: REMOVE_INCOME,
    payload: id,
  };
};
