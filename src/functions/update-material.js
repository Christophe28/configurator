const updateMaterial = async (dominantColor, viewerApi, pictureSleeve) => {
    const updateColor = {
        color: dominantColor,
        map: pictureSleeve
    };
    await viewerApi.updateMaterial("COULEUR_DOMINANTE", updateColor);
}

export default updateMaterial;