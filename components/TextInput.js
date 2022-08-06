import React from "react";

const TextInput = ({ type, placeholder, style, styleClass }) => {
  return (
    <div>
      <input
        type={type}
        placeholder={placeholder}
        style={style}
        className={`${styleClass}`}
      ></input>
    </div>
  );
};

export default TextInput;
