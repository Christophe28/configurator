import React, {useState} from 'react';
import { useSpring, animated, config } from 'react-spring';

const DrawSvg = () => {
    const [flip, set] = useState(false);

    const { x } = useSpring({
        reset: true,
        reverse: flip,
        from: { x: 0 },
        x: 1,
        delay: 0,
        config: config.molasses,
        onRest: () => set(!flip),
      })
    return (
        <div className="container-svg">
            <animated.svg
                style={{ margin: 20, width: 400, height: 400 }}
                viewBox="0 0 45 44"
                strokeWidth="2"
                fill="rgb(180, 58, 58)"
                stroke="rgb(45, 55, 71)"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeDasharray={156}
                strokeDashoffset={x.to(x => (1 - x) * 156)}
            >
                <polygon className="left-side" points={"0,0 0,40 0,40, 40,40"} />
            </animated.svg>
            <animated.svg
                style={{ margin: 20, width: 400, height: 400}}
                viewBox="0 0 45 44"
                strokeWidth="2"
                fill="rgb(45, 55, 58)"
                stroke="rgb(170, 58, 58)"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeDasharray={156}
                strokeDashoffset={x.to(x => (1 - x) * 156)}
            >
                <polygon className="right-side" points={"0,0 40,0 40,40"} />
            </animated.svg>
        </div>
    );
};

export default DrawSvg;