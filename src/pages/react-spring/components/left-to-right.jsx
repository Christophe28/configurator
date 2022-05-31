import React, {useRef, useState} from 'react';
import { useSpring, animated, Controller } from 'react-spring';

const LeftToRight = ({ currentAnim, index }) => {
    const [trigger, setTrigger] = useState();
    const [show, setShow] = useState(true);

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
    
    animByControler = new Controller({
        config: { duration: 2000 },
        from: { opacity: 1, x: 180 },
        to: { opacity: 0, x: -100 },
    })

    return (
        <>
            <animated.div 
                className="container-square"
                style={trigger}
                >
                    <h1>Salut</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum debitis, itaque veritatis odio laborum similique magnam ab quis sed cumque dolores, neque consequuntur suscipit corrupti. Id perferendis excepturi doloremque dolorem repellendus obcaecati, at exercitationem aspernatur distinctio libero veritatis cumque, adipisci incidunt deserunt pariatur consequatur ipsam sequi illum asperiores architecto ratione!</p>
            </animated.div>
            <input 
                type="button" 
                value="Next"
                onClick={() => {
                    setTrigger(animMoveSquare)
                }}
            />
            <input type="button" value="comeBack" onClick={() => {
                setTrigger(animComeBack);
            }} />
        </>
    );
};

export default LeftToRight;