import React from "react";

const Line = ({ length, color, orientation }) => {
  const lineStyle = {
    backgroundColor: color,
    width: orientation === "horizontal" ? `${length}px` : "1px", // Horizontal line
    height: orientation === "vertical" ? `${length}px` : "1px", // Vertical line
  };

  return <div style={lineStyle}></div>;
};

export default Line;
