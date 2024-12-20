import React from "react";

const Input = ({ placeholder, type, reffName }) => {
  return (
    <input
      ref={reffName}
      type={type}
      className=" text-xs h-8 bg-slate-200 pl-2 rounded-lg border-2 border-slate-400"
      placeholder={placeholder}
    />
  );
};

export default Input;
