import React from 'react';

const InputText = ({ setTown }) => {
    return (
        <div className="container-input-text">
            <p>Quel est le nom de votre commune ?</p>
            <input type="text" onChange={(e) => setTown(e.target.value)}/>
        </div>
    );
};

export default InputText;