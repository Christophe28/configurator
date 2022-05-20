//React import
import React from 'react';
import { useState, useEffect } from 'react';

//Lib import
import { VctrApi } from '../../../lib/api';

//Component import
import Iframe from './iframe';

//Logic import
import updateMaterial from '../../../functions/update-material';

const VectaryItems = ({ picto, setPicto, models, dominantColor, pictureSleeve }) => {
    console.log("juste pour test");
    const viewerModels = [];

    useEffect(() => {
        const run = async () => {
            setPicto([]);
            models.map(async (model, index) => {
                
                const viewerApi = new VctrApi("Model_" + model.modelId);
                viewerModels.push(viewerApi);
                await viewerApi.init();

                updateMaterial(dominantColor, viewerApi, pictureSleeve);
                
                if(viewerApi.isReady === true) {
                    console.log(viewerApi.isReady)
                    const screenshot = await viewerApi.takeScreenshot();
                    setPicto((oldScreen) => {
                        const newScreen = [...oldScreen];
                        newScreen[index] = screenshot;
                        return newScreen
                    });
                }

            })
        }
        run();
    }, [])

    return (
        <div>
            {
                models.map((model, index) => {
                    return(                      
                        <Iframe
                            key={model.modelId + index}
                            id={model.modelId}
                        />
                    )
                }) 
            }
        </div>
    );
};

export default VectaryItems;