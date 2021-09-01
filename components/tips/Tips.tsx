import { StyleSheet, Text, View } from "react-native";

import CardsComponent from "../cards/cards";
import React from "react";

export interface TipsComponentProps {
    
}
 
const TipsComponent: React.FC<TipsComponentProps> = () => {
    return (
        <>
            <View style={styles.container}>
                <Text style={styles.title}>Soy el componente Tips</Text>
                <CardsComponent>
                    <Text style={styles.textCard}>Tips</Text>
                </CardsComponent>
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
        color: 'white',
        fontSize: 21,
        paddingBottom: 15,
        textAlign: 'center',
    },
    title: {
        fontSize: 23,
        paddingBottom: 50,
        textAlign: 'center',
    },
});

export default TipsComponent;