import { FlatList, StyleSheet, Text, View } from "react-native";
import { useDispatch, useSelector } from "react-redux";

import { ArrayTipsData } from "../../data/interfaces";
import { Header } from "react-native-elements";
import React from "react";
import TipsGridComponent from "../../components/tipsGrid";
import { selectTipCategory } from "../../store/actions/tips.action";

export interface TipsScreenProps {
    navigation: any
}
 
const TipsScreen: React.FC<TipsScreenProps> = ({ navigation }) => {
    const dispatch = useDispatch();
    const TipsCategories = useSelector((state: any) => state.tipsCategories.list);

    const handleSelectedCategory = (item: {id: string, title: string}) => {
        dispatch(selectTipCategory(item.id));
        navigation.navigate('Tips-types', {
            name: item.title,
        });
    };

    const renderGridItems = (data: {item: ArrayTipsData; }) => <TipsGridComponent item={data.item} onSelected={handleSelectedCategory} />;

    return (
        <>
            <View>
                <Header
                leftComponent={{ text: 'Tips', style: { color: '#fff', fontSize: 28, fontWeight: "700" } }}
                rightComponent={{ icon: 'lightbulb', color: '#fff' }}
                backgroundImage={require('../../assets/images/tips.png')}
                statusBarProps={{ translucent: true, backgroundColor: "transparent"}}
                containerStyle={{ height: 315, alignItems: 'flex-end' }} />
            </View>
            <View style={styles.container}>
                <Text style={styles.title}>Tips for helping our planet</Text>
                <FlatList
                style={styles.textCard}
                data={TipsCategories}
                keyExtractor={(item: any) => item.id}
                renderItem={renderGridItems}
                numColumns={1} />
            </View>
        </>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    textCard: {
        paddingBottom: 1,
        textAlign: 'center',
    },
    title: {
        fontSize: 23,
        paddingBottom: 22,
        paddingTop: 22,
        textAlign: 'center',
    },
});

export default TipsScreen;