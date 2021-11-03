import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { removeExpense } from "../redux/action/balance";

const Expense = () => {
  const { expense } = useSelector((state) => state.balance);

  const dispatch = useDispatch();

  const handleRemove = (id) => {
    dispatch(removeExpense(id));
  };

  return (
    <div className="expenses">
      <h2 className="expenses__title">Expenses</h2>

      <div className="expenses__list">
        {expense.map((transaction, index) => {
          return (
            <div class="item clearfix" id="exp-%id%">
              <div class="item__description">{transaction.desc}</div>
              <div class="right clearfix">
                <div class="item__value">{transaction.value}</div>

                <div class="item__delete">
                  <button
                    onClick={() => handleRemove(transaction.id)}
                    class="item__delete--btn"
                  >
                    <i class="ion-ios-close-outline"></i>
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Expense;
