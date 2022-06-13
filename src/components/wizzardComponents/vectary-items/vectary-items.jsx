//React import
import React from 'react';
import { useEffect } from 'react';

//Lib import
import { VctrApi } from '../../../lib/api';

//Component import
import Iframe from './iframe';

//Logic import
import updateSvg from '../../../functions/update-svg';

const VectaryItems = ({ setPicto, setIsLoaded, models, pictureSleeve }) => {
    
    useEffect(() => {
        const run = async () => {
            setPicto([]);
            setIsLoaded("");
            models.map(async (model, index) => {
                
                const viewerApi = new VctrApi("Model_" + model.modelId);

                await viewerApi.init();

                const allScene = await viewerApi.getObjects();

                if("Model_" + model.modelId === viewerApi.id) {
                    for(let meshToHide in model.meshToHide) {
                        viewerApi.setVisibility(model.meshToHide[meshToHide], false, false);
                    }
                }
                updateSvg(viewerApi, pictureSleeve, allScene, models);
                
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
                models.map((model) => {
                    
                    return(    
                        <React.Fragment key={model.value}>
                            <Iframe
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