import { StyleSheet, Text, View } from "react-native"

import React from "react";

export interface RecycleComponentProps {
    
}
 
const RecycleComponent: React.FC<RecycleComponentProps> = () => {
    return (
        <>
            <View style={styles.container}>
                <Text style={styles.text}>Soy el componente Recycle</Text>
            </View>
        </>
    );
}
 
export default RecycleComponent;

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