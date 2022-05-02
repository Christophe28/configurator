import React from 'react';
import InputText from '../buttons/input-text';

const ChooseTown = ({setTown}) => {
    return (
        <div className="container-town-name">
            <InputText 
                setTown={setTown}
            />
        </div>
    );
};

export default ChooseTown;