//React import
import React, { useState, useEffect } from "react";

const Checkboxes = ({ items, onChangeAction, selectedItems = [] }) => {

  const [checkboxesState, setCheckboxesState] = useState(
    items.map((item) => selectedItems.some(selectedItem => selectedItem.value === item.value))
  );

  useEffect(() => { 
    onChangeAction(items.filter((item, index) => checkboxesState[index]));
  }, [checkboxesState]);

  return (
    <div className="container-checkboxes">
      {items.map((item, index) => {
        return (
          <div key={item.value}>
            <input
              type="checkbox"
              id={item.value}
              name={item.value}
              value={item.value}
              defaultChecked={checkboxesState[index]}
              onChange={(e) => {
                setCheckboxesState((oldCheckboxesState) => {
                  const newCheckboxesState = [...oldCheckboxesState];
                  newCheckboxesState[index] = e.target.checked;
                  return newCheckboxesState;
                });
              }}
            />
            <label htmlFor={item.value}>{item.label}</label>
          </div>
        );
      })}
    </div>
  );
};

export default Checkboxes;
