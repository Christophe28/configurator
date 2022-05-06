//React import
import React from "react";

const ChooseDominantColor = ({ themeColors, setColor }) => {
  return (
    <div className="container-dominant-color">
      <h2>Couleur dominante</h2>
      {themeColors.map((themeColor) => (
        <input
          type="button"
          key={themeColor.value}
          style={{ background: themeColor.hexadecimalColor }}
          onClick={(e) => setColor(themeColor.hexadecimalColor)}
        />
      ))}
    </div>
  );
};

export default ChooseDominantColor;
