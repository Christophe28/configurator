import React from "react";

const ColorPicker = ({ label, name, value, id, onChange }) => {
  return (
    <>
      <label htmlFor={value}>{label + " : "} </label>
      <input
        type="color"
        name={name}
        id={id}
        defaultValue={value}
        onChange={(e) => {
          onChange(e.target.name, e.target.value);
        }}
      />
    </>
  );
};

export default ColorPicker;
