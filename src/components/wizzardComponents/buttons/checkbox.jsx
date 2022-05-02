//React import
import React from 'react';

const Checkbox = ({ data, checked, setCurrentChecked, setDefaultChecked }) => {
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