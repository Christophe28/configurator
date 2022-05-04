import React from 'react';
import Input from '../buttons/input';
import InputText from '../buttons/input-text';

const CalculateCost = () => {

    return (
        <div>
            <h2>Quelles quantités de chaque élément ?</h2>
            <InputText/>
            {/* <Input
                label={"Calculer le coût"}
                onClick={() => {
                    console.log("coucou");
                }}
            /> */}
        </div>
    );
};

export default CalculateCost;