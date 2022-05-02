import React from 'react';

const Input = ({ label, onClick }) => {
    return (
        <div className="container-input">
            <input type="button" value={label} onClick={onClick} />
        </div>
    );
};

export default Input;