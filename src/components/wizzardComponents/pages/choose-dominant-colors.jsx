//React import
import React from "react";

const ChooseDominantColor = ({ themeColors, setColor, color }) => {
  
  return (
    <div className="container-dominant-color">
      <h2>Quelle est la couleur dominante de votre charte graphique ?</h2>
      {themeColors.map((themeColor) => (
        <input
          type="button"
          key={themeColor.value}
          style={themeColor.hexadecimalColor === color ? {background: themeColor.hexadecimalColor, height: "5rem", width: "5rem"} : {background: themeColor.hexadecimalColor, opacity: 0.45}}
          onClick={(e) => setColor(themeColor.hexadecimalColor)}
        />
      ))}
    </div>
  );
};

export default ChooseDominantColor;
