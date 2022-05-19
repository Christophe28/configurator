//React import
import React from 'react';
import { useState, useEffect } from 'react';

//Lib import
import { VctrApi } from '../../../lib/api';

//Component import
import Iframe from './iframe';

//Logic import
import updateMaterial from '../../../functions/update-material';
import exportAsImage from '../../../functions/export-as-image';

const VectaryItems = ({ reference, models, dominantColor, pictureSleeve }) => {
    const [picto, setPicto] = useState();
    console.log(picto);
    const viewerModels = [];

    useEffect(() => {
        const run = async () => {
            models.map(async (model) => {
                const viewerApi = new VctrApi("Model_" + model.modelId);
                viewerModels.push(viewerApi);
                await viewerApi.init();
                if(viewerApi.isReady === true) {
                    exportAsImage(reference.current, setPicto);
                }

                updateMaterial(dominantColor, viewerApi, pictureSleeve);
            })
        }
        run();
    })

    return (
        <div>
            {
                models.map((model, index) => {
                    return(
                        <>
                            {/* <Iframe
                                // reference={reference}
                                id={model.modelId}
                                key={"Model" + index + "_" + model.modelId}
                                /> */}

                            <iframe   
                                ref={reference}  
                                key={model.modelId}
                                id={"Model_" + model.modelId}
                                src={"https://www.vectary.com/viewer/v1/?model=" + model.modelId}
                                frameBorder="0"
                                width="20%"
                                height="200">
                            </iframe>
                        </>
                    )
                })
            }
        </div>
    );
};

export default VectaryItems;