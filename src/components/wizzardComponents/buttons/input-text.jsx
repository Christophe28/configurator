import React from 'react';

const InputText = ({ type, value, name, placeholder, onChange }) => {
    return (
        <div className="container-input-text">
            <input type={type} value={value} name={name} placeholder={placeholder} onChange={onChange}/>
        </div>
    );
};

export default InputText;