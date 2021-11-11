import { Image, ImageBackground, Platform, StyleSheet, Text, TouchableOpacity, View } from "react-native"

import React from "react";

export interface HomeComponentProps {
    navigation?: any
    
}
 
const HomeComponent: React.FC<HomeComponentProps> = ({navigation}) => {
    
    return (
        <>
            <View style={styles.viewContainer}>
                <Image style={styles.logo} source={require('../../assets/images/Logo.png')} />
                <TouchableOpacity onPress={() => navigation.navigate('Tips')} style={{marginBottom: 22}} >
                    <ImageBackground source={require('../../assets/images/tip.jpg')} style={styles.imgBg} imageStyle={{borderRadius: 10}}>
                    </ImageBackground>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => navigation.navigate('Eco News')} style={styles.touchIos} >
                    <ImageBackground source={require('../../assets/images/eco.jpg')} style={styles.imgBg} imageStyle={{borderRadius: 10}}>
                        <Text style={styles.textCard}>Eco News</Text>
                    </ImageBackground>
                </TouchableOpacity>
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
        width: Platform.OS === 'ios' ? 363 : 378,
        height: Platform.OS === 'ios' ? 154 : 158,
        alignContent: 'center',
        justifyContent: 'center',
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
    touchIos: {
        marginBottom: Platform.OS === 'ios' ? 25 : 5,
    },
});

export default HomeComponent;