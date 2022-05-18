//React import
import React from 'react';
import { useEffect } from 'react';

//Lib import
import { VctrApi } from '../../../lib/api';

//Component import
import Iframe from './iframe';

//Logic import
import updateMaterial from '../../../functions/update-material';
import exportAsImage from '../../../functions/export-as-image';

const VectaryItems = ({ models, dominantColor, pictureSleeve }) => {
    const viewerModels = [];

    useEffect(() => {
        const run = async () => {
            models.map(async (model) => {
                const viewerApi = new VctrApi("Model_" + model.modelId);
                viewerModels.push(viewerApi);
                await viewerApi.init();

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
                    <Iframe
                        id={model.modelId}
                        key={"Model" + index + "_" + model.modelId}
                    />
                    )
                })
            }
        </div>
    );
};

export default VectaryItems;