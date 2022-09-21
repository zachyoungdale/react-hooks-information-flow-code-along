import React, { useState } from "react";
import { getRandomColor } from "./randomColorGenerator.js";
import Child from "./Child";

function Parent() {
  const randomColor = getRandomColor();
  const [color, setColor] = useState(randomColor);
  const [childrenColor, setchildrenColor] = useState("#FFF");

  function handleColorChange(newChildColor) {
    const newRandomColor = getRandomColor();
    setColor(newRandomColor);
    setchildrenColor(newChildColor);
  }

  return (
    <div className="parent" style={{ backgroundColor: color }}>
      <Child color={childrenColor} onChangeColor={handleColorChange} />
      <Child color={childrenColor} onChangeColor={handleColorChange} />
    </div>
  );
}

export default Parent;
