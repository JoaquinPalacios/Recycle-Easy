import { Button, Image, StyleSheet, Text, View } from "react-native"

import CardsComponent from "../../components/cards/cards"
import EcoNoticias from "../../components/EcoNoticias/EcoNoticias";
import React from "react";

// import { useNavigation } from "@react-navigation/native";




export interface HomeComponentProps {
    navigation?: any
    
}
 
const HomeComponent: React.FC<HomeComponentProps> = ({navigation}) => {
    
    return (
        <>
            <View style={styles.viewContainer}>
                <Text style={styles.title}>Hello User</Text>
                <Image style={styles.logo} source={require('../../assets/images/Logo.png')} />
                <CardsComponent>
                    <Text style={styles.textCard}>Tips</Text>
                    <Button title='Tips' onPress={() => navigation.navigate('Tips')} />
                </CardsComponent><CardsComponent>
                        <Text style={styles.textCard}>Eco-Noticias</Text>
                        <Button title='Eco-Noticias' onPress={() => navigation.navigate('Eco-Noticias')} />
                </CardsComponent>
            </View>
        </>
    );
};
const styles = StyleSheet.create({
    viewContainer: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        // width: '100%',
    },
    logo: {
        width: 100,
        height: 100,
        display: "flex",
        alignSelf: 'center',
        justifyContent: 'center',
        marginVertical: 50,
    },
    title: {
        fontSize: 23,
        paddingBottom: 50,
        textAlign: 'center',
    },
    textCard: {
        color: 'white',
        fontWeight: '700',
        textAlign: 'center',
        paddingBottom: 10,
    },
    // buttonStyle: {
    //     width: '50%',
    // },
});


export default HomeComponent;