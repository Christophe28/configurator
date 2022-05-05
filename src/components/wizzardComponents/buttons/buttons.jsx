import React from "react";

const Buttons = ({ style, name, onClick }) => {
  
  return (
    <>
      <input 
        type="button" 
        style={style}
        name={name}
        onClick={onClick}
      />
    </>
  );
};

export default Buttons;
