import { Platform, StyleSheet } from "react-native";

import CalendarComponent from "../components/Calendar/Calendar";
import CompostComponent from "../components/Compost/Compost";
import EcoNoticias from "../components/EcoNoticias/EcoNoticias";
import { FontAwesome } from '@expo/vector-icons';
import HomeComponent from "../screens/homeScreen/homeScreen";
import { Ionicons } from '@expo/vector-icons';
import { NavigationContainer } from "@react-navigation/native";
import React from 'react';
import RecycleComponent from "../screens/RecycleScreen/RecycleScreen";
import SingleItemScreenComponent from "../screens/singlePlasticScreen/singlePlasticScreen";
import TipsComponent from "../components/tips/Tips";
import colors from "../constants/colors";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import plasticsScreenComponent from "../screens/plasticsScreen/plasticsScreen";

export interface MainNAvigationComponentProps {
    
}
const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

export const homeStackNavigator = () => (
    <>
        <Stack.Navigator initialRouteName='Home'>
            <Stack.Screen 
            name='Home' 
            component={HomeComponent}
            options={{title: 'Hello User', 
            headerTitleAlign: 'center',
            headerTitleStyle: {
                fontSize: 27,
                fontWeight: '600',
            }}} />
            <Stack.Screen 
            name='Eco News' 
            component={EcoNoticias}
            options={{
                title: 'Eco News',
                headerStyle: {
                backgroundColor: '#43664A',
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
                fontSize: 27,
                fontWeight: '600',
            }}} />
            <Stack.Screen 
            name='Tips' 
            component={TipsComponent} 
            options={{
                headerTransparent: true,
                headerTintColor: "#fff",
            }}
              />                       
        </Stack.Navigator>
    </>
);


export const recycleStackNavigator = () => (
    <>
        <Stack.Navigator initialRouteName='Recycle'>
            <Stack.Screen
            name='Recycle'
            component={RecycleComponent}
            options={{
                title: 'What would you like to recycle?',
                headerTitleAlign: 'center',
            }}
            />
            <Stack.Screen
            name='Types of plastic' 
            component={plasticsScreenComponent}
            options={({ route }: {route:any}) => (
                {title: route.params.name,}
                )} />
            <Stack.Screen 
            name='Plastic description' 
            component={SingleItemScreenComponent}
            options={{
                headerTransparent: true,
                headerTintColor: "#1e1e1e",
                }} /> 
        </Stack.Navigator>
    </>
);
const MainNAvigationComponent: React.FC<MainNAvigationComponentProps> = () => {
    return (
        <>
            <NavigationContainer>
                <Tab.Navigator
                screenOptions={{tabBarStyle: {
                    backgroundColor: colors.primary,
                    height: 83,
                    paddingBottom: 15,
                    paddingTop: 15
                },
                tabBarActiveTintColor: 'white',
                tabBarInactiveTintColor: 'black',
                }}>
                    <Tab.Screen 
                    name='Home-Tab' 
                    component={homeStackNavigator} 
                    options={{
                        headerShown: false,
                        tabBarIcon: ({color}) => (<Ionicons 
                            name={Platform.OS === "ios" ? `ios-home` : "md-home"} 
                            size={32} 
                            color={color} />),
                    }} />
                    <Tab.Screen 
                    name='Recycle-Tab' 
                    component={recycleStackNavigator} 
                    options={{
                        headerShown: false,
                        headerTitle: 'What would you like to recycle?', 
                        headerTitleAlign: 'center',
                        tabBarIcon: ({color}) => (<FontAwesome 
                            name='recycle' 
                            size={32} 
                            color={color} />),
                    }} />
                    <Tab.Screen 
                    name='Calendar' 
                    component={CalendarComponent}
                    options={{
                        tabBarIcon: ({color}) => (<Ionicons 
                            name={Platform.OS === "ios" ? `ios-calendar-outline` : "md-calendar-outline"} 
                            size={32} 
                            color={color} />),
                    }} />
                    <Tab.Screen 
                    name='Compost' 
                    component={CompostComponent} 
                    options={{
                        tabBarIcon: ({color}) => (<Ionicons 
                            name={Platform.OS === "ios" ? `ios-leaf-outline` : "md-leaf-outline"} 
                            size={32} 
                            color={color} />),
                    }} />

                </Tab.Navigator>
            </NavigationContainer>
        </>
    );
}
 
export default MainNAvigationComponent;

const styles = StyleSheet.create({
    image: {
        flex: 1,
        width: '100%',
        height: 315,
    },
});
