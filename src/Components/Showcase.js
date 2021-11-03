import React from "react";
import Balance from "./Balance";
import Total from "./Total";

const Showcase = () => {
  return (
    <div className="top">
      <div className="budget">
        <Balance />
        <Total />
      </div>
    </div>
  );
};

export default Showcase;
