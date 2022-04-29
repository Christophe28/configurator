import React from "react";

const Colors = ({ data, setValue }) => {
  return (
    <div className="container-input">
      <h2>Gamme de couleur par defaut</h2>
      <section>
        {data.map((dataElement) => (
          <button
            key={dataElement.id}
            name={dataElement.name}
            value={dataElement.value}
            onClick={(e) => setValue(e.target.name, e.target.value)}
          >
            {dataElement.label}
          </button>
        ))}
      </section>
    </div>
  );
};

export default Colors;
