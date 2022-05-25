import React, {useState} from 'react';
import { useSpring, animated, config } from 'react-spring';
const TitleTest = ({myAnimation}) => {

    const displayTitle = () => {
        const [flip, setFlip] = useState(false);

        const displayTitleAnim = useSpring({
            to: { opacity: 1},
            from: { opacity: 0},
            reset: true,
            reverse: flip,
            delay: 1000,
            config: config.molasses,
            onReset: () => setFlip(!flip),
        })
        return <animated.h1 style={displayTitleAnim}>Display Title</animated.h1>
    }

    return (
        <div className="container-test" style={myAnimation}>
            {displayTitle()}
        </div>
    );
};

export default TitleTest;