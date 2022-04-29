import React from 'react';
const ChooseDominantColor = ({ town }) => {
    
    return (
        <div className="container-dominant-color">
            <h2>Couleur dominante</h2>
            {
                town
            }
        </div>
    );
};

export default ChooseDominantColor;