import React from "react";
import { useState, useEffect } from "react";

import reducer from "../../../functions/reducer";

const TotalCost = ({ quantity, signagesEquipements, image, currentAnim }) => {
  const [currentTotal, setCurrentTotal] = useState(0);

  const cheatTotal = [];

  return (
    <div className="container-total-cost">
      <h2>Merci nous revenons vers vous avec une offre </h2>
      <table border="1">
        <tbody>
          {Object.keys(quantity).map((oneKey, index) => {
            useEffect(() => {
              reducer(cheatTotal, signagesEquipements[index].price, quantity[oneKey], setCurrentTotal)
            }, [])
            return (
              <tr key={quantity[oneKey] + index}>
                <td>{signagesEquipements[index].label}</td>
                <td><img src={image[index]} alt={"Image du modèle " + signagesEquipements[index].label} /></td>
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
