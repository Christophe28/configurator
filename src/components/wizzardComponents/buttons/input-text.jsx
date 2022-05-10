import React from 'react';

const InputText = ({ type, value, placeholder, onChange }) => {
    return (
        <div className="container-input-text">
            <input type={type} value={value} placeholder={placeholder} onChange={onChange}/>
        </div>
    );
};

export default InputText;