//React import
import React from 'react';

//Component import
import Buttons from '../buttons/buttons';

const ChooseDominantColor = ({ themeColors, setColor }) => {

    return (
        <div className="container-dominant-color">
            <h2>Couleur dominante</h2>
            {
                themeColors.map((themeColor) => (                
                    <Buttons 
                        style={{background: themeColor.hexadecimalColor}}
                        items={themeColor}
                        name={themeColor.hexadecimalColor}
                        key={themeColor.hexadecimalColor}
                        onClick={(e) => setColor(e.target.name)}
                    />
                ))
            }

        </div>
    );
};

export default ChooseDominantColor;