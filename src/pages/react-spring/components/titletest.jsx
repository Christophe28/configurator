import React, {useState} from 'react';
import { useSpring, animated, Controller, config } from 'react-spring';

const TitleTest = ({ move, index, currentAnim }) => {
    const [flip, setFlip] = useState(false);
    const [moveActive, setMoveActive] = useState();

    // const displayTitle = () => {
    //     const displayTitleAnim = useSpring({
    //         loop: {reverse: true},
    //         from: { opacity: 0},
    //         to: { opacity: 1},
    //         config: {duration: 3000},
    //         onReset: () => setFlip(!flip),
    //     })

    //     return (
    //         <animated.h1 
    //             style={
    //                 moveActive === true ? displayTitleAnim : {background: "red"}
    //             }
    //         >
    //             Diplsay Title
    //         </animated.h1>
    //     )
    // }



    return (
        <animated.div 
            className="container-test"
            style={move}
        >
            <p>Salut je suis censé me décaller de la droite vers la gauche pour disparaitre de la page</p>
            <input type="button" onClick={() => {
                setMoveActive(move);
                console.log(move);  
            }} />
        </animated.div>
    );
};

export default TitleTest;