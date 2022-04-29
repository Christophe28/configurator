export const getMaterialsByModel = async (
  viewerApi,
  setAllMaterialsNames,
  setCurrentMaterialsColors
) => {
  const allMaterials = await viewerApi.getMaterials();

  const allMaterialsNames = allMaterials.map(material => material.name)

  const filteredMaterialsNames = allMaterialsNames.filter((materialName, index) => index === allMaterialsNames.indexOf(materialName))

  const defaultMaterialsColors = {};
  allMaterialsNames.forEach(materialName => {
    defaultMaterialsColors[materialName] = "#FF0000";
  });

  setAllMaterialsNames(filteredMaterialsNames);
  setCurrentMaterialsColors(defaultMaterialsColors);
};
