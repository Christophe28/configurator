import React from 'react';

const ColorsPickerWrapper = ({ color, setColor, colorsPickerValue, setColorsPickerValue }) => {
    return (
        <>
            <input 
                type="color" 
                className="colors-picker"
                style={
                    color === colorsPickerValue ? {
                        color: color
                    } : {
                        color: colorsPickerValue,
                        opacity: 0.45
                    }
                }
                value={colorsPickerValue}
                onInput={(e) => {
                    setColor(e.target.value);
                    setColorsPickerValue(e.target.value);
                }}
            />
        </>
    );
};

export default ColorsPickerWrapper;