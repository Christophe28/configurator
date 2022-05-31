import React from 'react';
import VectaryItems from '../vectary-items/vectary-items';

const SignalSystem = ({ myPicto, setMyPicto, setIsLoaded, townName ,models, currentColor, pictureSleeve, currentAnim }) => {

    return (
        <div className="container-signal-system">
            <h2>Le nouveau système signalétique de {townName}</h2>
            <VectaryItems 
                picto={myPicto}
                setPicto={setMyPicto}
                setIsLoaded={setIsLoaded}
                models={models}
                dominantColor={currentColor}
                pictureSleeve={pictureSleeve}
            />
        </div>
    );
};

export default SignalSystem;