import React from "react";
import Expense from "./Expense";
import Income from "./Income";

const Detail = () => {
  return (
    <div className="container clearfix">
      <Income />
      <Expense />
    </div>
  );
};

export default Detail;
