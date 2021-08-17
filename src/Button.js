import React from "react";
import { contrastColor } from  "contrast-color";

const Button = ({ btnBg, screenBg, onChangeBackGround }) => {
  // let btnBg = contrastColor({bgColor: screenBg });

  return (
    <button
      onClick={onChangeBackGround}
      className="button"
      style={{ backgroundColor: `${btnBg}`, color: `${screenBg}`}}
    >
      CHANGE COLOR
    </button>
  );
};

export default Button;
