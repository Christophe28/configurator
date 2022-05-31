import React, { useState } from 'react';
import { useSpring, animated, config } from 'react-spring';

import TitleTest from './components/titletest';
import DrawSvg from './components/draw-svg';
import LeftToRight from './components/left-to-right';
import ArrayAnimation from './components/array-animation';

const ReactSpring = () => {
    
    const [draw, setDraw] = useState(false);
    const [index, setIndex] = useState(0);
    const [styleToConfess, setStyleToConfess] = useState();
    const [welcom, setWelcom] = useState(useSpring({
        reset: true,
        config: {duration: 3000},
        from: { opacity: 0, y: 600},
        to: { opacity: 1, y: 0}
    }));

    const comeBack = useSpring({
        reset: true,
        config: { duration: 1000 },
        from: { opacity: 0, x: -600 },
        to: { opacity: 1, x: 0 }
    })

    const leavePage = useSpring({
        reset: true,
        config: { duration: 1500 },
        from: { opacity: 1, x: 0 },
        to: { opacity: 0, x: -600 }
    })
    
    const componentArray = [
        <TitleTest 
            move={styleToConfess}
            index={index}
            // currentAnim={conditionForGoodAnim(componentArray)}
        />,
        <DrawSvg 
            index={index}
            // currentAnim={conditionForGoodAnim(componentArray)}
            currentAnim={welcom}
        />,
        <LeftToRight 
            index={index}
            // currentAnim={conditionForGoodAnim(componentArray)}
        />
    ];


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

   const displayNewPage = () => {
        setIndex(index + 1);
   };
   const waitEndOfAnnim = () => {
       setTimeout(displayNewPage, 1000);
   }

   const displayLastPage = () => {
       setIndex(index - 1);
   };
   const waitEndOfAnnimBack = () => {
       setTimeout(displayLastPage, 1000);
   }

    return (
        <div>
            {componentArray[index]}
            {/* <TitleTest 
                styles={{display: "none"}}
            />
            <DrawSvg 
                styles={{display: "none"}}
            />
            <LeftToRight 
                styles={{display: "none"}}
            /> */}
            <input 
                type="button" 
                value="Précédent"
                style={{width: "12rem", height: "2rem"}}
                onClick={() => {
                    waitEndOfAnnimBack();
                    setStyleToConfess(comeBack);
                }}
            />
            <input 
                type="button" 
                value="Suivant" 
                style={{width: "12rem", height: "2rem"}}
                onClick={() => {
                    setStyleToConfess(leavePage);
                    waitEndOfAnnim();
                }}
            />
        </div>
    );
};

export default ReactSpring;