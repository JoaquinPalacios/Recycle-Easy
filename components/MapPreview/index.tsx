import { Image, StyleSheet, View } from "react-native";

import { MAP_API_KEY } from "../../constants/dataBase";
import React from 'react';

interface MapPreviewComponentProps {
    location?: any
    style: any
}
 
const MapPreviewComponent: React.FC<MapPreviewComponentProps> = (props) => {
    const mapPreviewUrl = props.location 
    ? `https://maps.googleapis.com/maps/api/staticmap?
    center=${props.location.lat},${props.location.lng}
    &zoom=4
    &size=600x300
    &maptype=roadmap
    &markers=color:blue%7Clabel:S%7C${props.location.lat},${props.location.lng}
    &markers=color:green%7Clabel:G%7C40.711614,-74.012318
    &markers=color:red%7Clabel:C%7C40.718217,-73.998284
    &key=${MAP_API_KEY}`
    : '';
    return (
        <>
            <View style={{ ...styles.mapPreview, ...props.style }}>
                {props.location
                ? <Image style={styles.mapImage} source={{ uri: mapPreviewUrl}} />
            : (props.children)}
            </View>
        </>
    );
}

const styles = StyleSheet.create({
    mapPreview: {
      justifyContent: 'center',
      alignItems: 'center',
    },
    mapImage: {
      width: '100%',
      height: '100%',
    }
});
 
export default MapPreviewComponent;