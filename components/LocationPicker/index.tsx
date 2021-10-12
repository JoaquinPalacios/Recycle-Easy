import * as Location from 'expo-location';

import { Alert, Button, StyleSheet, View } from 'react-native';
import React, { useState } from "react";

import MapPreviewComponent from '../MapPreview';
import colors from '../../constants/colors';

// import { useNavigation } from '@react-navigation/native';

interface LocationPickerComponentProps {
    
}
 
const LocationPickerComponent: React.FC<LocationPickerComponentProps> = ( props ) => {
    // const navigation = useNavigation
    // const [isFetching, setIsFetching] = useState<boolean>(false);
    // const [location, setLocation] = useState<any>(null);
    const [pickedLocation, setPickedLocation] = useState<any>();

    const verifyPermissions = async () => {
        const { status } = await Location.requestForegroundPermissionsAsync();

        if (status !== 'granted') {            
            Alert.alert(
                'Permisssion denied',
                'It needs to be given permission of the location to be used on the app.',
                [{ text: 'Ok' }],
            )
            return false;
        }
        return true;
    }

    const handleGeoLocation = async () => {
        const isLocationOk = await verifyPermissions();
        if (!isLocationOk) return;

        const location = await Location.getCurrentPositionAsync({
            timeInterval: 5000,
            
            // timeout: 5000,
        });
        console.log('location inside handleGeoLocation on LocationPickerComponent', location)

        setPickedLocation({
            lat: location.coords.latitude,
            lng: location.coords.longitude,
        });
        // props.onLocation({
        //     lat: location.coords.latitude,
        //     lng: location.coords.longitude,
        // });
    }

    // useEffect(() => {
    //     (async () => {
    //         let { status } = await Location.requestForegroundPermissionsAsync();
    //         if (status !== 'granted') {
    //             Alert.alert(
    //                 'Permisssion denied',
    //                 'It needs to be given permission to the app',
    //                 [{ text: 'Ok' }]
    //             );
    //             return;
    //         }
    //         let location = await Location.getCurrentPositionAsync({});
    //         setLocation(location);
    //     })();
    // }, []);

    // const getLocationHandler = async () => {
    //     if (!location) {
    //         return;
    //     }
    //     try {
    //         setIsFetching(true);
    //         const location = await Location.getCurrentPositionAsync({
    //             timeout: 5000,
    //         });
    //         setPickedLocation({
    //             lat: location.coords.latitude,
    //             lng: location.coords.longitude
    //         });
    //     } catch (err) {
    //         Alert.alert(
    //             'Could not get location',
    //             'Please try again.',
    //             [{ text: 'Ok' }]
    //         );
    //     }
    //     setIsFetching(false);
    // }

    return (
        <>
            <View style={styles.locationPicker}>
                <MapPreviewComponent location={pickedLocation} style={styles.mapView} />
                <Button title='Get location' color={colors.primary} onPress={handleGeoLocation} />
            </View>
        </>
    );
}
 
export default LocationPickerComponent;

const styles = StyleSheet.create({
    locationPicker: {
        marginVertical: 20,
        borderRadius: 50,
    },
    mapView: {
        width: '100%',
        height: 150,
        borderColor: '#ccc',
        borderWidth: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    buttonLocation: {
        borderRadius: 50,
    }
});