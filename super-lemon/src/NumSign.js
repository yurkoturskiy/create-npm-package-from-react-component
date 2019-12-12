import React from "react";

function NumSign({ number, capture }) {
  return (
    <div className="num-wrapper">
      <div className="num-value">{number}</div>
      <span className="num-capture">{capture}</span>
    </div>
  );
}

export default NumSign;
