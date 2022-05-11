import React from "react";

const Iframe = ({ reference, id }) => {
    
  return (
    <div className="test">
      <iframe
        ref={reference}
        key={id}
        id={"Model_" + id}
        src={"https://www.vectary.com/viewer/v1/?model=" + id}
        width="20%"
        height="200"
      ></iframe>
    </div>
  );
};

export default Iframe;
