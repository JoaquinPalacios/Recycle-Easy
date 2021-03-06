import { Platform, StyleSheet } from "react-native";

import CalendarComponent from "../components/Calendar/Calendar";
import CompostComponent from "../components/Compost/Compost";
import CompostGuideComponent from "../components/CompostGuide";
import EcoNoticias from "../components/EcoNoticias/EcoNoticias";
import { FontAwesome } from '@expo/vector-icons';
import HomeComponent from "../screens/homeScreen/homeScreen";
import { Ionicons } from '@expo/vector-icons';
import React from 'react';
import RecycleComponent from "../screens/RecycleScreen/RecycleScreen";
import SingleItemScreenComponent from "../screens/singlePlasticScreen/singlePlasticScreen";
import TipsItemsScreenComponent from "../screens/TipsItemsScreen";
import TipsScreen from "../screens/TipsScreen";
import colors from "../constants/colors";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import plasticsScreenComponent from "../screens/plasticsScreen/plasticsScreen";
import { useSelector } from "react-redux";

export interface TabNavigationComponentProps {
    
}
const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

export const homeStackNavigator = () => {
    const user = useSelector((state: any) => state.auth.data);
    return (
    <>
        <Stack.Navigator initialRouteName='Home'>
            <Stack.Screen 
            name='Home' 
            component={HomeComponent}
            options={{title: 'Home', 
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
            component={tipsStackNavigator} 
            options={{
                headerShown: false,
                headerTransparent: true,
                headerTintColor: "#fff",
                headerBackTitle: '',
                headerTitle: '',
            }}
              />                       
        </Stack.Navigator>
    </>
)};

export const tipsStackNavigator = () => (
    <>
        <Stack.Navigator initialRouteName='Tips'>
            <Stack.Screen
            name='Tips-Stack'
            component={TipsScreen}
            options={{
                headerShown: false,
                headerTransparent: true,
                headerTintColor: '#fff',
                headerBackTitleVisible: false,
                headerBackTitle: '',
                headerTitle: '',
                headerBlurEffect: 'systemThickMaterial',
            }}
            />
            <Stack.Screen
            name='Tips-types' 
            component={TipsItemsScreenComponent}
            options={({ route }: {route:any}) => (
                {title: route.params.name,}
                )} />            
        </Stack.Navigator>
    </>
);

export const recycleStackNavigator = () => (
    <>
        <Stack.Navigator initialRouteName='Recycle'>
            <Stack.Screen
            name='Recycle-Stack'
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
                headerTintColor: '#fff',
                headerBackTitleVisible: false,
                headerBackTitle: '',
                headerTitle: '',
                headerBlurEffect: 'systemThickMaterial',
                }} /> 
        </Stack.Navigator>
    </>
);

export const compostStackNavigator = () => (
    <>
        <Stack.Navigator initialRouteName='Compost'>
            <Stack.Screen
            name='Compost-Stack'
            component={CompostComponent}
            options={{
                headerShown: false,
                headerTransparent: true,
                headerTintColor: '#fff',
                headerBackTitleVisible: false,
                headerBackTitle: '',
                headerTitle: '',
                headerBlurEffect: 'systemThickMaterial',
            }}
            />
            <Stack.Screen
            name='Compost-guide' 
            component={CompostGuideComponent}
            options={{
                headerTransparent: true,
                headerTintColor: '#fff',
                headerBackTitleVisible: false,
                headerBackTitle: '',
                headerTitle: '',
                headerBlurEffect: 'systemThickMaterial',
            }} />            
        </Stack.Navigator>
    </>
);

const TabNavigationComponent: React.FC<TabNavigationComponentProps> = () => {
    return (
        <>
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
                name='Recycle' 
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
                component={compostStackNavigator} 
                options={{
                    tabBarIcon: ({color}) => (<Ionicons 
                        name={Platform.OS === "ios" ? `ios-leaf-outline` : "md-leaf-outline"} 
                        size={32} 
                        color={color} />),
                        headerShown: false,
                }} />
            </Tab.Navigator>
        </>
    );
}
 
export default TabNavigationComponent;

const styles = StyleSheet.create({
    image: {
        flex: 1,
        width: '100%',
        height: 315,
    },
});