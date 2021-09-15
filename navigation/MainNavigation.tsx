import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import TabNavigationComponent from './tabNavigation';

interface MainNavigationComponentProps {
    
}
 
const MainNavigationComponent: React.FC<MainNavigationComponentProps> = () => {
    return (
        <>
            <NavigationContainer>
                <TabNavigationComponent />
            </NavigationContainer>
        </>
    );
}
 
export default MainNavigationComponent;