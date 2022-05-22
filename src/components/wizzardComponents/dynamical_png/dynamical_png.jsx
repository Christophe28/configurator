import React from 'react';

const DynamicalPng = ({ reference, text, color }) => {
    const style = {
        background: color
    }
    return (
        <div ref={reference} className="container-png" style={style} >
            <h3>{text}</h3>
        </div>
    );
};

export default DynamicalPng;