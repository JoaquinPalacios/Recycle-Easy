import { Alert, StyleSheet } from 'react-native';
import { FORM_INPUT_UPDATE, formReducer } from './formReducer';
import React, { useCallback, useReducer } from 'react';

import AuthScreenWrapperComponent from '../../components/authScreenWrapper';
import { Button } from 'react-native-elements';
import InputComponent from '../../components/Input';
import colors from '../../constants/colors';
import { login } from '../../store/actions/auth.action';
import { useDispatch } from 'react-redux';

interface LoginScreenComponentProps {
    
}
 
const LoginScreenComponent: React.FC<LoginScreenComponentProps> = () => {
    const dispatch = useDispatch();
    const [formState, formDispatch] = useReducer(formReducer, {
        inputValues: {
            email: '',
            password: '',
        },
        inputValidities: {
            email: false,
            password: false,
        },
        formIsValid: false,
    });

    const handleLogIn = () => {
        if (formState.formIsValid) {
            console.log('hanldeLogin', formState.formIsValid)
            dispatch(login(formState.inputValues.email, formState.inputValues.password))
        } else {
            Alert.alert(
                'Invalid form',
                'Please insert valid email and user',
                [{ text: 'Ok'}]
            );
        }
    }

    const onInputChangeHandler = useCallback((inputIdentifier, inputValue, inputValidity) => {
        formDispatch({
            type: FORM_INPUT_UPDATE,
            value: inputValue,
            isValid: inputValidity,
            input: inputIdentifier,
        });
    }, [formDispatch])
    return (
        <>
            <AuthScreenWrapperComponent
            title="Login"
            message="Create an account"
            buttonText="Sign up"
            buttonPath="Register">
                <InputComponent
                  id='email'
                  label='Email'
                  keyboardType='email-address'
                  autoCapitalize='none'
                  errorText='Please insert a valid email address'
                  required
                  email
                  onInputChange={onInputChangeHandler}/>
                <InputComponent
                  id='password'
                  label='Password'
                  secureTextEntry
                  autoCapitalize='none'
                  errorText='Insert password'
                  required
                  onInputChange={onInputChangeHandler} />
                <Button
                  title='Log in'
                  onPress={handleLogIn}
                  buttonStyle={styles.button} />
            </AuthScreenWrapperComponent>
        </>
    );
}

const styles = StyleSheet.create({
    button: {
      backgroundColor: colors.primary,
      marginVertical: 20,
    },
});

export default LoginScreenComponent;