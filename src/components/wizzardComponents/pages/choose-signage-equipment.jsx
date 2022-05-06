//React import
import React from "react";

//Component import
import Checkboxes from "../buttons/checkboxes";
import { signageEquipment } from "../../../config/config";

const ChooseSignageEquipment = ({ onChangeAction, selectedSignageEquipment }) => {

  return (
    <div className="container-signal-fonction">
      <h2>Quelles fonctions de signalétique souhaitez-vous implanter ?</h2>
      <Checkboxes
        items={signageEquipment}
        onChangeAction={onChangeAction}
        selectedItems={selectedSignageEquipment}
      />
    </div>
  );
};

export default ChooseSignageEquipment;
