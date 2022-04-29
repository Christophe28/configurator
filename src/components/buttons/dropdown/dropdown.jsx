import React from "react";

const Dropdown = ({ data, changeDataSelected, defaultOption }) => {
  return (
    <div className="container-dropdown">
      <select
        onChange={(e) => {
          const dataSelected = data.find(
            (dataElement) => dataElement.value === e.target.value
          );
          changeDataSelected(dataSelected);
        }}
        defaultChecked={defaultOption}
      >
        {data.map((dataElement) => (
          <option key={dataElement.name} value={dataElement.value}>
            {dataElement.label}
          </option>
        ))}
      </select>
    </div>
  );
};

export default Dropdown;
