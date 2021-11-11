import { ActivityIndicator, FlatList, StyleSheet, View } from "react-native";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { ArrayTipsItemsData } from "../../data/interfaces";
import TipsItemComponent from "../../components/tipsItems";
import { filterTips } from "../../store/actions/tipsDescription.action";

interface TipsItemsScreenComponentProps {
    navigation: any
}
 
const TipsItemsScreenComponent: React.FC<TipsItemsScreenComponentProps> = ({ navigation }) => {

    const dispatch = useDispatch();

    const categoryID = useSelector((state: any) => state.tipsCategories.selectedID);
    const tips = useSelector((state: any) => state.tips.filteredTips);

    useEffect(() => {
        dispatch(filterTips(categoryID))
    }, [categoryID])

    const handleSelectedTip = (item: {id: string; title: string, description: string}) => {
        navigation.navigate('Tips-types', {
            tipID: item.id,
            name: item.title,
        })
    }

    const renderItemTip = ({item}: {item: ArrayTipsItemsData}) => (
    <TipsItemComponent item={item} onSelected={handleSelectedTip} />
    )

    return (
        <>
        {tips !== null ?
            (<View  style={styles.container}>
                <FlatList 
                data={tips}
                keyExtractor={(item: any) => item.id}
                renderItem={renderItemTip} />
            </View>)
            : <ActivityIndicator color="#000" size="large" />}
        </>
    );
}

const styles = StyleSheet.create({
    container: {
        marginVertical: 22,
    },
});
 
export default TipsItemsScreenComponent;