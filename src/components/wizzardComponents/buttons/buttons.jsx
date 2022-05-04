import React from "react";

const Buttons = ({ themeColors }) => {
  return (
    <div className="container-color-pickers">

      {themeColors.map((themeColor) => (        
        <input 
          type="button" 
          style={{backgroundColor: themeColor.hexadecimalColor}}
          name={themeColor.hexadecimalColor}
          key={themeColor.hexadecimalColor}
          onClick={onClick}
        />
      ))}
    </div>
  );
};

export default Buttons;
