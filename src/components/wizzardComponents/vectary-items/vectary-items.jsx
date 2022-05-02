import React from 'react';
import { useEffect } from 'react';
import { VctrApi } from '../../../lib/api';
import Iframe from './iframe';

const VectaryItems = ({ models, dominantColor }) => {
    const viewerModels = [];

    useEffect(() => {
        const run = async () => {
            models.map(async (model) => {
                const viewerApi = new VctrApi("Model_" + model.id);
                viewerModels.push(viewerApi);
                await viewerApi.init();

                const updateColor = {
                    color: dominantColor
                }
                const allSceneMaterials = await viewerApi.getMaterials();
                await viewerApi.updateMaterial("COULEUR_DOMINANTE", updateColor);
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