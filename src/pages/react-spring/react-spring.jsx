import React, { useState } from 'react';
import { useSpring, animated, config } from 'react-spring';

import TitleTest from './components/titletest';
import DrawSvg from './components/draw-svg';
import LeftToRight from './components/left-to-right';
import ArrayAnimation from './components/array-animation';

const ReactSpring = () => {
    const [draw, setDraw] = useState(false);

    //Pour faire l'annimation sur les composants
    const AnimatedDonut = animated("Donut");
    
    const drawing = () => {
        const { x } = useSpring({
            reset: true,
            reverse: flip,
            from: { x: 0},
            x: 1,
            delay: 200,
            config: config.molasses,
            onReset: () => setDraw(!draw),
        })

        return (
            <animated.svg
                style={{ margin: 20, width: 80, height: 80 }}
                viewBox= "0 0 45 44"
                strokerWidth="2"
                fill="white"
                stroke="rgb(45, 55, 71)"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeDasharray={156}
                strokeDashoffset={x.to(x => (1 - x) * 156)}
            >
                <polygon points={POINTS} />
            </animated.svg>
        )
    }

    return (
        <div>
            <TitleTest />
            <DrawSvg />
            <LeftToRight />
            <ArrayAnimation />
        </div>
    );
};

export default ReactSpring;