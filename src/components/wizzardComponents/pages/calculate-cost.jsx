import React from 'react';
import { useState, useEffect } from 'react';


import Dropdown from '../buttons/dropdown';
import InputText from '../buttons/input-text';

const CalculateCost = ({ data, onClick }) => {
    const [currentOptions, setCurrentOptions] = useState([]);

    const [currentTotalItems, setCurrentTotalItems] = useState(data.map((element) => (
        {
            quantity: 0,
            items: element
        }
    )))

    console.log(currentTotalItems);
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
            {console.log(data)}
            {
                data.map((dataElement, index) => (
                    <div key={dataElement} className="container-how-items">
                        <p>{dataElement}</p>
                        <Dropdown 
                            data={currentOptions}
                            onClick={(e) => {
                                console.log(e.target.value)
                               setCurrentTotalItems(
                                   oldState => {
                                       const newState = [...oldState]
                                       newState[index].quantity = e.target.value
                                    return newState
                                   })
                            }}
                        />
                    </div>
                ))
            }
        </div>
    );
};

export default CalculateCost;