import React from 'react';

const InputText = ({ placeholder, onChange }) => {
    return (
        <div className="container-input-text">
            <input type="text" placeholder={placeholder} onChange={onChange}/>
        </div>
    );
};

export default InputText;