import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

import { PlasticTypesData } from "../../data/interfaces";
import React from 'react';
import colors from "../../constants/colors";

interface PlasticItemComponentProps {
    item: PlasticTypesData
    onSelected: any
}
 
const PlasticItemComponent: React.FC<PlasticItemComponentProps> = ({ item, onSelected }) => {
    return (
        <>
            <TouchableOpacity onPress={() => onSelected(item)}>
                <View style={style.container}>
                    {(item.id < '8' && item.id !== '10' && item.id !== '11' && item.id !== '12' ) ? <View>
                        <Text style={style.textId}>{item.id} </Text>
                    </View> : null}                    
                    <View>
                        <Text style={style.text}>{item.title}</Text>
                    </View>
                </View>
            </TouchableOpacity>
        </>
    );
}
const style = StyleSheet.create({
    container: {
        alignContent: 'center',
        justifyContent: 'flex-start',
        fontSize: 25,
        flexDirection: 'row',
        paddingVertical: 10,
        paddingHorizontal: 5,
        marginVertical: 5,
        backgroundColor: colors.primary,
        borderRadius: 8,
    },
    textId: {
        fontWeight: '700',
        fontSize: 20,
        textAlign: 'center',
        color: 'white',
    },
    text: {
        fontSize: 20,
        textAlign: 'center',
        color: 'white',
    },
})
export default PlasticItemComponent;