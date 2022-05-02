import React from 'react';

const Checkbox = ({ data, checked }) => {
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
                            onChange={(e) => console.log(e.target.checked)}
                        />
                        <label htmlFor={dataElement}>{dataElement}</label>
                    </div>
                ))
            }
        </div>
    );
};

export default Checkbox;