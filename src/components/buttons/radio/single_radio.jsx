import React from "react";

const SingleRadio = ({ label, value, name, id, onChange, defaultChecked }) => {
  return (
    <>
      <label htmlFor={id}>{label}</label>
      <input
        type="radio"
        value={value}
        name={name}
        id={id}
        onChange={onChange}
        defaultChecked={defaultChecked}
      />
    </>
  );
};

export default SingleRadio;
