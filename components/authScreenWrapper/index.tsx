import { KeyboardAvoidingView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

import React from 'react';
import colors from '../../constants/colors';
import { useNavigation } from '@react-navigation/native';

interface AuthScreenWrapperComponentProps {
    title: string
    message: string | any
    buttonText: any
    buttonPath: any
}
 
const AuthScreenWrapperComponent: React.FC<AuthScreenWrapperComponentProps> = ({ children, title, message, buttonText, buttonPath }) => {
    const navigation = useNavigation();
    return (
        <>
            <KeyboardAvoidingView>
                <View style={styles.container}>
                    <Text style={styles.title}>{title}</Text>
                    {children}
                    <View style={styles.prompt}>
                        <Text style={styles.promptMessage}>{message}</Text>
                        <TouchableOpacity onPress={() => navigation.navigate(buttonPath)}>
                            <Text style={styles.promptButton}>{buttonText}</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </KeyboardAvoidingView>
        </>
    );
}

const styles = StyleSheet.create({
    screen: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
    title: {
      fontSize: 24,
      fontFamily: 'OpenSansBold',
      marginBottom: 18,
      textAlign: 'center',
    },
    container: {
      width: '80%',
      maxWidth: 400,
      padding: 12,
      margin: 12,
      borderColor: '#ccc',
      borderWidth: 1,
      borderRadius: 10,
    },
    prompt: {
      alignItems: 'center',
    },
    promptMessage: {
      fontSize: 16,
      fontFamily: 'OpenSans',
      color: '#333',
    },
    promptButton: {
      fontSize: 16,
      fontFamily: 'OpenSansBold',
      color: colors.primary,
    },
  });

export default AuthScreenWrapperComponent;