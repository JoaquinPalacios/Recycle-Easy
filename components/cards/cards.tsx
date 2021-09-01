import { StyleSheet, Text, View } from "react-native"

import EcoNoticias from "../EcoNoticias/EcoNoticias";
import React from "react";
import colors from "../../constants/colors";

export interface CardsComponentProps {
    // buttonPressed: boolean
}
 
const CardsComponent: React.FC<CardsComponentProps> = ({children}, style) => {
    return (
        <>
            <View style={{ ...styles.cardContainer, ...style }}>
                {children}
            </View>
        </>
    );
}

const styles = StyleSheet.create({
    cardContainer: {
      borderRadius: 10,
      backgroundColor: colors.primary,
      color: '#fff',
      marginVertical: 10,
      padding: 20,
      shadowColor: 'black',
      shadowOffset: {
        width: 0,
        height: 2,
      },
      shadowRadius: 6,
      shadowOpacity: 0.25,
      elevation: 5,
      width: 300,
    },
  });

export default CardsComponent;