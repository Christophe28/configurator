import React from 'react';

const Dropdown = ({ items, onChange, defaultValue }) => {

    return (
        <>
            <select 
                onChange={onChange}
                defaultValue={defaultValue}
            >
                {
                    items.map((item) => (
                        <option key={item}>{item}</option>
                    ))
                } 
            </select>
        </>
    );
};

export default Dropdown;