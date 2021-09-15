import AuthScreenWrapperComponent from '../../components/authScreenWrapper';
import React from 'react';
import { Text } from 'react-native';

interface LoginScreenComponentProps {
    
}
 
const LoginScreenComponent: React.FC<LoginScreenComponentProps> = () => {
    return (
        <>
            <AuthScreenWrapperComponent
            title="INGRESAR"
            message="¿Aún no tienes cuenta?"
            buttonText="Ir al registro"
            buttonPath="Register">
                <Text>Formulario</Text>
            </AuthScreenWrapperComponent>
        </>
    );
}
 
export default LoginScreenComponent;