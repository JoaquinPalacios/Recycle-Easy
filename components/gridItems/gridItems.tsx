import { ImageBackground, StyleSheet, Text, TouchableOpacity, View } from "react-native"

import React from "react";
import { arrayData } from "../../data/Categories";

export interface GridItemsComponentProps {
    item: arrayData
    onSelected: any
}
 
const GridItemsComponent: React.FC<GridItemsComponentProps> = ({ item, onSelected }) => {
    return (
        <>
            <View style={styles.gridItem}>
                <ImageBackground source={item.imgBg} style={styles.image}>
                    <TouchableOpacity  
                    style={styles.container}
                    onPress={() => onSelected(item)}>
                        <View>
                            <Text style={styles.title}>{item.title}</Text>
                        </View>
                    </TouchableOpacity>
                </ImageBackground>
            </View>
        </>
    );
}

const styles = StyleSheet.create({
    gridItem: {
      flex: 1,
      borderRadius: 6,
      margin: 15,
      height: 110,
    },
    image: {
        flex: 1,
        justifyContent: "center"
    },
    container: {
      flex: 1,
      borderRadius: 1,
      shadowColor: 'black',
      shadowOpacity: 0.25,
      shadowRadius: 6,
      elevation: 1,
      justifyContent: 'center',
      alignItems: 'center',
      padding: 8,
    },
    title: {
      color: 'white',
      fontSize: 22,
      fontWeight: '700',
      textAlign: 'center',
    }
});
export default GridItemsComponent;