import AuthNavigatorComponent from './authNavigator';
import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import TabNavigationComponent from './tabNavigation';
import { useSelector } from 'react-redux';

interface MainNavigationComponentProps {
    
}
 
const MainNavigationComponent: React.FC<MainNavigationComponentProps> = () => {
    const userId = useSelector((state: any) => state.auth.userId)

    return (
        <>
            <NavigationContainer>
                {userId
                    ? <TabNavigationComponent />
                    : <AuthNavigatorComponent />}
                    {/* <TabNavigationComponent /> */}
            </NavigationContainer>
        </>
    );
}
 
export default MainNavigationComponent;