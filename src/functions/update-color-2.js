const updateMaterial2 = async (viewerApi, pictureSleeve) => {
    const updateColor2 = {
        map: pictureSleeve
    }
    await viewerApi.updateMaterial("COULEUR_DOMINANTE", updateColor2);
    
}

export default updateMaterial2