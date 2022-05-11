import React from 'react';

const Input = ({ label, name, onClick }) => {
    return (
        <div className="container-input">
            <input 
                type="button" 
                value={label} 
                name={name} 
                onClick={onClick} 
            />
        </div>
    );
};

export default Input;