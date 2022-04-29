//import react
import React from "react";
import { useEffect, useState } from "react";
import { VctrApi } from "../lib/api";

//import config and function
import { model, materials, colorsDarkScheme, colorsLightScheme } from "../config/config";
import { getMaterialsByModel } from "../lib/vectary";

//import components
import Dropdown from "../components/buttons/dropdown/dropdown";
import Iframe from "../components/iframe/iframe";
import ColorPickers from "../components/color-pickers";
import Radio from "../components/buttons/radio/radio";
import ColorsSchemePickers from "../components/buttons/inputColor/colors-scheme-pickers";

let viewerApi;

const Configurator = () => {
  // Model
  const [currentModel, setModel] = useState(model[0]);
  // Sleeves
  const [allSleeves, setAllSleeves] = useState([]);
  const [currentSleeve, setCurrentSleeve] = useState({ name: "MANCHON_LONG" });
  // Panels
  const [allPanels, setAllPanels] = useState([]);
  const [currentPanel, setPanel] = useState({ name: "PANNEAU_500" });
  // Materials
  const [allMaterialsNames, setAllMaterialsNames] = useState([]);
  const [currentMaterialsColors, setCurrentMaterialsColors] = useState({});

  useEffect(() => {
    async function run() {
      viewerApi = new VctrApi("Model_X");
      await viewerApi.init();

      getMaterialsByModel(
        viewerApi,
        setAllMaterialsNames,
        setCurrentMaterialsColors
      );

      const allMeshes = await viewerApi.getMeshes();

      const allMeshesAsOptions = allMeshes.map((mesh) => ({
        ...mesh,
        label: mesh.name,
        value: mesh.name,
      }));

      const filteredMeshesSleeve = allMeshesAsOptions.filter(
        (mesh) => mesh.material === materials[0].value
      );
      const filteredMeshesPanel = allMeshesAsOptions.filter(
        (mesh) => mesh.material === materials[1].value
      );
      setAllSleeves(filteredMeshesSleeve);
      setAllPanels(filteredMeshesPanel);
    }
    run();
  }, [currentModel]);

  useEffect(() => {
    if (currentSleeve) {
      const run = async () => {
        allSleeves.forEach(
          async (sleeve) => await viewerApi.setVisibility(sleeve.name, false)
        );
        await viewerApi.setVisibility(currentSleeve.name, true);
      };
      run();
    }
  }, [currentSleeve]);

  useEffect(() => {
    if (currentPanel) {
      const run = async () => {
        allPanels.forEach(
          async (panel) => await viewerApi.setVisibility(panel.name, false)
        );
        await viewerApi.setVisibility(currentPanel.name, true);
      };
      run();
    }
  }, [currentPanel]);

  useEffect(() => {
    const updateMaterialsColors = async () => {
      const materialsNames = Object.keys(currentMaterialsColors);
      materialsNames.forEach(
        async (materialName) =>
          await viewerApi.updateMaterial(materialName, {
            color: currentMaterialsColors[materialName],
          })
      );
    };
    updateMaterialsColors();
  }, [currentMaterialsColors]);

  const updateColor = (name, value) => {
    setCurrentMaterialsColors((currentMaterialsColors) => ({
      ...currentMaterialsColors,
      [name]: value,
    }));
  };

  return (
    <div>
      <h1>Configurateur Inseetu</h1>
      <Dropdown
        data={model}
        defaultOption={currentModel}
        changeDataSelected={(modelToChange) => setModel(modelToChange)}
      />
      <Iframe srcUrl={currentModel.id} id={"Model_X"} />
      <ColorPickers data={currentMaterialsColors} changeColor={updateColor} />
      <Radio
        options={allSleeves}
        onChange={(currentSleeve) => {
          setCurrentSleeve(currentSleeve);
        }}
        name="sleeve"
        defaultOption={currentSleeve}
      />
      <Radio
        options={allPanels}
        onChange={(currentPanel) => setPanel(currentPanel)}
        name="panel"
        defaultOption={currentPanel}
      />
      <ColorsSchemePickers 
        label={"Gamme de couleur dark"}
        onClick={() => {
          setCurrentMaterialsColors(colorsDarkScheme);
        }}
      />
      <ColorsSchemePickers
        label={"Gamme de couleur light"}
        onClick={() => {
          setCurrentMaterialsColors(colorsLightScheme);
        }}
      />
    </div>
  );
};

export default Configurator;
