import React from "react";

const Iframe = ({ model }) => {
  return (
    <>
      <iframe
        key={model.id}
        id={"Model_" + model.id}
        src={"https://www.vectary.com/viewer/v1/?model=" + model.id}
        width="20%"
        height="200"
      ></iframe>
    </>
  );
};

export default Iframe;
