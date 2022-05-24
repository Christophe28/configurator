import React from "react";
import Logo from "./favicon.png";

const Iframe = ({ id, nameModel }) => {
  console.log(Logo);
  return (
    <div>
      <iframe
        id={"Model_" + id}
        src={"https://www.vectary.com/viewer/v1/?model=" + id + "&arIcon=" + Logo}
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
