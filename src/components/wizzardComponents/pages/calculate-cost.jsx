import React from "react";
// require('dotenv').config();
import Dropdown from "../buttons/dropdown";
import InputText from "../buttons/input-text";

import { productQuantity, mailOfKingBoss } from "../../../config/config";

const CalculateCost = ({
  email,
  setEmail,
  selectedSignageEquipment,
  selectedSignageEquipmentQuantity,
  onChangeAction,
  image
}) => {
  return (
    <div>
      <h2>Indiquez votre adresse mail ci-dessous pour recevoir une estimation budgétaire de votre projet</h2>
      {selectedSignageEquipment.map((oneSelectedSignageEquipement, index) => (
        <div
          key={oneSelectedSignageEquipement.value}
          className="container-how-items"
        >
          <img src={image[index]} alt="" />
          <p>{oneSelectedSignageEquipement.label}</p>
          <Dropdown
            items={productQuantity}
            defaultValue={
              selectedSignageEquipmentQuantity[
                oneSelectedSignageEquipement.value
              ]
            }
            onChange={(e) => {
              onChangeAction(
                oneSelectedSignageEquipement.value,
                e.target.value
              );
            }}
          />
        </div>
      ))}

      <InputText
        type="email"
        placeholder={"Votre adresse mail"}
        value={email}
        name={"email"}
        onChange={(e) => setEmail(e.target.value)}
        required
      />
      
    </div>
  );
};

export default CalculateCost;
