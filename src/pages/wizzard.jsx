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
import {
  themeColors,
  vectaryModels,
} from "../config/config";

//Logic import
import exportAsImage from "../functions/export-as-image";
import updateIndex from "../functions/updateIndex";

const Wizzard = () => {
  const [currentWizardStep, setCurrentWizardStep] = useState(0);
  const [townName, setTownName] = useState("");
  const [color, setColor] = useState("");
  const [image, setImage] = useState();
  const [selectedSignageEquipment, setSelectedSignageEquipment] = useState([]);
  const [selectedSignageEquipmentQuantity, setSelectedSignageEquipmentQuantity] = useState({});
  const [emailUser, setEmailUser] = useState("");
  
  const exportRef = useRef();
  
  useEffect(() => {
    exportAsImage(exportRef.current, setImage);
  }, [townName]);

  useEffect(() => {
    setSelectedSignageEquipmentQuantity((oldState) => {
      const newState = {}
      selectedSignageEquipment.forEach(
        selectedItem => {
          newState[selectedItem.value] =  oldState[selectedItem.value] ?? "1"
        }
      )
      return newState
    })
  }, [selectedSignageEquipment])
 
  const wizardSteps = [
    // <ChooseTown setTownName={setTownName} townName={townName} />,
    // <ChooseDominantColor
    //   color={color}
    //   setColor={setColor}
    //   themeColors={themeColors}
    // />,
    // <ChooseSignageEquipment
    //   onChangeAction={(selectedSignageEquipment) => {
    //     setSelectedSignageEquipment(selectedSignageEquipment);
    //   }}
    //   selectedSignageEquipment={selectedSignageEquipment}
    // />,
    // <SignalSystem
    //   models={selectedSignageEquipment}
    //   currentColor={color}
    //   pictureSleeve={image}
    // />,
    <CalculateCost
      selectedSignageEquipment={selectedSignageEquipment}
      selectedSignageEquipmentQuantity={selectedSignageEquipmentQuantity}
      email={emailUser}
      setEmail={setEmailUser}
      onChangeAction={(itemValue, quantity) => setSelectedSignageEquipmentQuantity(
        oldState => {
          const newState = {...oldState}
          newState[itemValue] = quantity
          return newState
        }
      )}
    />,
    <TotalCost
      town={townName}
      color={color}
      email={emailUser}
      quantity={selectedSignageEquipmentQuantity}
      signagesEquipements={selectedSignageEquipment}
    />,
  ];

  return (
    <div className="container-components">
      {wizardSteps[currentWizardStep]}

      <section className="container-navigation">
        <Input
          label={"Précédent"}
          onClick={
            (onClick = () =>
              updateIndex(currentWizardStep, 0, setCurrentWizardStep))
          }
        />

        <Input
          label={"Suivant"}
          onClick={
            (onClick = () =>
              updateIndex(
                currentWizardStep,
                wizardSteps.length,
                setCurrentWizardStep
              ))
          }
        />
      </section>
      <DynamicalPng text={townName} reference={exportRef} />
    </div>
  );
};

export default Wizzard;
