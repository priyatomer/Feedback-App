import React from "react";
import "../../src/App.css";

const RadioComp = ({ checked, onChange, id, className, htmlFor, title }) => {
  return (
    <div className="inputdiv">
      <input
        className={className}
        type="radio"
        id={id}
        checked={checked}
        onChange={onChange}
      />
      <label htmlFor={htmlFor}>{title}</label>
    </div>
  );
};

export default RadioComp;
