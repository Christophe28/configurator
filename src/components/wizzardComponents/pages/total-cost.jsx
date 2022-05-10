import React from "react";

// import reducer from "../../../functions/reducer";

const TotalCost = ({ town, color, email, quantity, signagesEquipements }) => {
  const cheatTotal = [];
  let total = 0;
  
  const reducer = (array, value, quantity) => {
    array.push(value * quantity);
    const cheatReduce = array.reduce((a, b) => a + b);
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
            <th>picto</th>
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
                <td>picto à en devenir pris sur les modèles vectary</td>
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
