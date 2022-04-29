//React import
import React from 'react';
import { useState, useEffect } from 'react';

//Component import
import ChooseTown from '../components/wizzardComponents/pages/chosse-town';
import ChooseDominantColor from '../components/wizzardComponents/pages/choose-dominant-colors';
import ChooseSignal from '../components/wizzardComponents/pages/choose-signal';
import SignalSystem from '../components/wizzardComponents/pages/signal-system';
import Input from '../components/wizzardComponents/buttons/input';

//Logic import

const Wizzard = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [town, setTown] = useState("");
    
    const components = [
        <ChooseTown 
            setTown={setTown}
        />, 
        <ChooseDominantColor
            town={town}
        />,
        <ChooseSignal/>,
        <SignalSystem />
    ];

    //A déplacer éventuellement dans un fichier fonction
    const updateIndex = (value) => {
        if(currentIndex < value - 1) {
            setCurrentIndex(currentIndex + 1);
        }
        else if(currentIndex > value) {
            setCurrentIndex(currentIndex - 1);
        }
    };
    return (
        <div>
            <h1>Wizard</h1>
            {components[currentIndex]}

            <Input 
                label={"Précédent"}
                onClick={onClick=() => updateIndex(0)}
            />
            <Input 
                label={"Suivant"}
                onClick={onClick=() => updateIndex(components.length)}
            />
        </div>
    );
};

export default Wizzard;