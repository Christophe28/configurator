export const vectaryModels = [
    {
        label: "Panneau directionnel",
        name: "directionnalSign",
        value: "directionnalSign",
        id: "e23752d1-c5e8-4788-b719-8a913477dc6c",
    },
    {
        label: "Panneau 2000",
        name: "panel2000",
        value: "panel2000",
        id: "42ff93c8-3ef7-4f9e-a632-10c6d2a7ab59",
    },
    {
        label: "Panneau 3000",
        name: "panel3000",
        value: "panel3000",
        id: "d7e90749-acb2-4861-bb20-08881e0777ce",
    },
    {
        label: "Manchon text",
        name: "sleeveText",
        value: "sleeveText",
        id: "57cf45e9-d355-4463-af66-f08c72993784",
    }
];

export const colorsDarkScheme = 
    {
        COULEUR_SECONDAIRE0000: "#3E844A",
        COULEUR_PANNEAU: "#000000",
        COULEUR_DOMINANTE: "#787878"
    }

export const colorsLightScheme = 
    {
        COULEUR_SECONDAIRE0000: "#FF1A1A",
        COULEUR_PANNEAU: "#FFFFFF",
        COULEUR_DOMINANTE: "#FFFFFF"
    }

//Config wizzard

export const themeColors = [
    {
        value: "blue",
        hexadecimalColor: "#1E00FF",
        label: "bleu"
    },
    {
        value: "red",
        hexadecimalColor: "#DD2727",
        label: "rouge"
    },
    {
        value: "green",
        hexadecimalColor: "#15D121",
        label: "vert"
    }
]

export const signageEquipment = [
    {
        value: "option1",
        label: "Effet de porte aux entrées de la commune",
    },
    {
        value: "option2",
        label: "Orientation des véhicules vers les ressources",
    },
    {
        value: "option3",
        label: "Identification des parkings",
    },
    {
        value: "option4",
        label: "Information sur les ressources du centre-ville",
    },
    {
        value: "option5",
        label: "Orientation des piétons vers les ressources",
    },
    {
        value: "option6",
        label: "Interprétation historique des ressources",
    }
]

export const productQuantity = Array.apply(null, new Array(10)).map(function(el, i) {return i++});