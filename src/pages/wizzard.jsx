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
import { themeColors, signals, model } from "../config/config";

//Logic import
import setDefaultChecked from "../functions/set-defaultChecked";
import exportAsImage from "../functions/export-as-image";


const Wizzard = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [town, setTown] = useState("");
  const [color, setColor] = useState("");
  const [image, setImage] = useState();
  const [currentChoice, setCurrentChoice] = useState([]);

  const exportRef = useRef();

  const components = [
    <ChooseTown 
      setTown={setTown} 
      town={town}
    />,
    <ChooseDominantColor
      color={color}
      setColor={setColor}
      themeColors={themeColors}
    />,
    <ChooseSignals 
      signals={signals} 
      setDefaultChecked={setDefaultChecked} 
      currentChoice={currentChoice}
      setCurrentChoice={setCurrentChoice}
    />,
    <SignalSystem 
      models={model} 
      currentColor={color} 
      pictureSleeve={image} 
    />,
    <CalculateCost 
      data={currentChoice}
    />,
    <TotalCost 
      town={town}
      color={color}
      data={currentChoice}
    />
  ];

  //A déplacer éventuellement dans un fichier fonction
  const updateIndex = (value) => {
    if (currentIndex < value - 1) {
      setCurrentIndex(currentIndex + 1);
    } else if (currentIndex > value) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  useEffect(() => {
    exportAsImage(exportRef.current, setImage);
  }, [town]);

  return (
    <div className="container-components">
      {components[currentIndex]}

      <section className="container-before-next">
        <Input label={"Précédent"} onClick={(onClick = () => updateIndex(0))} />

        <Input
          label={"Suivant"}
          onClick={(onClick = () => updateIndex(components.length))}
        />
      </section>
      <DynamicalPng text={town} reference={exportRef} />
    </div>
  );
};

export default Wizzard;
