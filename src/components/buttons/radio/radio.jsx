import React from "react";
import SingleRadio from "./single_radio";

const Radio = ({ options, defaultOption, onChange, name }) => {
  return (
    <div className="container-radios">
      {options.map((option) => (
        <SingleRadio 
            key={option.value}
            label={option.label}
            name={name}
            value={option.value}
            id={option.value}
            onChange={(e) => {
              const [optionSelected] = options.filter(option => option.value === e.target.value);
              onChange(optionSelected);
            }}
            defaultChecked={defaultOption.name === option.value}
        />
      ))}
    </div>
  );
};

export default Radio;
