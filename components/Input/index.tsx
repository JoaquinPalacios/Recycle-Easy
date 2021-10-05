import React, { useEffect, useReducer } from "react";
import { StyleSheet, Text, TextInput, View } from "react-native";

interface InputComponentProps {    
    id: string;
    required?: boolean;
    email?: boolean;
    minLength?: number;
    maxLength?: number;
    label: string;
    keyboardType?: any;
    autoCapitalize?: any;
    secureTextEntry?: boolean;
    errorText: string;
    onlyLetters?: string | boolean;
    onInputChange: (id: string, value: string, isValid: boolean) => void;
}
const INPUT_CHANGE = 'INPUT_CHANGE';
const INPUT_BLUR = 'INPUT_BLUR';

interface State {
  value: string;
  isValid: boolean;
  touched: boolean;
}

const inputReducer = (state: State, action: any): State => {
    switch(action.type) {
      case INPUT_CHANGE:
        return {
          ...state,
          value: action.value,
          isValid: action.isValid,
        };
      case INPUT_BLUR:
        return {
          ...state,
          touched: true,
        };
      default:
        return state;
    }
};

const InputComponent: React.FC<InputComponentProps> = (props) => {
    const [inputState, inputDispatch] = useReducer(inputReducer, {
        value: '',
        isValid: false,
        touched: false,
    });

    const { onInputChange, id } = props;

    useEffect(() => {
        return onInputChange(id, inputState.value, inputState.isValid);
    }, [onInputChange, id, inputState])

    const handleChangeText = (text: string) => {
      const emailRegex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      const letterRegex = /^[a-zA-Z\s']+$/;
      let isValid: boolean = true;

      if (props.required && text.trim().length === 0) isValid = false;
      if (props.email && !emailRegex.test(text.toLowerCase())) isValid = false;
      if (props.minLength && text.length < props.minLength) isValid = false;
      if (props.maxLength && text.length > props.maxLength) isValid = false;
      if (props.onlyLetters && !letterRegex.test(text)) isValid = false;

      inputDispatch({
        type: INPUT_CHANGE,
        value: text,
        isValid: isValid,
      });
    }    

    const handleBlur = () => inputDispatch({ type: INPUT_BLUR });

    return (
        <>
            <View style={styles.formControl}>
                <Text style={styles.label}>{props.label}</Text>
                <TextInput
                  {...props}
                  style={styles.input}
                  value={inputState.value}
                  onChangeText={handleChangeText}
                  onBlur={handleBlur}
                />
                {!inputState.isValid && inputState.touched && (
                  <View>
                      <Text style={styles.errorText}>{props.errorText}</Text>
                  </View>
                )}
            </View>
        </>
    );
}

const styles = StyleSheet.create({
    formControl: {
      width: '100%',
    },
    label: {
      // fontFamily: 'OpenSansBold',
      marginVertical: 8,
    },
    input: {
      paddingHorizontal: 2,
      paddingVertical: 5,
      borderBottomColor: '#ccc',
      borderBottomWidth: 1,
    },
    errorText: {
      marginVertical: 5,
      color: '#cc7755'
    }
});
 
export default InputComponent;