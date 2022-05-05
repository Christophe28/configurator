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

export const signals = [
    {
        value: "box_1",
        id: "box_1",
        index: "0",
        label: "Effet de porte aux entrées de la commune",
        target: "",
        checked: ""
    },
    {
        value: "box_2",
        id: "box_2",
        index: "1",
        label: "Orientation des véhicules vers les ressources",
        target: "",
        checked: ""
    },
    {
        value: "box_3",
        rank: "noArrow",
        id: "box_3",
        index: "2",
        label: "Identification des parkings",
        target: "",
        checked: ""
    },
    {
        value: "box_4",
        id: "box_4",
        index: "3",
        label: "Information sur les ressources du centre-ville",
        target: "",
        checked: ""
    },
    {
        value: "box_5",
        rank: "multiArrow",
        id: "box_5",
        index: "4",
        label: "Orientation des piétons vers les ressources",
        target: "",
        checked: ""
    },
    {
        value: "box_6",
        id: "box_6",
        index: "5",
        label: "Interprétation historique des ressources",
        target: "",
        checked: ""
    }
]

export const productQuantity = Array.apply(null, new Array(10)).map(function(el, i) {return ++i});