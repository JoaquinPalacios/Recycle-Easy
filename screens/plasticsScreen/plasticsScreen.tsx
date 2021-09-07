import { FlatList, StyleSheet, View } from "react-native";
import PlasticTypesComponent, { arrayPlasticsData } from "../../components/data/PlasticTypes";

import PlasticItemComponent from "../../components/plasticItem/plasticItem";
import React from "react";

interface plasticsScreenComponentProps {
    route: any
    navigation: any
    renderItem: any
}
 
const plasticsScreenComponent: React.FC<plasticsScreenComponentProps> = ({ navigation, route }) => {
    const plasticTypes = PlasticTypesComponent.filter(plastic => plastic.category === route.params.categoryID);
    console.log('plasticTypes', plasticTypes)

    const handleSelected = (item: { id: string; title: string; }) => {
        navigation.navigate('Plastic description', {
            productID: item.id,
            name: item.title,
        });
    };
    const renderItemPlastic = ({item}: {item: arrayPlasticsData}) => (
        <PlasticItemComponent item={item} onSelected={handleSelected} />
    );
    return (
        <>
            <View style={styles.container}>
                <FlatList 
                data={plasticTypes}
                keyExtractor={item => item.id}
                renderItem={renderItemPlastic} />
            </View>            
        </>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignContent: 'center',
        justifyContent: 'center',
        marginTop: 44,
    },
});
export default plasticsScreenComponent;