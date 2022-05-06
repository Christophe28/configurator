import React from 'react';

import Dropdown from '../buttons/dropdown';
import InputText from '../buttons/input-text';

import { productQuantity } from '../../../config/config';

const CalculateCost = ({ selectedSignageEquipment, selectedSignageEquipmentQuantity, onChangeAction }) => {

    return (
        <div>
            <h2>Quelles quantités de chaque élément ?</h2>
            <InputText placeholder={"Votre adresse mail"}/>
            {
                selectedSignageEquipment.map((signageEquipment, index) => (
                    <div key={signageEquipment.value} className="container-how-items">
                        <p>{signageEquipment.label}</p>
                        <Dropdown 
                            items={productQuantity}
                            defaultValue={selectedSignageEquipmentQuantity[signageEquipment.value]}
                            onChange={(e) => onChangeAction(signageEquipment.value, e.target.value)}
                        />
                    </div>
                ))
            }
        </div>
    );
};

export default CalculateCost;