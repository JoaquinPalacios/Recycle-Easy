import 'react-native-gesture-handler';

import React, { useState } from 'react';
import { SafeAreaView, StyleSheet, View } from 'react-native';

import AppLoading from 'expo-app-loading';
import MainNAvigationComponent from './navigation/MainNavigation';
import { StatusBar } from 'expo-status-bar';
import { useFonts } from 'expo-font';

export interface AppProps {
  
}
 
const App: React.FC<AppProps> = () => {
  const [dataLoaded] = useFonts({
    'SFProDisplay-Regular': require('./assets/fonts/SFProDisplay-Regular.ttf'),
    'SFProDisplay-Bold': require('./assets/fonts/SFProDisplay-Bold.ttf'),
  })

  if (!dataLoaded) {
    return <AppLoading />
  }

  return (
    <>
        <SafeAreaView style={styles.container}>
          <View style={styles.viewNavigation}>
            <MainNAvigationComponent />
            <StatusBar style="auto" />
            </View>  
        </SafeAreaView>
    </>
  );
}
 
export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  viewNavigation: {
    flex: 1,
    width: '100%',
  },
});
