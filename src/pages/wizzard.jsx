//React import
import React from "react";
import { useState, useRef, useEffect } from "react";

//Component import
import ChooseTown from "../components/wizzardComponents/pages/choose-town";
import ChooseDominantColor from "../components/wizzardComponents/pages/choose-dominant-colors";
import ChooseSignageEquipment from "../components/wizzardComponents/pages/choose-signage-equipment";
import SignalSystem from "../components/wizzardComponents/pages/signal-system";
import Input from "../components/wizzardComponents/buttons/input";
import DynamicalPng from "../components/wizzardComponents/dynamical_png/dynamical_png";
import CalculateCost from "../components/wizzardComponents/pages/calculate-cost";
import TotalCost from "../components/wizzardComponents/pages/total-cost";

//Config import
import { themeColors, vectaryModels, mailOfKingBoss } from "../config/config";

//Logic import
import exportAsImage from "../functions/export-as-image";
import updateIndex from "../functions/updateIndex";

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
    <ChooseTown setTownName={setTownName} townName={townName} />,
    <ChooseDominantColor
      color={color}
      setColor={setColor}
      themeColors={themeColors}
    />,
    <ChooseSignageEquipment
      onChangeAction={(selectedSignageEquipment) => {
        setSelectedSignageEquipment(selectedSignageEquipment);
      }}
      selectedSignageEquipment={selectedSignageEquipment}
    />,
    <SignalSystem
      townName={townName}
      models={selectedSignageEquipment}
      currentColor={color}
      pictureSleeve={image}
    />,
    <CalculateCost
      selectedCity={townName}
      selectedColor={color}
      selectedSignages={selectedSignageEquipment}
      selectedSignageEquipment={selectedSignageEquipment}
      selectedSignageEquipmentQuantity={selectedSignageEquipmentQuantity}
      email={emailUser}
      setEmail={setEmailUser}
      onChangeAction={(itemValue, quantity) =>
        setSelectedSignageEquipmentQuantity((oldState) => {
          const newState = { ...oldState };
          newState[itemValue] = quantity;
          return newState;
        })
      }
    />,
    <TotalCost
      town={townName}
      color={color}
      email={emailUser}
      quantity={selectedSignageEquipmentQuantity}
      signagesEquipements={selectedSignageEquipment}
    />,
  ];

  const sendInvoice = () => {
    const totalOrder = {
      town: townName,
      color: color,
    };

    selectedSignageEquipment.forEach((selectedSignage, index) => {
        totalOrder['selectedSignage' + index + 'label'] = selectedSignage.label
        // totalOrder['selectedSignage' + index + 'price'] = selectedSignageEquipment.price
        totalOrder['selectedSignage' + index + 'quantity'] = selectedSignageEquipmentQuantity
        [selectedSignage.value]
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

    for(let mail of mailOfKingBoss) {
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
    <div className="container-components">
      {wizardSteps[currentWizardStep]}

      <section className="container-navigation">

        {currentWizardStep > 0 ? (
          <Input
            inputClass={"previousInput"}
            label={"Précédent"}
            onClick={() => {
              updateIndex(currentWizardStep, 0, setCurrentWizardStep);
            }}
          />
        ) : (
          ""
        )}

        {
          currentWizardStep < 4 ? (
            <Input
              inputClass={"nextInput"}
              label={"Suivant"}
              onClick={() =>
                updateIndex(
                  currentWizardStep,
                  wizardSteps.length,
                  setCurrentWizardStep
                )
              }
            />
          ) : currentWizardStep === 4 ? (
            <input 
              type="button" 
              value="Recevoir un devis" 
              onClick={() => {
                sendInvoice();
                updateIndex(currentWizardStep, wizardSteps.length, setCurrentWizardStep);
              }} 
            />
          ) : ""
        }
      </section>
      <DynamicalPng text={townName} reference={exportRef} />
    </div>
  );
};

export default Wizzard;