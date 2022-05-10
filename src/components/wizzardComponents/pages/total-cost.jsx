import React from "react";

const TotalCost = ({ town, color, email, quantity, signagesEquipements }) => {
  const cheatTotal = [];
  let total = 0;

  const reducer = (cheatTotal, signagesEquipements, quantity) => {
      cheatTotal.push(signagesEquipements * quantity);
      const cheatReduce = cheatTotal.reduce((a, b) => a + b);
      total = cheatReduce;
  }

  return (
    <div className="container-total-cost">
      <h2>Coût total</h2>
      <p>Nom de la commune : {town}</p>
      <p>Couleur dominante : {color}</p>
      <p>Adresse email de contact : {email}</p>
      <table border="1">
        <thead>
          <tr>
            <th>Nom</th>
            <th>Quantité</th>
            <th>Prix unitaire</th>
            <th>Sous-total</th>
          </tr>
        </thead>
        <tbody>
          {Object.keys(quantity).map((oneKey, index) => {
            reducer(cheatTotal, signagesEquipements[index].price, quantity[oneKey])
            return (
              <tr key={quantity[oneKey] + index}>
                <td>{signagesEquipements[index].label}</td>
                <td>{quantity[oneKey]}</td>
                <td>{signagesEquipements[index].price}</td>
                <td>{cheatTotal[index]}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
      <p>total : {total}</p>
    </div>
  );
};

export default TotalCost;
