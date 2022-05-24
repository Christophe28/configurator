//React import
import React from 'react';
import { useState, useEffect } from 'react';

//Lib import
import { VctrApi } from '../../../lib/api';

//Component import
import Iframe from './iframe';

//Logic import
import updateMaterial from '../../../functions/update-material';
import updateMaterial2 from '../../../functions/update-color-2';
const VectaryItems = ({ picto, setPicto, setIsLoaded, models, dominantColor, pictureSleeve }) => {
    const viewerModels = [];



    useEffect(() => {
        const run = async () => {
            setPicto([]);
            setIsLoaded("");
            models.map(async (model, index) => {
                
                const viewerApi = new VctrApi("Model_" + model.modelId);
                viewerModels.push(viewerApi);
                await viewerApi.init();
                
                await viewerApi.setPositionAbsolute("Camera", [4, 2, 7]);


                // updateMaterial(dominantColor, viewerApi, pictureSleeve);
                updateMaterial2(viewerApi, pictureSleeve);

                if(viewerApi.isReady === true) {
                    const waitForScreen = async () => { 
                        const screenshot = await viewerApi.takeScreenshot();
                        setPicto((oldScreen) => {
                            const newScreen = [...oldScreen];
                            newScreen[index] = screenshot;
                            return newScreen
                        });                    
                    }
                    const timeForScreen = () => {
                        setTimeout(waitForScreen, 1000)
                        setTimeout(setIsLoaded("Calculer le coût"), 2000)
                    }
                    timeForScreen();
                }
            })
        }
        run();
    }, [])

    
    return (
        <div className="container-iframe">
            {
                models.map((model, index) => {
                    return(    
                        <React.Fragment key={model.modelId + index}>
                            <Iframe
                                key={model.modelId + index}
                                id={model.modelId}
                                nameModel={model.label}
                            />    
                        </React.Fragment>                  
                    )
                }) 
            }
        </div>
    );
};

export default VectaryItems;