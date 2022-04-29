import React from "react";
import ColorPicker from "./color-picker";

const ColorPickers = ({ data, changeColor }) => {

  const dataKeys = Object.keys(data);

  return (
    <div className="container-pickers-colors">
      {dataKeys.map((dataKey) => (
        <ColorPicker
          key={dataKey} 
          label={dataKey}
          name={dataKey}
          value={data[dataKey]}
          id={dataKey}
          onChange={changeColor}
        />
      ))}
    </div>
  );
};

export default ColorPickers;
