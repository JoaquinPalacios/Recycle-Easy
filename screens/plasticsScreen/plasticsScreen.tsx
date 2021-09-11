import { ActivityIndicator, FlatList, StyleSheet, View } from "react-native";
import PlasticTypesComponent, { arrayPlasticsData } from "../../data/PlasticTypes";
import React, { useEffect } from "react";
import { filteredRecycle, selectRecycle } from "../../store/actions/recycle.action";
import { useDispatch, useSelector } from "react-redux";

import PlasticItemComponent from "../../components/plasticItem/plasticItem";

interface plasticsScreenComponentProps {
    route: any
    navigation: any
    renderItem: any
}
 
const plasticsScreenComponent: React.FC<plasticsScreenComponentProps> = ({ navigation }) => {
    const dispatch = useDispatch();
    const categoryID = useSelector((state: any) => state.categories.selectedID);

    const plasticTypes = useSelector((state: any) => state.recycle.filteredRecycle);
    
    console.log('plasticTypes', plasticTypes)

    useEffect(() => {
        dispatch(filteredRecycle(categoryID))
        return () => {
            dispatch(filteredRecycle(''));
        }
    }, [categoryID]);

    const handleSelected = (item: { id: string; title: string; }) => {
        dispatch(selectRecycle(item.id));
        navigation.navigate('Plastic description', {
            name: item.title,
        });
    };
    const renderItemPlastic = ({item}: {item: arrayPlasticsData}) => (
        <PlasticItemComponent item={item} onSelected={handleSelected} />
    );
    return (
        <>{plasticTypes !== null ?
            (<View style={styles.container}>
                <FlatList 
                data={plasticTypes}
                keyExtractor={item => item.id}
                renderItem={renderItemPlastic} />
            </View>)
            : <ActivityIndicator color="#000" size="large" />}
        </>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignContent: 'center',
        justifyContent: 'center',
        marginTop: 44,
        marginHorizontal: 11,
        borderRadius: 22,
    },
});
export default plasticsScreenComponent;