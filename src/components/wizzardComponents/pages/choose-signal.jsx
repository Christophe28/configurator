import React from 'react';
import { useState } from 'react';
import Checkbox from '../buttons/checkbox';

const ChooseSignal = ({ signals }) => {
    const [checkboxesState, setCheckboxesState] = useState(
        signals.map((signal) => false)
    );
    console.log("checkboxesState", checkboxesState);
    return (
        <div className="container-signal-fonction">
            <h2>Choix des fonctions signalitiques</h2>
            <Checkbox 
                data={signals}
                checked={checkboxesState}
                setCurrentChecked={setCheckboxesState}
            />
        </div>
    );
};

export default ChooseSignal;