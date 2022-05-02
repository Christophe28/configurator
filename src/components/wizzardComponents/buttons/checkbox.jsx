import React from 'react';

const Checkbox = ({data}) => {
    return (
        <div>
            {
                data.map((dataElement) => (
                    <div key={dataElement}>
                        <input type="checkbox" id={dataElement} name={dataElement}/>
                        <label htmlFor={dataElement}>{dataElement}</label>
                    </div>
                ))
            }
        </div>
    );
};

export default Checkbox;