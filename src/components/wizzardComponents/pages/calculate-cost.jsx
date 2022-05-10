import React from 'react';

import Dropdown from '../buttons/dropdown';
import InputText from '../buttons/input-text';

import { productQuantity } from '../../../config/config';

const CalculateCost = ({ email, setEmail, selectedSignageEquipment, selectedSignageEquipmentQuantity, onChangeAction }) => {
    
    return (
        <div>
            <h2>Quelles quantités de chaque élément ?</h2>
            <InputText 
                type="text"
                placeholder={"Votre adresse mail"}
                value={email}
                onChange={(e) => setEmail(e.target.value)}
            />
            {
                selectedSignageEquipment.map((oneSelectedSignageEquipement, index) => (
                    <div key={oneSelectedSignageEquipement.value} className="container-how-items">
                        <p>{oneSelectedSignageEquipement.label}</p>
                        <Dropdown 
                            items={productQuantity}
                            defaultValue={selectedSignageEquipmentQuantity[oneSelectedSignageEquipement.value]}
                            onChange={(e) => {
                                onChangeAction(oneSelectedSignageEquipement.value, e.target.value)      
                            }}
                        />
                    </div>
                ))
            }
        </div>
    );
};

export default CalculateCost;