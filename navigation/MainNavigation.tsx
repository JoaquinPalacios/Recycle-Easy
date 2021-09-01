import CalendarComponent from "../components/Calendar/Calendar";
import CompostComponent from "../components/Compost/Compost";
import EcoNoticias from "../components/EcoNoticias/EcoNoticias";
import HomeComponent from "../screens/home/home";
import { NavigationContainer } from "@react-navigation/native";
import React from 'react';
import RecycleComponent from "../components/Recycle/Recycle";
import TipsComponent from "../components/tips/Tips";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from "@react-navigation/native-stack";

export interface MainNAvigationComponentProps {
    
}
const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

export const stackNavigator = () => (
    <>
        <Stack.Navigator initialRouteName='Home'>
            <Stack.Screen name='Home' component={HomeComponent} />
            <Stack.Screen name='Eco-Noticias' component={EcoNoticias} />
            <Stack.Screen name='Tips' component={TipsComponent} />
        </Stack.Navigator>
    </>
);
const MainNAvigationComponent: React.FC<MainNAvigationComponentProps> = () => {
    return (
        <>
            <NavigationContainer>
                <Tab.Navigator initialRouteName='Home' screenOptions={{ headerShown: false}}>
                    <Tab.Screen name='Home' component={stackNavigator} />
                    <Tab.Screen name='Recycle' component={RecycleComponent} />
                    <Tab.Screen name='Calendar' component={CalendarComponent} />
                    <Tab.Screen name='Compost' component={CompostComponent} />

                </Tab.Navigator>
            </NavigationContainer>
        </>
    );
}
 
export default MainNAvigationComponent;