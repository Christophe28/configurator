import React from "react";

const ColorsSchemePickers = ({ value, label, onClick }) => {

    return (
    <div className="container-scheme-pickers">
        <button
            value={value}
            onClick={onClick}
        >
            {label}
        </button>
    </div>
  );
};

export default ColorsSchemePickers;
