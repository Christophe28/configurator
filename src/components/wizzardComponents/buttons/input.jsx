import React from 'react';

const Input = ({ inputClass, label, name, onClick }) => {
    return (
        <div className="container-input">
            <input 
                className={inputClass}
                type="button" 
                value={label} 
                name={name} 
                onClick={onClick} 
            />
        </div>
    );
};

export default Input;