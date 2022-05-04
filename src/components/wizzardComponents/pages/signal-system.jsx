import React from 'react';
import VectaryItems from '../vectary-items/vectary-items';

const SignalSystem = ({ models, currentColor, pictureSleeve }) => {

    return (
        <div className="container-signal-system">
            <h2>Votre système signalétique</h2>
            <VectaryItems 
                models={models}
                dominantColor={currentColor}
                pictureSleeve={pictureSleeve}
            />
        </div>
    );
};

export default SignalSystem;