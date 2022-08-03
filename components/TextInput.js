import React from "react";

const TextInput = ({ type, placeholder, style }) => {
  return (
    <div>
      <input type={type} placeholder={placeholder} style={style}></input>
    </div>
  );
};

export default TextInput;
