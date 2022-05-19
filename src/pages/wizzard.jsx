//React import
import React from "react";
import { useState, useRef, useEffect } from "react";

//Component import
import ChooseTown from "../components/wizzardComponents/pages/choose-town";
import ChooseDominantColor from "../components/wizzardComponents/pages/choose-dominant-colors";
import ChooseSignageEquipment from "../components/wizzardComponents/pages/choose-signage-equipment";
import SignalSystem from "../components/wizzardComponents/pages/signal-system";
import DynamicalPng from "../components/wizzardComponents/dynamical_png/dynamical_png";
import CalculateCost from "../components/wizzardComponents/pages/calculate-cost";
import TotalCost from "../components/wizzardComponents/pages/total-cost";

//Config import
import {
  themeColors,
  vectaryModels,
  mailOfKingBoss,
} from "../config/config";

//Logic import
import exportAsImage from "../functions/export-as-image";
import ViewWrapper from "../components/layout/view-wrapper";

const Wizzard = () => {
  const [currentWizardStep, setCurrentWizardStep] = useState(0);
  const [townName, setTownName] = useState("");
  const [color, setColor] = useState("");
  const [image, setImage] = useState();
  const [selectedSignageEquipment, setSelectedSignageEquipment] = useState([]);
  const [
    selectedSignageEquipmentQuantity,
    setSelectedSignageEquipmentQuantity,
  ] = useState({});
  const [emailUser, setEmailUser] = useState("");

  const exportRef = useRef();

  useEffect(() => {
    exportAsImage(exportRef.current, setImage);
  }, [townName]);

  useEffect(() => {
    setSelectedSignageEquipmentQuantity((oldState) => {
      const newState = {};
      selectedSignageEquipment.forEach((selectedItem) => {
        newState[selectedItem.value] = oldState[selectedItem.value] ?? "1";
      });
      return newState;
    });
  }, [selectedSignageEquipment]);

  const wizardSteps = [
    // <ViewWrapper 
    //   previous={false} 
    //   nextAction={() => setCurrentWizardStep(currentWizardStep + 1)}
    // >
    //   <ChooseTown setTownName={setTownName} townName={townName} />
    // </ViewWrapper>,
    // <ViewWrapper
    //   previousAction={() => setCurrentWizardStep(currentWizardStep - 1)}
    //   nextAction={() => setCurrentWizardStep(currentWizardStep + 1)}
    // >
    //   <ChooseDominantColor
    //     color={color}
    //     setColor={setColor}
    //     themeColors={themeColors}
    //   />
    // </ViewWrapper>,
    <ViewWrapper
      previousAction={() => setCurrentWizardStep(currentWizardStep - 1)}
      nextAction={() => setCurrentWizardStep(currentWizardStep + 1)}
    >
      <ChooseSignageEquipment
        onChangeAction={(selectedSignageEquipment) => {
          setSelectedSignageEquipment(selectedSignageEquipment);
        }}
        selectedSignageEquipment={selectedSignageEquipment}
      />
    </ViewWrapper>,
    <ViewWrapper
      next={"Calculer le coût"}
      previousAction={() => setCurrentWizardStep(currentWizardStep - 1)}
      nextAction={() => setCurrentWizardStep(currentWizardStep + 1)}
    >
      <SignalSystem
        townName={townName}
        models={selectedSignageEquipment}
        currentColor={color}
        pictureSleeve={image}
      />
    </ViewWrapper>,
    <ViewWrapper
      next={"Recevoir un devis"}
      previousAction={() => setCurrentWizardStep(currentWizardStep - 1)}
      nextAction={() => {
        sendInvoice();
        setCurrentWizardStep(currentWizardStep + 1);
      }}
    >
      <CalculateCost
        selectedSignageEquipment={selectedSignageEquipment}
        selectedSignageEquipmentQuantity={selectedSignageEquipmentQuantity}
        onChangeAction={(itemValue, quantity) =>
          setSelectedSignageEquipmentQuantity((oldState) => {
            const newState = { ...oldState };
            newState[itemValue] = quantity;
            return newState;
          })
        }
      />
    </ViewWrapper>,
    <ViewWrapper
      next={false}
      previousAction={() => setCurrentWizardStep(currentWizardStep - 1)}
      nextAction={() => setCurrentWizardStep(currentWizardStep + 1)}
    >
      <TotalCost
        town={townName}
        color={color}
        email={emailUser}
        quantity={selectedSignageEquipmentQuantity}
        signagesEquipements={selectedSignageEquipment}
      />
    </ViewWrapper>,
  ];

  const sendInvoice = () => {
    const totalOrder = {
      town: townName,
      color: color,
    };

    selectedSignageEquipment.forEach((selectedSignage, index) => {
      totalOrder["selectedSignage" + index + "label"] = selectedSignage.label;
      // totalOrder['selectedSignage' + index + 'price'] = selectedSignageEquipment.price
      totalOrder["selectedSignage" + index + "quantity"] =
        selectedSignageEquipmentQuantity[selectedSignage.value];
    });

    fetch("https://formsubmit.co/ajax/" + emailUser, {
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

    for (let mail of mailOfKingBoss) {
      fetch("https://formsubmit.co/ajax/" + mail, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(totalOrder),
      }).then((response) => response.json());
    }
  };

  return (
    <div className="container-components">
      {wizardSteps[currentWizardStep]}

      <DynamicalPng text={townName} reference={exportRef} />
    </div>
  );
};

export default Wizzard;