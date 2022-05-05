//React import
import React from "react";
import { useState, useRef, useEffect } from "react";

//Component import
import ChooseTown from "../components/wizzardComponents/pages/choose-town";
import ChooseDominantColor from "../components/wizzardComponents/pages/choose-dominant-colors";
import ChooseSignals from "../components/wizzardComponents/pages/choose-signals";
import SignalSystem from "../components/wizzardComponents/pages/signal-system";
import Input from "../components/wizzardComponents/buttons/input";
import DynamicalPng from "../components/wizzardComponents/dynamical_png/dynamical_png";
import CalculateCost from "../components/wizzardComponents/pages/calculate-cost";
import TotalCost from "../components/wizzardComponents/pages/total-cost";

//Config import
import { themeColors, signals, vectaryModels } from "../config/config";

//Logic import
import setDefaultChecked from "../functions/set-defaultChecked";
import exportAsImage from "../functions/export-as-image";
import updateIndex from "../functions/updateIndex";

const Wizzard = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [townName, setTownName] = useState("");
  const [color, setColor] = useState("");
  const [image, setImage] = useState();
  const [currentUsersSignals, setCurrentUsersSignals] = useState([]);

  const exportRef = useRef();

  const components = [
    <ChooseTown 
      setTownName={setTownName} 
      townName={townName}
    />,
    <ChooseDominantColor
      color={color}
      setColor={setColor}
      themeColors={themeColors}
    />,
    <ChooseSignals 
      signals={signals} 
      setDefaultChecked={setDefaultChecked} 
      currentChoice={currentUsersSignals}
      setCurrentChoice={setCurrentUsersSignals}
    />,
    <SignalSystem 
      models={vectaryModels} 
      currentColor={color} 
      pictureSleeve={image} 
    />,
    <CalculateCost 
      data={currentUsersSignals}
    />,
    <TotalCost 
      town={townName}
      color={color}
      data={currentUsersSignals}
    />
  ];

  useEffect(() => {
    exportAsImage(exportRef.current, setImage);
  }, [townName]);

  return (
    <div className="container-components">
      {components[currentIndex]}

      <section className="container-navigation">
        <Input label={"Précédent"} onClick={(onClick = () => updateIndex(currentIndex, 0, setCurrentIndex))} />

        <Input
          label={"Suivant"}
          onClick={(onClick = () => updateIndex(currentIndex, components.length, setCurrentIndex))}
        />
      </section>
      <DynamicalPng text={townName} reference={exportRef} />
    </div>
  );
};

export default Wizzard;
