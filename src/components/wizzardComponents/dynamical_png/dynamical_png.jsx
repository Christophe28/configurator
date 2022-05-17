import React from 'react';

const DynamicalPng = ({ reference, text }) => {

    return (
        <div ref={reference} className="container-png" >
            <h3>{text}</h3>
        </div>
    );
};

export default DynamicalPng;