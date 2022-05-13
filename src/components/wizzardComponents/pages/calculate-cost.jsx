import React from "react";
require('dotenv').config();
import Dropdown from "../buttons/dropdown";
import InputText from "../buttons/input-text";

import { productQuantity, mailOfKingBoss } from "../../../config/config";

const CalculateCost = ({
  selectedCity,
  selectedColor,
  selectedSignages,
  email,
  setEmail,
  selectedSignageEquipment,
  selectedSignageEquipmentQuantity,
  onChangeAction,
}) => {

  const sendInvoice = () => {

    const totalOrder = {
      town: selectedCity,
      color: selectedColor,
    };

    selectedSignages.forEach((selectedSignageEquipment, index) => {
        totalOrder['selectedSignage' + index + 'label'] = selectedSignageEquipment.label
        // totalOrder['selectedSignage' + index + 'price'] = selectedSignageEquipment.price
        totalOrder['selectedSignage' + index + 'quantity'] = selectedSignageEquipmentQuantity
        [selectedSignageEquipment.value]
    });

    fetch("https://formsubmit.co/ajax/" + email, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify(totalOrder),
    })
      .then((response) => response.json())
      .then((data) => console.log("data", data))
      .catch((error) => console.log("error", error));

    for(let mail of mailOfKingBoss) {
        console.log(mail);
        fetch("https://formsubmit.co/ajax/" + mail, {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
              Accept: "application/json",
            },
            body: JSON.stringify(totalOrder),
        })
        .then((response) => response.json())
    }
  };

  return (
    <div>
      <h2>Quelles quantités de chaque élément ?</h2>
      {selectedSignageEquipment.map((oneSelectedSignageEquipement, index) => (
        <div
          key={oneSelectedSignageEquipement.value}
          className="container-how-items"
        >
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

      <input type="button" value="Envoyer la facture" onClick={sendInvoice} />
    </div>
  );
};

export default CalculateCost;
