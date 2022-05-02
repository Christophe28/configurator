//React import
import React from 'react';

//Component import
import Buttons from '../buttons/buttons';

const ChooseDominantColor = ({ themeColors, setColor }) => {

    return (
        <div className="container-dominant-color">
            <h2>Couleur dominante</h2>
            <Buttons 
                themeColors={themeColors}
                onClick={onClick = (e) => setColor(e.target.name)}
            />
        </div>
    );
};

export default ChooseDominantColor;