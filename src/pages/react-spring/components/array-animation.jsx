import React, { useEffect, useState } from 'react';
import { useSpring, animated } from 'react-spring';
import DrawSvg from './draw-svg';
import LeftToRight from './left-to-right';
import TitleTest from './titletest';

const ArrayAnimation = () => {
    const [numberList, setNumberList] = useState(0);
    const [myAnim, setMyAnim] = useState();

    const myList=[
        <TitleTest />,
        <DrawSvg />,
        <LeftToRight />
    ]

    useEffect(() => {
        console.log("coucou");
    }, myAnim);
    const scrollLeft = useSpring({
        config: {duration: 2000},
        from: {x: 150},
        to: {x: 0}
    })

    return (
        <div>
            <animated.h1
                style={myAnim}
            >
                {myList[numberList]}
            </animated.h1>
            <input 
                type="button" 
                onClick={() => {
                    setNumberList(numberList + 1);
                    setMyAnim(scrollLeft);
                }}
            />
        </div>
    );
};

export default ArrayAnimation;