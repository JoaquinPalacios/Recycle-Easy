import { Text, View } from "react-native";

import React from "react";

export interface TipsComponentProps {
    
}
 
const TipsComponent: React.FC<TipsComponentProps> = () => {
    return (
        <>
            <View>
                <Text>Soy el componente Tips</Text>
            </View>
        </>
    );
}
 
export default TipsComponent;