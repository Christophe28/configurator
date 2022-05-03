const updateMaterial = async (dominantColor, viewerApi, pictureSleeve) => {
    const updateColor = {
        color: dominantColor,
        map: pictureSleeve
    };
    const allSceneMaterials = await viewerApi.getMaterials();
    await viewerApi.updateMaterial("COULEUR_DOMINANTE", updateColor);
}

export default updateMaterial;