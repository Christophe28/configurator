import React from "react";
import Logo from "./favicon.png";

const Iframe = ({ id, nameModel }) => {

  return (
    <div>
      <iframe
        id={"Model_" + id}
        src={"https://www.vectary.com/viewer/v1/?model=" + id + "&arIcon=" + Logo + "&arY=280&arX=10"}
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
