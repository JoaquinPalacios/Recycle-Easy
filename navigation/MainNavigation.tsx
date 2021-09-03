import { Platform, StyleSheet } from "react-native";

import CalendarComponent from "../components/Calendar/Calendar";
import CompostComponent from "../components/Compost/Compost";
import EcoNoticias from "../components/EcoNoticias/EcoNoticias";
import { FontAwesome } from '@expo/vector-icons';
import HomeComponent from "../screens/home/home";
import { Ionicons } from '@expo/vector-icons';
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
            options={{headerStyle: {
                backgroundColor: '#43664A'
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
                fontSize: 27,
                fontWeight: '600',
            }}} />
            <Stack.Screen 
            name='Tips' 
            component={TipsComponent} 
            options={{headerStyle: {
                backgroundColor: '#43664A'
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
                fontSize: 27,
                fontWeight: '600',
            }}} />
        </Stack.Navigator>
    </>
);
const MainNAvigationComponent: React.FC<MainNAvigationComponentProps> = () => {
    return (
        <>
            <NavigationContainer>
                <Tab.Navigator
                screenOptions={{tabBarStyle: {backgroundColor: '#86CC94', height: 83, paddingBottom: 15, paddingTop: 15},
                tabBarActiveTintColor: 'white',
                tabBarInactiveTintColor: 'black',
                }}>
                    <Tab.Screen 
                    name='Home' 
                    component={stackNavigator} 
                    options={{
                        headerShown: false,
                        tabBarIcon: ({color}) => (<Ionicons name={Platform.OS === "ios" ? `ios-home` : "md-home"} size={32} color={color} />),
                    }} />
                    <Tab.Screen 
                    name='Recycle' 
                    component={RecycleComponent} 
                    options={{
                        headerTitle: 'What would you like to recycle?', 
                        headerTitleAlign: 'center',
                        tabBarIcon: ({color}) => (<FontAwesome name='recycle' size={32} color={color} />),
                    }} />
                    <Tab.Screen 
                    name='Calendar' 
                    component={CalendarComponent}
                    options={{
                        tabBarIcon: ({color}) => (<Ionicons name={Platform.OS === "ios" ? `ios-calendar-outline` : "md-calendar-outline"} size={32} color={color} />),
                    }} />
                    <Tab.Screen 
                    name='Compost' 
                    component={CompostComponent} 
                    options={{
                        tabBarIcon: ({color}) => (<Ionicons name={Platform.OS === "ios" ? `ios-leaf-outline` : "md-leaf-outline"} size={32} color={color} />),
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
    // imageTips: {
    //     width: 414,
    //     height: 315,
    // },
});

// export const imageTips = () => (
//     <>
//         <View>
//             <Image style={styles.imageTips} source={require('../../assets/images/tips.png')}/>
//         </View>
//     </>
// );