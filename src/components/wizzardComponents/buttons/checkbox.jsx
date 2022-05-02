//React import
import React from 'react';

//Logic import
import setDefaultChecked from '../../../functions/set-defaultChecked';

const Checkbox = ({ data, checked, setCurrentChecked }) => {
    return (
        <div>
            {
                data.map((dataElement, index) => (
                    <div key={dataElement}>
                        <input 
                            type="checkbox" 
                            id={dataElement} 
                            name={dataElement} 
                            defaultChecked={checked[index]}
                            onChange={(e) => setDefaultChecked(setCurrentChecked, index, e.target.checked)}
                        />
                        <label htmlFor={dataElement}>{dataElement}</label>
                    </div>
                ))
            }
        </div>
    );
};

export default Checkbox;