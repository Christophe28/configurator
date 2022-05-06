import React from 'react';

import Dropdown from '../buttons/dropdown';
import InputText from '../buttons/input-text';

import setItems from '../../../functions/set-items';

const CalculateCost = ({ selectedSignageEquipment, options, setCurrentTotalItems, currentTotalItems }) => {
    console.log(selectedSignageEquipment)
    return (
        <div>
            <h2>Quelles quantités de chaque élément ?</h2>
            <InputText placeholder={"Votre adresse mail"}/>
            {
                selectedSignageEquipment.map((signageEquipment, index) => (
                    <div key={signageEquipment.value} className="container-how-items">
                        <p>{signageEquipment.label}</p>
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