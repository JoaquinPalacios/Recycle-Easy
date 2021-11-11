import { StyleSheet, Text, View } from "react-native";

import { ArrayTipsItemsData } from "../../data/interfaces";
import React from 'react';

interface TipsItemComponentProps {
    item: ArrayTipsItemsData
    onSelected: any
}
 
const TipsItemComponent: React.FC<TipsItemComponentProps> = ({ item }) => {
    
    return (
        <>        
            <View style={styles.container}>                                      
                <View>
                    <Text style={styles.subtitle}>{item.subtitle}</Text>
                </View>
                <View>
                    <Text style={styles.text}>{item.description}</Text>
                </View>
            </View>            
        </>
    );
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignContent: 'center',
        justifyContent: 'flex-start',
        marginHorizontal: 22,
        marginVertical: 11,
        paddingHorizontal: 11,
        paddingVertical: 5.5,
        backgroundColor: '#E1F3E5',
        borderColor: '#000',
        borderRadius: 8,
        borderWidth: 1,
        shadowColor: '#000',
        shadowOffset: {
          width: 0,
          height: 2,
        },
        shadowRadius: 6,
        shadowOpacity: 0.25,
        elevation: 5,
    },
    subtitle: {
        color: '#000',
        fontWeight: '700',
        fontSize: 20,
        paddingBottom: 5.5,
        textAlign: 'left',
    },
    text: {
        color: '#000',
        fontSize: 20,
        textAlign: 'justify',
    },
}); 
export default TipsItemComponent;