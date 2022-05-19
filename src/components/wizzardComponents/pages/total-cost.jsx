import React from "react";
import { useState, useEffect } from "react";

import reducer from "../../../functions/reducer";

const TotalCost = ({ town, color, email, quantity, signagesEquipements }) => {
  const [currentTotal, setCurrentTotal] = useState(0);

  const cheatTotal = [];

  return (
    <div className="container-total-cost">
      <h2>Merci nous revenons vers vous avec une offre </h2>
      <table border="1">
        <thead>
          <tr>
            <th>Nom</th>
            <th>picto</th>
            <th>Quantité</th>
          </tr>
        </thead>
        <tbody>
          {Object.keys(quantity).map((oneKey, index) => {
            useEffect(() => {
              reducer(cheatTotal, signagesEquipements[index].price, quantity[oneKey], setCurrentTotal)
            }, [])
            return (
              <tr key={quantity[oneKey] + index}>
                <td>{signagesEquipements[index].label}</td>
                <td>picto à en devenir pris sur les modèles vectary</td>
                <td>X {quantity[oneKey]}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default TotalCost;
