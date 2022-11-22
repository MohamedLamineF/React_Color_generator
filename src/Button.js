import React from "react";

const Button = ({ btnBg, screenBg, onChangeBackGround }) => {
  return (
    <button
      onClick={onChangeBackGround}
      className="button"
      style={{ backgroundColor: `${btnBg}`, color: `${screenBg}` }}
    >
      GENERATE
    </button>
  );
};

export default Button;
