import React from 'react';

const Dropdown = ({ items, onChange, defaultValue }) => {

    return (
        <>
            <select 
                onChange={onChange}
                defaultValue={defaultValue}
            >
                {
                    items.map((item) => {
                        return (
                        <option key={item} value={item}>{item}</option>
                    )})
                } 
            </select>
        </>
    );
};

export default Dropdown;