import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

import { ArrayTipsData } from "../../data/interfaces";
import React from 'react';
import colors from "../../constants/colors";

interface TipsGridComponentProps {
    item: ArrayTipsData
    onSelected: any
}
 
const TipsGridComponent: React.FC<TipsGridComponentProps> = ({ item, onSelected }) => {
    return (
        <>
            <View>
                <TouchableOpacity
                style={styles.container}
                onPress={() => onSelected(item)}>
                    <View>
                        <Text style={styles.text}>{item.title}</Text>
                    </View>
                </TouchableOpacity>
            </View> 
        </>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: colors.primary,
        color: '#fff',
        flex: 1,
        borderRadius: 10,
        marginVertical: 10,
        justifyContent: 'center',
        alignItems: 'center',
        paddingHorizontal: 55,
        paddingVertical: 11,
        shadowColor: '#000',
        shadowOffset: {
          width: 0,
          height: 2,
        },
        shadowRadius: 6,
        shadowOpacity: 0.25,
        elevation: 5,
    },
    text: {
        color: '#fff',
        fontSize: 19,
    },
})
 
export default TipsGridComponent;