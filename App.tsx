import 'react-native-gesture-handler';

import { SafeAreaView, StyleSheet, View } from 'react-native';

import AppLoading from 'expo-app-loading';
import MainNavigationComponent from './navigation/mainNavigation';
import { Provider } from 'react-redux';
import React from 'react';
import { StatusBar } from 'expo-status-bar';
// import { init } from './db';
import store from './store';
import { useFonts } from 'expo-font';

// init()
// .then(() => console.log('Database initialized'))
// .catch(err => {
//   console.log('Database failed to connect');
//   console.log(err.message);
// })

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
        <Provider store={store}>
            <SafeAreaView style={styles.container}>
                  <View style={styles.viewNavigation}>
                    <MainNavigationComponent />
                    <StatusBar style="auto" backgroundColor={"transparent"} translucent={true} />
                    </View>  
                </SafeAreaView>
        </Provider>        
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
