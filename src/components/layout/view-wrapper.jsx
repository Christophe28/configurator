import React, { useState } from "react";
import { useSpring, animated, config } from "react-spring";

const ViewWrapper = ({
  children,
  previous = "Précédent",
  next = "Suivant",
  previousAction,
  nextAction,
  currentAnim
}) => {

  return (
    <animated.div style={currentAnim}>
      {children}

      <section className="container-navigation">
        {previous !== false && (
          <input
            className={"previousInput"}
            type="button"
            value={previous}
            onClick={previousAction}
          />
        )}
        {next !== false && (
          <input
            className={"nextInput"}
            type="button"
            value={next}
            onClick={nextAction}
          />
        )}
      </section>
    </animated.div>
  );
};

export default ViewWrapper;
