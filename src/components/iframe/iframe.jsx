import React from 'react';

const Iframe = ({ srcUrl, id }) => {
    return (
        <div className="container-iframe">
            <iframe 
                src={"https://www.vectary.com/viewer/v1/?model=" + srcUrl}
                frameBorder="0"
                id={id}
            >
            </iframe>
        </div>
    );
};

export default Iframe;