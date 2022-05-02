//React import
import React from 'react';

const Checkbox = ({ data, checked, setCurrentChecked, setDefaultChecked }) => {
    console.log("checked", checked);
    return (
        <div>
            {
                data.map((dataElement, index) => (
                    <div key={dataElement.id}>
                        <input 
                            type="checkbox" 
                            id={dataElement.id} 
                            name={dataElement.value} 
                            value={dataElement.value}
                            defaultChecked={checked[index]}
                            onChange={(e) => setDefaultChecked(setCurrentChecked, dataElement.index, e.target.checked)}            
                        />
                        <label htmlFor={dataElement.id}>{dataElement.label}</label>
                    </div>
                ))
            }
        </div>
    );
};

export default Checkbox;