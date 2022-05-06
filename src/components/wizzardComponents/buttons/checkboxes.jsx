//React import
import React, { useState, useEffect } from "react";

const contains = (value, array) => {
  let found = false
  array.forEach((item) => {
    if (item.value === value) {
      found = true
    }
  })
  return found
}

const Checkboxes = ({ items, onChangeAction, selectedItems = [] }) => {
  console.log(selectedItems)
  const [checkboxesState, setCheckboxesState] = useState(
    items.map((item) => contains(item.value, selectedItems))
  );

  useEffect(() => {
    console.log(checkboxesState)
    onChangeAction(items.filter((item, index) => checkboxesState[index]));
  }, [checkboxesState]);

  return (
    <div>
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
