import { StyleSheet, Text, View } from "react-native"

import CardsComponent from "../cards/cards";
import React from "react";

export interface EcoNoticiasProps {
    
}
 
const EcoNoticias: React.FC<EcoNoticiasProps> = () => {

    return (
        <>
            <View style={styles.container}>
                <Text style={styles.title}>Soy el componente Eco News</Text>
                <CardsComponent>
                    <Text style={styles.textCard}>Eco News</Text>
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
export default EcoNoticias;