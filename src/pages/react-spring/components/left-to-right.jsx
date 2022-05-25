import React, {useRef, useState} from 'react';
import { useSpring, animated } from 'react-spring';

const LeftToRight = () => {
    const [trigger, setTrigger] = useState();

    const animMoveSquare = useSpring({
        config: { duration: 2000},
        from: { opacity: 1, x: 180},
        to: { opacity: 0, x: -100}

    })

    const animComeBack = useSpring({
        config: { duration: 2000},
        from: {opacity: 0, x: -100},
        to: { opacity: 1, x: 0}
    })

    return (
        <>
            <animated.div 
                className="container-square"
                style={trigger}
                >
            </animated.div>
            <input 
                type="button" 
                value="Next"
                onClick={() => {
                    setTrigger(animMoveSquare);
                }}
            />
            <input type="button" value="comeBack" onClick={() => {
                setTrigger(animComeBack);
            }} />
        </>
    );
};

export default LeftToRight;