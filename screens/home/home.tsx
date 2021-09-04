import { Button, Image, ImageBackground, StyleSheet, Text, TouchableOpacity, View } from "react-native"

import CardsComponent from "../../components/cards/cards"
import React from "react";

export interface HomeComponentProps {
    navigation?: any
    
}
 
const HomeComponent: React.FC<HomeComponentProps> = ({navigation}) => {
    
    return (
        <>
            <View style={styles.viewContainer}>
                <Image style={styles.logo} source={require('../../assets/images/Logo.png')} />
                {/* <CardsComponent> */}
                <TouchableOpacity onPress={() => navigation.navigate('Tips')} style={{marginBottom: 22}} >
                    <ImageBackground source={require('../../assets/images/tip.jpg')} style={styles.imgBg} imageStyle={{borderRadius: 10}}>
                        {/* <Text style={styles.textCard}>Tips</Text> */}
                        {/* <Button title='Tips' onPress={() => navigation.navigate('Tips')} /> */}
                    </ImageBackground>
                {/* </CardsComponent> */}
                </TouchableOpacity>
                {/* <CardsComponent> */}
                <TouchableOpacity onPress={() => navigation.navigate('Tips')} >
                    <ImageBackground source={require('../../assets/images/eco.jpg')} style={styles.imgBg} imageStyle={{borderRadius: 10}}>

                        <Text style={styles.textCard}>Eco News</Text>
                        {/* <Button title='Eco News' onPress={() => navigation.navigate('Eco News')} /> */}
                    </ImageBackground>
                </TouchableOpacity>
                {/* </CardsComponent> */}
            </View>
        </>
    );
};
const styles = StyleSheet.create({
    viewContainer: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    logo: {
        width: 100,
        height: 100,
        display: "flex",
        alignSelf: 'center',
        justifyContent: 'center',
        marginVertical: 50,
    },
    imgBg: {
        width: 378,
        height: 158,
        // flex: 1,
        alignContent: 'center',
        justifyContent: 'center',
        // borderRadius: 20,
    },
    title: {
        fontSize: 23,
        paddingBottom: 50,
        textAlign: 'center',
    },
    textCard: {
        color: 'white',
        fontSize: 45,
        fontWeight: '700',
        textAlign: 'center',
        paddingBottom: 10,
    },
});


export default HomeComponent;