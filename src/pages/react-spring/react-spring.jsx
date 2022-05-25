import React, { useState } from 'react';
import { Spring, useSpring, animated, config } from 'react-spring';

import TitleTest from './components/titletest';

const ReactSpring = () => {
    const [flip, setFlip] = useState(false);

    //Pour faire l'annimation sur les composants
    const AnimatedDonut = animated("Donut");
    
    const app = () => {
        const props = useSpring({ to: {opacity: 1}, from: { opacity: 0} });
        return <animated.div style={props}>Je vais m'effacer</animated.div>
    }

    const text = () => {
        
        const myAnim = useSpring({
            to: { opacity: 1},
            from: { opacity: 0},
            reset: true,
            reverse: flip,
            delay: 200,
            config: config.molasses,
            onReset: () => setFlip(!flip),
        })
        return <animated.h1 style={myAnim}>hello</animated.h1>
    }
    return (
        <div>
            <TitleTest />
            {app()}
            {text()}
        </div>
    );
};

export default ReactSpring;