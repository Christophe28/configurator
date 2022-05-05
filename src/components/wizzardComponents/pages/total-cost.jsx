import React from 'react';

const TotalCost = ({ town, color, items}) => {

    return (
        <div className="container-total-cost">
            <h2>Coût total</h2>
            <p>{town}</p>
            <p>{color}</p>
            {
                items.map((item) => (
                    <p key={item.items}>{item.quantity + "==>" + item.items}</p>
                ))
            }
        </div>
    );
};

export default TotalCost;