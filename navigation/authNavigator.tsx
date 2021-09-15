import LoginScreenComponent from "../screens/user/loginScreen";
import RegisterScreenComponent from "../screens/user/registerScreen";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

interface AuthNavigatorComponentProps {
    
}

const Stack = createNativeStackNavigator();

const AuthNavigatorComponent: React.FC<AuthNavigatorComponentProps> = () => {
    return (
        <>
            <Stack.Navigator
            initialRouteName="Login"
            screenOptions={{ headerShown: false }}>
                <Stack.Screen name="Login" component={LoginScreenComponent} />
                <Stack.Screen name="Register" component={RegisterScreenComponent} />
            </Stack.Navigator>
        </>
    );
}
 
export default AuthNavigatorComponent;