import CategoriesComponent, { arrayData } from "../data/Categories";
import { FlatList, StyleSheet, Text, View } from "react-native"

import GridItemsComponent from "../gridItems/gridItems";
import React from "react";

export interface RecycleComponentProps {
    
}
 
const RecycleComponent: React.FC<RecycleComponentProps> = () => {
    const renderGridItems = (data: { item: arrayData; }) => <GridItemsComponent item={data.item} onSelected={() => {}} />;
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