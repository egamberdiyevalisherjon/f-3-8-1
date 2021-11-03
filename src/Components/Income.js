import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { removeIncome } from "../redux/action/balance";

const Income = () => {
  const { income } = useSelector((state) => state.balance);
  
  const dispatch = useDispatch();

  const handleRemove = (id) => {
    dispatch(removeIncome(id));
  };
  return (
    <div className="income">
      <h2 className="icome__title">Income</h2>

      <div className="income__list">
        {income.map((transaction, index) => {
          return (
            <div key={index} class="item clearfix" id="inc-%id%">
              <div class="item__description">{transaction.desc}</div>
              <div class="right clearfix">
                <div class="item__value">{transaction.value}</div>
                <div class="item__delete">
                  <button onClick={() => handleRemove(transaction.id)} class="item__delete--btn">
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

export default Income;
