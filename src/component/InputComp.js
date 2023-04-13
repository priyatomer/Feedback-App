import React from "react";

const InputComp = ({ text, placeholder, value, className, onChange }) => {
  return (
    <input
      type={text}
      placeholder={placeholder}
      className={className}
      value={value}
      onChange={onChange}
    ></input>
  );
};

export default InputComp;
