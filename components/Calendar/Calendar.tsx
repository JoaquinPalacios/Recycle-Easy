import { StyleSheet, Text, View } from "react-native"

import { Button } from "react-native-elements";
import InputComponent from "../Input";
import React from "react";
import colors from "../../constants/colors";

export interface CalendarComponentProps {
    
}
 
const CalendarComponent: React.FC<CalendarComponentProps> = () => {
    return (
        <>
            <View style={styles.container}>
                <Text style={styles.text}>Find out when your bin is collected</Text>
                <View style={styles.inputs}>
                    <InputComponent
                    id='State'
                    label='State'
                    autoCapitalize='characters'
                    required
                    errorText='Please insert valid State'
                    onInputChange={() => (console.log('Calendar State input'))}
                    />
                    <InputComponent
                    id='PC'
                    label='Post Code'
                    keyboardType='numeric'
                    minLength={4}
                    maxLength={4}
                    required
                    errorText='Please insert valid Post Code'
                    onInputChange={() => (console.log('Calendar Post Code input'))}
                    />
                    <Button
                    title='Submit'
                    onPress={() => (console.log('submit de calendar'))}
                    buttonStyle={styles.button}
                    />
                </View>
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
        paddingBottom: 88,
        textAlign: 'center',
    },
    inputs: {
        marginHorizontal: 44,
    },
    button: {
        backgroundColor: colors.primary,
        borderRadius: 15,
        marginTop: 22,
    },
});