import React, {useState} from 'react';
import { useSpring, animated } from 'react-spring';

const LeftToRight = () => {

    const animMoveSquare = useSpring({
        loop: true,
        from: { rotateZ: 0},
        to: { rotateZ: 180}
    })

    return (
        <animated.div 
            className="container-square"
            style={animMoveSquare}
        >

        </animated.div>
    );
};

export default LeftToRight;