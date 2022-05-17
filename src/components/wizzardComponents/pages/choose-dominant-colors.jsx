//React import
import React from "react";

const ChooseDominantColor = ({ themeColors, setColor, color }) => {
  const opacityStyle = {
    opacity: 0.5
  }
  
  // const sizeStyle = {
  //   size: 
  // }
  return (
    <div className="container-dominant-color">
      <h2>Quelle est la couleur dominante de votre charte graphique ?</h2>
      {themeColors.map((themeColor) => (
        <input
          type="button"
          key={themeColor.value}
          style={{ background: themeColor.hexadecimalColor }}
          // value={themeColor.hexadecimalColor === color ? 'X': style=opacityStyle}
          onClick={(e) => setColor(themeColor.hexadecimalColor)}
        />
      ))}
    </div>
  );
};

export default ChooseDominantColor;
