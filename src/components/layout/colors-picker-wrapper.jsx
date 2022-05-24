import React from 'react';
import {useState} from 'react';

const ColorsPickerWrapper = ({ setColor, color, colorsPickerValue, setColorsPickerValue }) => {
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
                onChange={(e) => {
                    setColor(e.target.value);
                    setColorsPickerValue(e.target.value);
                }}
            />
        </>
    );
};

export default ColorsPickerWrapper;