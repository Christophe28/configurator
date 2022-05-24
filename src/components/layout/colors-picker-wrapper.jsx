import React from 'react';
import {useState} from 'react';

const ColorsPickerWrapper = ({ setColor, color }) => {
    const [picker, setPicker] = useState(false);
    const [colorsPickerValue, setColorsPickerValue] = useState();

    const displayColorPicker = () => {
        if(picker === false) {
            return(
                <input 
                    type="button"   
                    className="button-to-colors-picker"
                    defaultValue="+" 
                    onClick={(e) => setPicker(true)}
                />
            )
        }
        if(picker === true) {
            return(
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
                    defaultValue="#e66465"
                    onChange={(e) => {
                        setColor(e.target.value);
                        setColorsPickerValue(e.target.value);
                    }}
                />
            )
        }
    }
    return (
        <>
            {
                displayColorPicker()
            }
        </>
    );
};

export default ColorsPickerWrapper;