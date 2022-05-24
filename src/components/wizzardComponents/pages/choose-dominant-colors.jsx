//React import
import React from "react";
import ColorsPickerWrapper from "../../layout/colors-picker-wrapper";

const ChooseDominantColor = ({ themeColors, setColor, color, colorsPickerValue, setColorsPickerValue }) => {
  
  return (
    <div className="container-dominant-color">
      <h2>Quelle est la couleur dominante de votre charte graphique ?</h2>
      <section className="colors">
      {themeColors.map((themeColor) => (
        <input
          type="button"
          key={themeColor.value}
          style={
            themeColor.hexadecimalColor === color
              ? {
                  background: themeColor.hexadecimalColor,
                  height: "4.3rem",
                  width: "4.3rem",
                }
              : { background: themeColor.hexadecimalColor, opacity: 0.45 }
          }
          onClick={(e) => setColor(themeColor.hexadecimalColor)}
        />
      ))}
      <ColorsPickerWrapper 
        setColor={setColor} 
        color={color} 
        colorsPickerValue={colorsPickerValue}
        setColorsPickerValue={setColorsPickerValue}
      />
      </section>
    </div>
  );
};

export default ChooseDominantColor;
