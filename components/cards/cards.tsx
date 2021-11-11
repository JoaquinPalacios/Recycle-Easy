import { StyleSheet, View } from "react-native"

import React from "react";
import colors from "../../constants/colors";

export interface CardsComponentProps {
    
}
 
const CardsComponent: React.FC<CardsComponentProps> = ({children}, style) => {
    return (
            <View style={{ ...styles.cardContainer, ...style }}>
                {children}
            </View>
    );
}

const styles = StyleSheet.create({
    cardContainer: {
      borderRadius: 10,
      backgroundColor: colors.primary,
      color: '#fff',
      marginVertical: 11,
      padding: 16.5,
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