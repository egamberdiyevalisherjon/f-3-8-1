import React from "react";
import { useSelector } from "react-redux";

const Balance = () => {
  const { total } = useSelector((state) => state.balance);
  return (
    <div className="budget__value">
      {total > 0 ? "+" : total < 0 ? "-" : ""} {Math.abs(total)}$
    </div>
  );
};

export default Balance;
