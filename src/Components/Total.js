import React from "react";
import { useSelector } from "react-redux";

const Total = () => {
  const balance = useSelector((state) => state.balance);

  const income = balance.income.reduce((prev, curr) => {
    return prev + +curr.value;
  }, 0);

  const expense = balance.expense.reduce((prev, curr) => {
    return prev + +curr.value;
  }, 0);

  let defference = income === 0 ? "" : Math.floor((+expense * 100) / +income);

  return (
    <div>
      <div className="budget__income clearfix">
        <div className="budget__income--text">Income</div>
        <div className="right">
          <div className="budget__income--value">+ {income}$</div>
          <div className="budget__income--percentage">&nbsp;</div>
        </div>
      </div>

      <div className="budget__expenses clearfix">
        <div className="budget__expenses--text">Expenses</div>
        <div className="right clearfix">
          <div className="budget__expenses--value">- {expense}$</div>
          <div className="budget__expenses--percentage">{defference}%</div>
        </div>
      </div>
    </div>
  );
};

export default Total;
