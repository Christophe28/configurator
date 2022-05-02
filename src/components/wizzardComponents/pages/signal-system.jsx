import React from 'react';
import VectaryItems from '../vectary-items/vectary-items';

const SignalSystem = ({ models, currentColor }) => {

    return (
        <div className="container-signal-system">
            <h3>Votre systeme signalitique</h3>
            <VectaryItems 
                models={models}
                dominantColor={currentColor}
            />
        </div>
    );
};

export default SignalSystem;