const updateMaterial = async (dominantColor, viewerApi) => {
    const updateColor = {
        color: dominantColor
    };
    const allSceneMaterials = await viewerApi.getMaterials();
    await viewerApi.updateMaterial("COULEUR_DOMINANTE", updateColor);
}

export default updateMaterial;