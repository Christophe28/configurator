import React from 'react';

const TotalCost = ({ town, color, data}) => {
    return (
        <div className="container-total-cost">
            <h2>Coût total</h2>
            <p>{town}</p>
            <p>{color}</p>
            {
                data.map((dataElement) => (
                    <p key={dataElement}>{dataElement}</p>
                ))
            }
        </div>
    );
};

export default TotalCost;