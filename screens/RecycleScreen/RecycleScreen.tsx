import { FlatList, StyleSheet, Text, View } from "react-native"
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import GridItemsComponent from "../../components/gridItems/gridItems";
import { arrayCategoriesData } from "../../data/interfaces";
import { selectCategory } from "../../store/actions/category.action";

export interface RecycleComponentProps {
    navigation: any
    route: any
}
 
const RecycleComponent: React.FC<RecycleComponentProps> = ({ navigation }) => {
    const dispatch = useDispatch();
    const categories = useSelector((state: any) => state.categories.list)

    const handleSelectedCategory = (item: {id: string, title: string}) => {
        dispatch(selectCategory(item.id));
        navigation.navigate('Types of plastic', {
          name: item.title,
        });
    };

    const renderGridItems = (data: { item: arrayCategoriesData; }) => <GridItemsComponent item={data.item} onSelected={handleSelectedCategory} />;
    return (
        <>
            <View style={styles.container}>
                <Text style={styles.text}>Click on any category to find out how to recycle</Text>
                <FlatList 
                data={categories}
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