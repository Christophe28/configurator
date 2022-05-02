//React import
import React from 'react';

//Component import
import Buttons from '../buttons/buttons';

//Logic, config import
import { themeColors } from '../../../config/config';

const ChooseDominantColor = ({color, setColor}) => {

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