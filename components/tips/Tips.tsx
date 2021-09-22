import { ImageBackground, StyleSheet, Text, View } from "react-native";

import CardsComponent from "../cards/cards";
import { Header } from "react-native-elements";
import React from "react";

export interface TipsComponentProps {
    
}
 
const TipsComponent: React.FC<TipsComponentProps> = () => {
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
                <Text style={styles.title}>Soy el componente Tips</Text>
                <CardsComponent>
                    <Text style={styles.textCard}>Tips</Text>
                </CardsComponent>
            </View>
        </>
    );
}

const styles = StyleSheet.create({
    // imageBg: {
    //     width: "100%",
    //     height: 315,
    // },
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