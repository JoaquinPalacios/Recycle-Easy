import { Linking, StyleSheet, Text, TouchableOpacity, View } from "react-native"

import CardsComponent from "../cards/cards";
import React from "react";

export interface EcoNoticiasProps {
    
}
 
const EcoNoticias: React.FC<EcoNoticiasProps> = () => {
    return (
        <>
            <View style={styles.container}>
                <Text style={styles.title}>We recomend this sites for the latest Eco-News in Australia</Text>
                <TouchableOpacity onPress={() => Linking.openURL('https://econews.com.au/')}>
                    <CardsComponent>
                        <View>
                            <Text style={styles.titleCard}>Eco News</Text>
                        </View>
                        <View>
                            <Text style={styles.textCard}>Environment News</Text>
                        </View>
                    </CardsComponent>                    
                </TouchableOpacity>
                <TouchableOpacity onPress={() => Linking.openURL('https://www.ecovoice.com.au/')}>
                    <CardsComponent>
                        <View>
                            <Text style={styles.titleCard}>Eco Voice</Text>
                        </View>
                        <View>
                            <Text style={styles.textCard}>Environment News Australia</Text>
                        </View>
                    </CardsComponent>                    
                </TouchableOpacity>
                <TouchableOpacity onPress={() => Linking.openURL('https://happyeconews.com/')}>
                    <CardsComponent>
                        <View>
                            <Text style={styles.titleCard}>Happy Eco News</Text>
                        </View>
                        <View>
                            <Text style={styles.textCard}>Environment News</Text>
                        </View>
                    </CardsComponent>                    
                </TouchableOpacity>
            </View>
        </>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginHorizontal: 22,
    },
    textCard: {
        color: 'white',
        fontSize: 21,
        paddingBottom: 15,
        textAlign: 'center',
    },
    titleCard: {
        color: '#fff',
        fontSize: 21,
        fontWeight: "700",
        textAlign: 'center',
    },
    title: {
        fontSize: 23,
        paddingBottom: 50,
        textAlign: 'center',
    },
});
export default EcoNoticias;