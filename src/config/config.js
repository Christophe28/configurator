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
        value: "blueOfAzure",
        hexadecimalColor: "#0082EA",
        label: "bleu d'azure"
    },
    {
        value: "coblatBlue",
        hexadecimalColor: "#44479F",
        label: "blue cobalt"
    },
    {
        value: "slateGrey",
        hexadecimalColor: "#646971",
        label: "gris ardoise"
    },
    {
        value: "pomegranateRed",
        hexadecimalColor: "#F71F4C",
        label: "rouge grenade"
    },
    {
        value: "poppyRed",
        hexadecimalColor: "#E00012",
        label: "rouge coquelicot"
    },
    {
        value: "reddishOrange",
        hexadecimalColor: "#C14C25",
        label: "orange roux"
    },
    {
        value: "mustardYellow",
        hexadecimalColor: "#EF850B",
        label: "jaune moutarde"
    }
]

export const signageEquipment = [
    {
        value: "option1",
        label: "panneau d'interprétation",
        price: 900,
        modelId: "0de11c33-d091-457f-8dc8-d025b6f2858c"
    },
    {
        value: "option2",
        label: "Identifications des parkings",
        price: 1000,
        modelId: "57cf45e9-d355-4463-af66-f08c72993784"
    },
    {
        value: "option3",
        label: "Relais Info Services",
        price: 1500,
        modelId: "e8397f01-d261-4992-8438-78fd0df02cad"
    },
    {
        value: "option4",
        label: "Directionnel piétons",
        price: 500,
        modelId: "350b72ff-317b-419e-8244-10e143cce692"
    },
    {
        value: "option5",
        label: "Directionnel piétons + Relais Info Services",
        price: 1000,
        modelId: "6dfa2976-0c74-46f3-9ac7-edeb2405d5f9"
    }
]

export const productQuantity = Array.apply(null, new Array(10)).map(function(el, i) {return ++i});

export const mailOfKingBoss = [
    // process.env.REACT_APP_MAIL_1
]