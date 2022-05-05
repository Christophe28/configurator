import React from 'react';

const Dropdown = ({ data, onClick }) => {

    return (
        <>
            <select onChange={onClick}>
                {
                    data.map((element) => (
                        <option key={element}>{element}</option>
                    ))
                }

            </select>
        </>
    );
};

export default Dropdown;