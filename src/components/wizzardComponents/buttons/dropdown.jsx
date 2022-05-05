import React from 'react';

const Dropdown = ({ items, onChange }) => {

    return (
        <>
            <select onChange={onChange}>
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