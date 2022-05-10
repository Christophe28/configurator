import React from 'react';

const DynamicalPng = ({ reference, text }) => {
    
    return (
        <div ref={reference} className="container-png" >
            <h2>{text}</h2>
        </div>
    );
};

export default DynamicalPng;