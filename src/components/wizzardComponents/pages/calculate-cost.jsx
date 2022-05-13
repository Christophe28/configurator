import React from 'react';

import Dropdown from '../buttons/dropdown';
import InputText from '../buttons/input-text';
import Input from '../buttons/input';

import { productQuantity } from '../../../config/config';
import TotalCost from './total-cost';

const CalculateCost = ({ email, setEmail, selectedSignageEquipment, selectedSignageEquipmentQuantity, onChangeAction }) => {
    
    // fetch("https://formsubmit.co/ajax/" + {email}, {
    //     method: "POST",
    //     headers : {
    //         'Content-Type' : 'application/json',
    //         'Accept': 'application/json'
    //     },
    //     body: JSON.stringify({
    //         name: 
    //     })
    // })
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
            
            <form name="" method="POST">
                <InputText 
                    type="email"
                    placeholder={"Votre adresse mail"}
                    value={email}
                    name={"email"}
                    onChange={(e) => setEmail(e.target.value)}
                />
                {/* form style */}
                <input 
                    type="hidden" 
                    name="_template" 
                    value="table" 
                    required
                />
                <input 
                    type="hidden" 
                    name="message" 
                    value={"Impossible de passer le composant total cost par là. Ni objet"} 
                    required/>
                <input 
                    type="submit" 
                    value="Calculer le prix" 
                />
            </form>
        </div>
    );
};

export default CalculateCost;