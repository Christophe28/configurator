//React import
import React from "react";
import { useState, useRef, useEffect } from "react";
import { useSpring, animated, config } from "react-spring";

//Component import
import ChooseTown from "../components/wizzardComponents/pages/choose-town";
import ChooseDominantColor from "../components/wizzardComponents/pages/choose-dominant-colors";
import ChooseSignageEquipment from "../components/wizzardComponents/pages/choose-signage-equipment";
import SignalSystem from "../components/wizzardComponents/pages/signal-system";
import DynamicalPng from "../components/wizzardComponents/dynamical_png/dynamical_png";
import CalculateCost from "../components/wizzardComponents/pages/calculate-cost";
import TotalCost from "../components/wizzardComponents/pages/total-cost";
import ViewWrapper from "../components/layout/view-wrapper";

//Config import
import {
  themeColors,
  vectaryModels,
  mailOfKingBoss,
} from "../config/config";

//Logic import
import exportAsImage from "../functions/export-as-image";
import showInput from "../functions/show-input";

const Wizzard = () => {
  const [currentWizardStep, setCurrentWizardStep] = useState(0);
  const [townName, setTownName] = useState("");
  const [color, setColor] = useState("");
  const [colorsPickerValue, setColorsPickerValue] = useState("");
  const [image, setImage] = useState();
  const [selectedSignageEquipment, setSelectedSignageEquipment] = useState([]);
  const [selectedSignageEquipmentQuantity, setSelectedSignageEquipmentQuantity] = useState({});
  const [emailUser, setEmailUser] = useState("");
  const [pictoVectaryModel, setPictoVectaryModel] = useState([]);
  const [vectaryModelIsLoaded, setVectaryModelIsLoaded] = useState("");
  const [currentAnim, setCurrentAnim] = useState();

  const exportRef = useRef();
  const textInputNext = "Recevoir un devis";

  //=============Animation=============//
  const welcomAnim = useSpring({
    reset: true,
    config: { duration: 1000 },
    from: { opacity: 0, y: 600 },
    to: { opacity: 1, y: 0 }
  })

  const comeBack = useSpring({
      reset: true,
      config: { duration: 1000 },
      from: { opacity: 0, x: -600 },
      to: { opacity: 1, x: 0 }
  })

  const leavePage = useSpring({
      reset: true,
      config: { duration: 1000 },
      from: { opacity: 1, x: 0 },
      to: { opacity: 0, x: -600 }
  })
  
  const previousLeave = useSpring({
    reset: true,
    config: { duration: 1000 },
    from: { opacity: 1, y: 0 },
    to: { opacity: 0, y: 600 }
  })

  //Next
  const changePage = () => {
    setCurrentWizardStep(currentWizardStep + 1);
    setCurrentAnim(welcomAnim);
  }
  const waitForRefreshAnim = () => {
    setCurrentAnim();
  }
  const waitEndOfAnnim = () => {
    setTimeout(changePage, 2000);
    setTimeout(waitForRefreshAnim, 3000);
  }

  //Before
  const comeBackComposant = () => {
    setCurrentWizardStep(currentWizardStep - 1);
    setCurrentAnim(comeBack);
  }

  const waitComposantLeavePage = () => {
    setTimeout(comeBackComposant, 2000);
    setTimeout(waitForRefreshAnim, 3000);
  }

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
    <ViewWrapper 
      previous={false} 
      next={showInput(townName)}
      currentAnim={currentAnim}
      nextAction={() => {
          setCurrentAnim(leavePage);
          waitEndOfAnnim();
        }
      }
    >
      <ChooseTown 
        setTownName={setTownName} 
        townName={townName} 
      />
    </ViewWrapper>,
    <ViewWrapper
      next={showInput(color)}
      previousAction={() => {
        setCurrentAnim(previousLeave);
        waitComposantLeavePage();
      }}
      currentAnim={currentAnim}
      nextAction={() => {
        setCurrentAnim(leavePage);
        waitEndOfAnnim();
        exportAsImage(exportRef.current, setImage);
      }}
    >
      <ChooseDominantColor
        color={color}
        colorsPickerValue={colorsPickerValue}
        setColorsPickerValue={setColorsPickerValue}
        setColor={setColor}
        themeColors={themeColors}
      />
    </ViewWrapper>,
    <ViewWrapper
      next={showInput(selectedSignageEquipment)}
      currentAnim={currentAnim}
      previousAction={() => {
        setCurrentAnim(previousLeave);
        waitComposantLeavePage();
      }}
      nextAction={() => {
          setCurrentAnim(leavePage);
          waitEndOfAnnim();
        }
      }
    >
      <ChooseSignageEquipment
        onChangeAction={(selectedSignageEquipment) => {
          setSelectedSignageEquipment(selectedSignageEquipment);
        }}
        selectedSignageEquipment={selectedSignageEquipment}
      />
    </ViewWrapper>,
    <ViewWrapper
      currentAnim={currentAnim}
      next={showInput(vectaryModelIsLoaded, vectaryModelIsLoaded)}
      previousAction={() => {
        setCurrentAnim(previousLeave);
        waitComposantLeavePage();
      }}
      nextAction={() => {
        setCurrentAnim(leavePage);
        waitEndOfAnnim();
      }}
    >
      <SignalSystem
        setIsLoaded={setVectaryModelIsLoaded}
        myPicto={pictoVectaryModel}
        setMyPicto={setPictoVectaryModel}
        townName={townName}
        models={selectedSignageEquipment}
        currentColor={color}
        pictureSleeve={image}
      />
    </ViewWrapper>,
    <ViewWrapper
      currentAnim={currentAnim}
      next={showInput(emailUser, textInputNext)}
      previousAction={() => {
        setCurrentAnim(previousLeave);
        waitComposantLeavePage();
      }}
      nextAction={() => {
        sendInvoice();
        setCurrentAnim(leavePage);
        waitEndOfAnnim();
      }}
    >
      <CalculateCost
        selectedSignageEquipment={selectedSignageEquipment}
        selectedSignageEquipmentQuantity={selectedSignageEquipmentQuantity}
        currentAnim={currentAnim}
        setEmail={setEmailUser}
        email={emailUser}
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
      currentAnim={currentAnim}
      next={'Acceuil'}
      previousAction={() => {
        setCurrentAnim(previousLeave);
        waitComposantLeavePage();
      }}
      nextAction={() => setCurrentWizardStep(0)}
    >
      <TotalCost
        currentAnim={currentAnim}
        image={pictoVectaryModel}
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
      <DynamicalPng reference={exportRef} text={townName} color={color}/>
    </div>
  );
};

export default Wizzard;