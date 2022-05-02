//React import
import React from 'react';
import { useState, useEffect } from 'react';

//Component import
import Checkbox from '../buttons/checkbox';

const ChooseSignals = ({ signals, signals2, setDefaultChecked, }) => {

    const [checkboxesState, setCheckboxesState] = useState(
        signals.map((signal) => false)
    );

    const [currentChoice, setCurrentChoice] = useState([]);
        console.log("signals2", signals2)

    useEffect(() => {
        const optionChecked = [];
        checkboxesState.map((option, index) => {
            if(option === true) {
                optionChecked.push(signals2[index].label)
            }
        })
        setCurrentChoice(optionChecked);
        console.log("option selected objet", optionChecked);
    }, [checkboxesState]);    
    return (
        <div className="container-signal-fonction">
            <h2>Choix des fonctions signalitiques</h2>
            <Checkbox 
                data={signals}
                data2={signals2}
                checked={checkboxesState}
                setCurrentChecked={setCheckboxesState}
                setDefaultChecked={setDefaultChecked}
            />
        </div>
    );
};

export default ChooseSignals;