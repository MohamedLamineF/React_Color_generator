import React, { useState } from "react";
import Button from "./Button";
import "./App.css";
import { contrastColor } from "contrast-color";

const App = () => {
  const RandomColor = () => {
    return "#" + Math.random().toString(16).substring(9,16);
  };
  const handleChangeBackGround = () => {
    setScreenBg(RandomColor);
  };

  let [screenBg, setScreenBg] = useState(RandomColor);
  let btnBg = contrastColor({ bgColor: screenBg });

  return (
    <div
      className="App"
      style={{ backgroundColor: `${screenBg}`, height: "100%" }}
    >
      <div className="center">
        <h2 className="colorName" style={{ color: `${btnBg}` }}>
          {screenBg}
        </h2>
        <Button
          onChangeBackGround={handleChangeBackGround}
          screenBg={screenBg}
          btnBg={btnBg}
        />
      </div>
    </div>
  );
};

export default App;
