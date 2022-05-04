import React from 'react';

const Dropdown = ({ data }) => {
 
    return (
        <>
            <select>
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