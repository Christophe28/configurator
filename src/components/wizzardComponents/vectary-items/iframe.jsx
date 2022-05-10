import React from "react";

const Iframe = ({ id }) => {
  
  return (
    <>
      <iframe
        key={id}
        id={"Model_" + id}
        src={"https://www.vectary.com/viewer/v1/?model=" + id}
        width="20%"
        height="200"
      ></iframe>
    </>
  );
};

export default Iframe;
