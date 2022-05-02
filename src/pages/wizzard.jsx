//React import
import React from 'react';
import { useState } from 'react';

//Component import
import ChooseTown from '../components/wizzardComponents/pages/choose-town';
import ChooseDominantColor from '../components/wizzardComponents/pages/choose-dominant-colors';
import ChooseSignal from '../components/wizzardComponents/pages/choose-signal';
import SignalSystem from '../components/wizzardComponents/pages/signal-system';
import Input from '../components/wizzardComponents/buttons/input';

//Config import
import { signals } from '../config/config';

const Wizzard = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [town, setTown] = useState("");
    const [color, setColor] = useState("");

    const components = [
        <ChooseTown 
            setTown={setTown}
        />, 
        <ChooseDominantColor
            color={color}
            setColor={setColor}
        />,
        <ChooseSignal
            signals={signals}
        />,
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