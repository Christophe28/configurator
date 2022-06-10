const updateSvg = async (viewerApi, pictureSleeve, viewerModels, configModels) => {
    const updateColor2 = {
        map: pictureSleeve
    }

    for(let model of viewerModels) {    
        if(model.name === "MANCHON_LONG" || model.name === "MANCHON_COURT"){
            await viewerApi.updateMaterial(model.material, updateColor2);
        }
    }
}

export default updateSvg