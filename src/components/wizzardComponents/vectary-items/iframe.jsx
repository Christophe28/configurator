import React from "react";
import { useState } from "react";
import exportAsImage from "../../../functions/export-as-image";

const Iframe = ({  id }) => {
  // console.log(reference.current);
  return (
    <>
      <iframe
        // ref={reference}
        key={id}
        id={"Model_" + id}
        src={"https://www.vectary.com/viewer/v1/?model=" + id}
        frameBorder="0"
        width="20%"
        height="200"
      ></iframe>
    </>
  );
};

export default Iframe;
