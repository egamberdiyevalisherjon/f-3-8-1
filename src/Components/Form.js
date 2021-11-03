import React, { useRef } from "react";
import { useDispatch } from "react-redux";
import { newExpense, newIncome } from "../redux/action/balance";

const Form = () => {
  const dispatch = useDispatch();

  const selectRef = useRef();
  const descRef = useRef();
  const valRef = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();

    const transaction = {
      desc: descRef.current.value,
      value: valRef.current.value,
      id: Math.random() + Date.now(),
    };

    dispatch(
      selectRef.current.value === "inc"
        ? newIncome(transaction)
        : newExpense(transaction)
    );

    e.target.reset();
  };

  return (
    <form className="add" onSubmit={handleSubmit}>
      <div className="add__container">
        <select ref={selectRef} className="add__type" defaultValue="inc">
          <option value="inc">+</option>
          <option value="exp">-</option>
        </select>
        <input
          ref={descRef}
          type="text"
          className="add__description"
          placeholder="Add description"
        />
        <input
          ref={valRef}
          type="number"
          className="add__value"
          placeholder="Value"
        />
        <button className="add__btn">
          <i className="ion-ios-checkmark-outline"></i>
        </button>
      </div>
    </form>
  );
};

export default Form;
