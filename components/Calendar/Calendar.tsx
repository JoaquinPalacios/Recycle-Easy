import { StyleSheet, Text, View } from "react-native"

import React from "react";

export interface CalendarComponentProps {
    
}
 
const CalendarComponent: React.FC<CalendarComponentProps> = () => {
    return (
        <>
            <View style={styles.container}>
                <Text style={styles.text}>Soy el componente Calendar</Text>
            </View>
        </>
    );
}
 
export default CalendarComponent;

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