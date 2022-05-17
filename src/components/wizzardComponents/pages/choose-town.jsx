import React from 'react';
import InputText from '../buttons/input-text';

const ChooseTown = ({ townName, setTownName }) => {

    return (
        <div className="container-town-name">
            <h2>Quel est le nom de votre commune ?</h2>
            
            <InputText 
                type="text"
                value={townName}
                onChange={(e) => setTownName(e.target.value)}
            />
        </div>
    );
};

export default ChooseTown;