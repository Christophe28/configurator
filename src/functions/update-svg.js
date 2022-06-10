const updateSvg = async (viewerApi, pictureSleeve, models) => {
    const updateColor2 = {
        map: pictureSleeve
    }
    for(let elem of models) {
        if(elem.name === "MANCHON_LONG" || elem.name === "MANCHON_COURT"){
            await viewerApi.updateMaterial(elem.material, updateColor2);
        }
    }
}

export default updateSvg