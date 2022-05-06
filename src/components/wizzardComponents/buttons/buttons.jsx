import React from "react";

const Button = ({ style, name, onClick }) => {
  
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
