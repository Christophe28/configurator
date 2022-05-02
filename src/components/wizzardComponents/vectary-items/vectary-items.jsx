import React from 'react';
import { useEffect } from 'react';

import { VctrApi } from '../../../lib/api';

import Iframe from './iframe';

import updateMaterial from '../../../functions/update-material';

const VectaryItems = ({ models, dominantColor }) => {
    const viewerModels = [];

    useEffect(() => {
        const run = async () => {
            models.map(async (model) => {
                const viewerApi = new VctrApi("Model_" + model.id);
                viewerModels.push(viewerApi);
                await viewerApi.init();

                updateMaterial(dominantColor, viewerApi);
            })
        }
        run();
    })
    return (
        <div>
            {
                models.map((model) => (
                    <Iframe
                        model={model}
                        key={model.id}
                    />
                ))
            }
        </div>
    );
};

export default VectaryItems;