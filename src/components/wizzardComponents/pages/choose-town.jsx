import React from 'react';
import InputText from '../buttons/input-text';

const ChooseTown = ({ town, setTown }) => {
    return (
        <div className="container-town-name">
            <h2>Quel est le nom de votre commune ?</h2>
            <InputText 
                placeholder={town}
                setTown={setTown}
                onChange={(e) => setTown(e.target.value)}
            />
        </div>
    );
};

export default ChooseTown;