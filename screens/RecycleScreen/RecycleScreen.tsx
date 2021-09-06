import CategoriesComponent, { arrayData } from "../../components/data/Categories";
import { FlatList, StyleSheet, Text, View } from "react-native"

import GridItemsComponent from "../../components/gridItems/gridItems";
import React from "react";

export interface RecycleComponentProps {
    navigation: any
    route: any
}
 
const RecycleComponent: React.FC<RecycleComponentProps> = ({ navigation, route}) => {
    const handleSelectedCategory = (item: {id: string, title: string}) => {
        navigation.navigate('Types of plastic', {
          categoryID: item.id,
          name: item.title,
        });
    };


    const renderGridItems = (data: { item: arrayData; }) => <GridItemsComponent item={data.item} onSelected={handleSelectedCategory} />;
    return (
        <>
            <View style={styles.container}>
                <Text style={styles.text}>Click on any category to find out how to recycle</Text>
                <FlatList 
                data={CategoriesComponent}
                keyExtractor={(item: any) => item.id}
                renderItem={renderGridItems}
                numColumns={2} />
            </View>
        </>
    );
}
 
export default RecycleComponent;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignContent: 'center',
        justifyContent: 'center',
    },
    text: {
        fontSize: 28,
        marginBottom: 110,
        marginTop: 44,
        paddingHorizontal: 44,
        textAlign: 'center',
    },
});