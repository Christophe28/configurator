//React import
import React from 'react';
import { useState, useEffect, useRef } from 'react';

//Lib import
import { VctrApi } from '../../../lib/api';

//Component import
import Iframe from './iframe';

//Logic import
import updateMaterial from '../../../functions/update-material';
import exportAsImage from '../../../functions/export-as-image';

const VectaryItems = ({ reference, models, dominantColor, pictureSleeve }) => {
    const viewerModels = [];
    const [test, setTest] = useState([]);
    useEffect(() => {
        const run = async () => {
            models.map(async (model) => {
                const viewerApi = new VctrApi("Model_" + model.id);
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
                models.map((model) => {
                    return(
                    <Iframe
                        reference={reference}
                        id={model.id}
                        key={model.id}
                    />
                    )
                })
            }
            <img src={test} alt="" />
        </div>
    );
};

export default VectaryItems;