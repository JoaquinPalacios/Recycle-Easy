import React from "react";

export interface arrayPlasticsData {
    id: string
    type: string
    category: string
    title: string
    description: string
}

 const PlasticTypesComponent: arrayPlasticsData[] = [
    {
        id: '1',
        type: 'plastic',
        category: '1',
        title: 'PETE – Polyethylene Terephthalate',
        description: 'These are often the easiest plastics to recycle. Think products like soft drink bottles and common food packaging. These materials can be placed into your recycling bin and are recycled into plastic bottles and polyester fibres.',
    },
    {
        id: '2',
        type: 'plastic',
        category: '1',
        title: 'HDPE – High Density Polyethylene',
        description: 'This type of material is usually found in packaging for things like detergents, bleach, shampoo, conditioner and milk containers. These materials can be placed into your recycling bin for pick up by your local council and are recycled into more bottles and bags for future use.',
    },
    {
        id: '3',
        type: 'plastic',
        category: '1',
        title: 'V – Polyvinyl Chloride',
        description: 'Most people know what PVC looks like when they see it, but PVC includes pipes, toys, packing etc and can be difficult to recycle and a major health threat. PVC has been described as one of the most hazardous consumer products ever created. PVC should never be sent to landfill and should always be mechanically recycled so that it can be reused. If you have PVC that you need to recycle, contact your local council to find out the best way to dispose of it.',
    },
    {
        id: '4',
        type: 'plastic',
        category: '1',
        title: 'LDPE – Low-density Polyethylene',
        description: 'LDPE is the material used to create things like ice-cream lids, garbage bags, sandwich bags etc and is usually a soft and flexible material that can be recycled into the same thing. Local councils usually do not accept these types of materials, but programs like REDcycle do, passing them onto a manufacturing company called Replas, who give these plastics a new life!',
    },
    {
        id: '5',
        type: 'plastic',
        category: '1',
        title: 'PP – Polypropylene',
        description: 'Polypropylene materials can be used to create products like clothing, tubs, ropes or bottles and can be turned in to fibres when recycled properly. Ecobins are made from a class 5 plastic and are fully recyclable at the end of their life. These materials can be placed in your local council kerbside recycling bin.',
    },
    {
        id: '6',
        type: 'plastic',
        category: '1',
        title: 'LDPE – Low-density Polyethylene',
        description: 'Polystyrene can be difficult to recycle due to its bulky, yet lightweight nature, and the fact that it’s manufactured from petroleum. You should avoid buying products that have this recycling code on them. However, if you do have products that contain this code, try to reuse the material for another use inside your home, or donate it to a local craft shop so that it doesn’t go into landfill. This type of material can not be placed in your kerbside recycling bin.',
    },
    {
        id: '7',
        type: 'plastic',
        category: '1',
        title: 'All other plastics',
        description: 'This is the code used for all other types of plastics and should not be placed in to your recycling bin. It can include anything from acrylic to nylon, unfortunately recycling plants do not want this material and worse still, it could ruin an entire truckload of good recycling.',
    },
    {
        id: '8',
        type: 'glass',
        category: '2',
        title: 'saraseando',
        description: 'puara sarasaaahaha ahha a akjs l',
    },
];

export default PlasticTypesComponent;