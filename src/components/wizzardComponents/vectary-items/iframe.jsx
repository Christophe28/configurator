import React from "react";

const Iframe = ({ id, nameModel }) => {
  return (
    <div>
      <iframe
        id={"Model_" + id}
        src={"https://www.vectary.com/viewer/v1/?model=" + id}
        frameBorder="0"
        width="20%"
        height="200"
      >
      </iframe>
        <p>{nameModel}</p>  
    </div>
  );
};

export default Iframe;
