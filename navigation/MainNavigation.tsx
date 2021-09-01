// import EcoNoticias from "../components/EcoNoticias/EcoNoticias";

import HomeComponent from "../screens/home/home";
import { NavigationContainer } from "@react-navigation/native";
import React from 'react';
import TipsComponent from "../components/tips/Tips";
import { createStackNavigator } from "@react-navigation/stack";

export interface MainNAvigationComponentProps {
    
}
const Stack = createStackNavigator();

const MainNAvigationComponent: React.FC<MainNAvigationComponentProps> = () => {
    return (
        <>
            <NavigationContainer>
                <Stack.Navigator initialRouteName='Home'>
                    <Stack.Screen name='Home' component={HomeComponent} />
                    {/* <Stack.Screen name='Eco-Noticias' component={EcoNoticias} /> */}
                    <Stack.Screen name='Tips' component={TipsComponent} />
                </Stack.Navigator>
            </NavigationContainer>
        </>
    );
}
 
export default MainNAvigationComponent;