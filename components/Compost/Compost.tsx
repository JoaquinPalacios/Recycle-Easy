import { StyleSheet, Text, View } from "react-native";

import React from "react";

export interface CompostComponentProps {
    
}
 
const CompostComponent: React.FC<CompostComponentProps> = () => {
    return (
        <>
            <View style={styles.container}>
                <Text style={styles.text}>Soy el componente Compost</Text>
            </View>
        </>
    );
}
 
export default CompostComponent;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignContent: 'center',
        justifyContent: 'center',
    },
    text: {
        fontSize: 19,
        textAlign: 'center',
    },
});