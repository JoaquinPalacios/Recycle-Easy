import { Alert, StyleSheet } from "react-native";
import { FORM_INPUT_UPDATE, formReducer } from "./formReducer";
import React, { useCallback, useReducer } from "react";

import AuthScreenWrapperComponent from "../../components/authScreenWrapper";
import { Button } from "react-native-elements";
import InputComponent from "../../components/Input";
import colors from "../../constants/colors";
import { signup } from "../../store/actions/auth.action";
import { useDispatch } from "react-redux";

interface RegisterScreenComponentProps {
    
}

const RegisterScreenComponent: React.FC<RegisterScreenComponentProps> = () => {
    const dispatch = useDispatch();
    const [formState, formDispatch] = useReducer(formReducer, {
        inputValues: {
            name: '',
            email: '',
            password: '',
        },
        inputValidities: {
            name: false,
            email: false,
            password: false,
        },
        formIsValid: false,
    });

    const handleSignUp = () => {
        if (formState.formIsValid) {
            console.log('handleSingUp', formState.formIsValid)
            dispatch(signup(
                formState.inputValues.name,
                formState.inputValues.email,
                formState.inputValues.password))
        } else {
            Alert.alert(
                'Invalid form',
                'Please insert valid email and password',
                [{ text: 'Ok' }]
            );
        }
    }

    const onInputChangeHandler = useCallback((inputIdentifier, inputValue, inputValidity): void => {
        formDispatch({
          type: FORM_INPUT_UPDATE,
          value: inputValue,
          isValid: inputValidity,
          input: inputIdentifier,
        });
      }, [formDispatch]);

    return (
        <>
            <AuthScreenWrapperComponent
            title="SIGN UP"
            message="Already registered?"
            buttonText="Log in"
            buttonPath="Login">
                <InputComponent
                  id="name"
                  label="Name"
                  errorText="Enter your name"
                  required
                  onlyLetters
                  onInputChange={onInputChangeHandler}
                />
                <InputComponent
                  id="email"
                  label="Email"
                  keyboardType="email-address"
                  autoCapitalize="none"
                  errorText="Please insert valid email"
                  required
                  email
                  onInputChange={onInputChangeHandler}
                />
                <InputComponent
                  id="password"
                  label="Password"
                  secureTextEntry
                  autoCapitalize="none"
                  errorText="Password must be a minimum of 6 characters"
                  required
                  minLength={6}
                  onInputChange={onInputChangeHandler}
                />
                <Button
                  title="SIGN UP"
                  onPress={handleSignUp}
                  buttonStyle={styles.button}
                />
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

export default RegisterScreenComponent;