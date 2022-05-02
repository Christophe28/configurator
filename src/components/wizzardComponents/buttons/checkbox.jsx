//React import
import React from 'react';

const Checkbox = ({ data, data2, checked, setCurrentChecked, setDefaultChecked }) => {
    
    return (
        <div>
            {/* {
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
            } */}
            <br /><br /><br /><br /><br />
            <h4>Fais avec objet</h4>
            {
                data2.map((dataElement2, index) => (
                    <div key={dataElement2.id}>
                        <input 
                            type="checkbox" 
                            id={dataElement2.id} 
                            name={dataElement2.value} 
                            value={dataElement2.value}
                            onChange={(e) => setDefaultChecked(setCurrentChecked, dataElement2.index, e.target.checked)}
                        />
                        <label htmlFor={dataElement2.id}>{dataElement2.label}</label>
                    </div>
                ))
            }
        </div>
    );
};

export default Checkbox;