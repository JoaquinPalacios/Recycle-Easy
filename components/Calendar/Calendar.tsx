import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native"

import { Button } from "react-native-elements";
import InputComponent from "../Input";
import LocationPickerComponent from "../LocationPicker";
import { ScrollView } from "react-native-gesture-handler";
import colors from "../../constants/colors";
import { useDispatch } from "react-redux";

export interface CalendarComponentProps {
    
}
 
const CalendarComponent: React.FC<CalendarComponentProps> = () => {
    const dispatch = useDispatch();
    const [title, setTitle] = useState<any>('');
    const [location, setLocation] = useState<any>();

    const handleTitleChange = (text: any) => setTitle(text);

    const handlePickLocation = (loc:any) => {setLocation(loc)}
    return (
        <>
        <ScrollView>
            <View style={styles.container}>
                <Text style={styles.text}>Find out when your bin is collected</Text>
                <View style={styles.inputs}>
                    <InputComponent
                    id='State'
                    label='State'
                    autoCapitalize='characters'
                    required
                    errorText='Please insert valid State'
                    onInputChange={handleTitleChange}
                    />                    
                    {/* <LocationPickerComponent onLocation={handlePickLocation} /> */}
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
                    <LocationPickerComponent />
                    <Button
                    title='Submit'
                    onPress={() => (console.log('submit de calendar'))}
                    buttonStyle={styles.button}
                    />
                </View>
            </View>
            </ScrollView>
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
        paddingBottom: 44,
        paddingTop: 22,
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