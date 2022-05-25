import React, { useState } from 'react';
import { useSpring, animated } from 'react-spring';
const ArrayAnimation = () => {
    const [numberList, setNumberList] = useState(0);

    const myList = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

    const anim = {

    }

    return (
        <div>
            <h1>{myList[numberList]}</h1>
            <input 
                type="button" 
                onClick={() => {
                    
                }}
            />
        </div>
    );
};

export default ArrayAnimation;