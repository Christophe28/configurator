//React import
import React from "react";
import { useState, useRef } from "react";

//Component import
import ChooseTown from "../components/wizzardComponents/pages/choose-town";
import ChooseDominantColor from "../components/wizzardComponents/pages/choose-dominant-colors";
import ChooseSignals from "../components/wizzardComponents/pages/choose-signals";
import SignalSystem from "../components/wizzardComponents/pages/signal-system";
import Input from "../components/wizzardComponents/buttons/input";
import DynamicalPng from "../components/wizzardComponents/dynamical_png/dynamical_png";

//Config import
import { themeColors, signals, model } from "../config/config";

//Logic import
import setDefaultChecked from "../functions/set-defaultChecked";
import exportAsImage from "../functions/export-as-image";

//Pictures
import img from "../../public/assets/CHARLEROI.png";

const Wizzard = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [town, setTown] = useState("");
  const [color, setColor] = useState("");
  const [image, setImage] = useState();
  const exportRef = useRef();

  const components = [
    <ChooseTown 
        setTown={setTown}
     />,
    <ChooseDominantColor
      color={color}
      setColor={setColor}
      themeColors={themeColors}
    />,
    <ChooseSignals 
        signals={signals} 
        setDefaultChecked={setDefaultChecked} 
    />,
    <SignalSystem 
        models={model} 
        currentColor={color} 
        pictureSleeve={img} 
    />,
  ];

  //A déplacer éventuellement dans un fichier fonction
  const updateIndex = (value) => {
    if (currentIndex < value - 1) {
      setCurrentIndex(currentIndex + 1);
    } else if (currentIndex > value) {
      setCurrentIndex(currentIndex - 1);
    }
  };
  return (
    <div>
      {components[currentIndex]}

      <div ref={exportRef}>
        <img src={image} />
        <DynamicalPng text={town} />
      </div>
      <button
        onClick={() => exportAsImage(exportRef.current, "test", setImage)}
      >
        Capture Image
      </button>

      <Input 
        label={"Précédent"} 
        onClick={(onClick = () => updateIndex(0))} 
      />

      <Input
        label={"Suivant"}
        onClick={(onClick = () => updateIndex(components.length))}
      />
    </div>
  );
};

export default Wizzard;
