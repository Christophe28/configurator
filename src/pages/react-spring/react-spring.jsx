import React from 'react';
import { Spring, useSpring } from 'react-spring';
import TitleTest from './components/titletest';

const ReactSpring = () => {
   
    const styleAnimation = useSpring({
        loop: true,
        from: { rotateZ: 0},
        to: { rotateZ: 100 }
    })

    return (
        <div>

            <CSSTransition>
            <TitleTest 
                // myAnimation={...styleAnimation}
            />
            </CSSTransition>
        </div>
    );
};

export default ReactSpring;