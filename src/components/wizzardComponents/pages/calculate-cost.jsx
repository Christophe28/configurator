import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import Dropdown from '../buttons/dropdown';
import InputText from '../buttons/input-text';

const CalculateCost = ({ data }) => {
    const [currentOptions, setCurrentOptions] = useState([]);
    
    useEffect(() => {
        const optionTable = [];
        for(i = 0; i < 11; i ++){
            optionTable.push(i);
        }
        setCurrentOptions(optionTable);
    }, [])

    return (
        <div>
            <h2>Quelles quantités de chaque élément ?</h2>
            <InputText placeholder={"Votre adresse mail"}/>
            {
                data.map((dataElement) => (
                    <div key={dataElement} className="container-how-items">
                        <p>{dataElement}</p>
                        <Dropdown 
                            data={currentOptions}
                        />
                    </div>
                ))
            }
        </div>
    );
};

export default CalculateCost;