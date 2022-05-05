import React from 'react';

const InputText = ({ value, onChange }) => {
    return (
        <div className="container-input-text">
            <input type="text" value={value} onChange={onChange}/>
        </div>
    );
};

export default InputText;