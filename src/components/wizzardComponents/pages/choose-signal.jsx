import React from 'react';
import Checkbox from '../buttons/checkbox';

const ChooseSignal = ({ signals }) => {
    
    return (
        <div className="container-signal-fonction">
            <h2>Choix des fonctions signalitiques</h2>
            <Checkbox 
                data={signals}
            />
        </div>
    );
};

export default ChooseSignal;