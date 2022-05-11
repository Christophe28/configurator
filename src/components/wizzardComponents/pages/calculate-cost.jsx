import React from 'react';

import Dropdown from '../buttons/dropdown';
import InputText from '../buttons/input-text';
import Input from '../buttons/input';

import { productQuantity } from '../../../config/config';

const CalculateCost = ({ email, setEmail, selectedSignageEquipment, selectedSignageEquipmentQuantity, onChangeAction }) => {
    console.log(email);
    return (
        <div>
            <h2>Quelles quantités de chaque élément ?</h2>
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
            
            <form action={"https://formsubmit.co/" + email} method="POST">
                <InputText 
                    type="email"
                    placeholder={"Votre adresse mail"}
                    value={email}
                    name={"email"}
                    onChange={(e) => setEmail(e.target.value)}
                />
                <input 
                    type="submit" 
                    value="Calculer le prix" 
                />
            </form>

        </div>
    );
};

export default CalculateCost;