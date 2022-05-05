import React from 'react';

import Dropdown from '../buttons/dropdown';
import InputText from '../buttons/input-text';

import setItems from '../../../functions/set-items';

const CalculateCost = ({ choiceOfUsersSignals, options, setCurrentTotalItems, currentTotalItems }) => {
    
    return (
        <div>
            <h2>Quelles quantités de chaque élément ?</h2>
            <InputText placeholder={"Votre adresse mail"}/>
            {
                choiceOfUsersSignals.map((choiceOfUserSignal, index) => (
                    <div key={choiceOfUserSignal} className="container-how-items">
                        <p>{choiceOfUserSignal}</p>
                        <Dropdown 
                            items={options}
                            defaultValue={currentTotalItems[index].quantity}
                            onChange={(e) => {
                            setItems(setCurrentTotalItems, index, e.target.value);
                            }}
                        />
                    </div>
                ))
            }
        </div>
    );
};

export default CalculateCost;