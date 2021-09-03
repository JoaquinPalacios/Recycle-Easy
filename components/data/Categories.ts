export interface arrayData {
    id: number
    title: string
    imgBg: any
}

 const CategoriesComponent: arrayData[] = [
    {
        id: 1,
        title: 'Plastics',
        imgBg: require('../../assets/images/plastics.png'),
    },
    {
        id: 2,
        title: 'Glass',
        imgBg: require('../../assets/images/glass.png'),
    },
    {
        id: 3,
        title: 'Carton',
        imgBg: require('../../assets/images/carton.png'),
    },
    {
        id: 4,
        title: 'Others',
        imgBg: require('../../assets/images/others.png'),
    },
];

export default CategoriesComponent;