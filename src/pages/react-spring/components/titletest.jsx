import React, {useState} from 'react';
import { useSpring, animated, config } from 'react-spring';

const TitleTest = ({myAnimation}) => {
    const [flip, setFlip] = useState(false);
    const [active, setActive] = useState(false);

    const displayTitle = () => {
        const displayTitleAnim = useSpring({
            loop: {reverse: true},
            from: { opacity: 0},
            to: { opacity: 1},
            config: {duration: 3000},
            onReset: () => setFlip(!flip),
        })

    
        // return <animated.h1 style={displayTitleAnim}>Display Title</animated.h1>
        return (
            <animated.h1 
                style={
                    active === true ? displayTitleAnim : {background: "red"}
                }
            >
                Diplsay Title
            </animated.h1>
        )
    }

    return (
        <div className="container-test" style={myAnimation}>
            {displayTitle()}
            <input type="button" onClick={() => setActive(true)}/>
        </div>
    );
};

export default TitleTest;