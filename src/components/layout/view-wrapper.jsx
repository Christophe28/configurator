import React from "react";

const ViewWrapper = ({
  children,
  previous = "Précédent",
  next = "Suivant",
  previousAction,
  nextAction,
}) => {
  return (
    <div>
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
    </div>
  );
};

export default ViewWrapper;
