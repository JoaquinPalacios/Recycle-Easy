import { Button, StyleSheet, Text, View } from "react-native"

import CardsComponent from "../cards/cards";
import React from "react";

export interface EcoNoticiasProps {
    // setButtonPressed: boolean
}
 
const EcoNoticias: React.FC<EcoNoticiasProps> = () => {

    return (
        <>
            <View style={styles.container}>
                <Text style={styles.title}>Soy el componente Eco-Noticias</Text>
                <CardsComponent>
                    <Text style={styles.textCard}>Eco-Noticias</Text>
                </CardsComponent>
            </View>
        </>
    );
}

const styles = StyleSheet.create({
    container: {
        display: "flex",
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

{/* <>
            {pressedButton === false ? (
            <View style={styles.container}>
                <Text style={styles.title}>Soy el componente Eco-Noticias</Text>
                <CardsComponent>
                    <Text style={styles.textCard}>Eco-Noticias</Text>
                    <Button title='Volver al inicio' onPress={handlePage} />
                </CardsComponent>
            </View>
            ) : <HomeComponent />}
        </> */}