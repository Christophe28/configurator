//React import
import React from 'react';
import { useState, useEffect } from 'react';

//Component import
import Checkbox from '../buttons/checkbox';

const ChooseSignals = ({ signals, setDefaultChecked, }) => {

    const [checkboxesState, setCheckboxesState] = useState(
        signals.map((signal) => false)
    );

    const [currentChoice, setCurrentChoice] = useState([]);

    useEffect(() => {
        const optionChecked = [];
        checkboxesState.map((option, index) => {
            if(option === true) {
                optionChecked.push(signals[index].label)
            }
        })
        setCurrentChoice(optionChecked);
    }, [checkboxesState]);    
    
    return (
        <div className="container-signal-fonction">
            <h2>Choix des fonctions signalitiques</h2>
            <Checkbox 
                data={signals}
                checked={checkboxesState}
                setCurrentChecked={setCheckboxesState}
                setDefaultChecked={setDefaultChecked}
            />
        </div>
    );
};

export default ChooseSignals;