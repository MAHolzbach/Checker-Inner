import React from "react";

const Button = ({ onClick, children }) => {
  return (
    <button
      type="button"
      onClick={e => {
        e.preventDefault();
        onClick();
      }}
    >
      {children}
    </button>
  );
};

export default Button;
