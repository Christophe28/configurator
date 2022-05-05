//React import
import React from 'react';

//Component import
import Checkbox from '../buttons/checkbox';

const ChooseSignals = ({ checkboxesState, setCheckboxesState, signals, setDefaultChecked }) => {  

    return (
        <div className="container-signal-fonction">
            <h2>Quelles fonctions de signalétique souhaitez-vous implanter ?</h2>
            <Checkbox 
                items={signals}
                checked={checkboxesState}
                setCurrentChecked={setCheckboxesState}
                setDefaultChecked={setDefaultChecked}
            />
        </div>
    );
};

export default ChooseSignals;