import { StyleSheet, Text, View } from "react-native";

import PlasticTypesComponent from '../../components/data/PlasticTypes';
import React from 'react';

interface SingleItemScreenComponentProps {
    route: any
}
 
const SingleItemScreenComponent: React.FC<SingleItemScreenComponentProps> = ({route}) => {
    const plastic = PlasticTypesComponent.find(item => item.id === route.params.productID);
    return (
        <>
            <View style={styles.container}>
                {/* <View style={styles.text}>
                    <Text>{plastic?.id}</Text>
                </View> */}
                <View>
                    <Text style={styles.textTitle}>{plastic?.id} {plastic?.title}</Text>
                </View>
                <View>
                    <Text style={styles.text}>{plastic?.description}</Text>
                </View>
            </View>
        </>
    );
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignContent: 'center',
        justifyContent: 'center',
        marginStart: 20,
        marginEnd: 10,
    },
    textTitle: {
        fontSize: 20,
        fontWeight: '700',
        paddingVertical: 10,
    },
    text: {
        fontSize: 19,
        fontWeight: '500',
        paddingVertical: 5,
    },
}); 
export default SingleItemScreenComponent;