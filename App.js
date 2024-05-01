
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import { Provider } from 'react-redux';
import store from './Redux/Store';
import MyStackScreens from './Screen/StackScreen.js/MyStackScreens';

const App = () => {
  return (
    <Provider store={store}>
      <SafeAreaProvider>
        <SafeAreaView style={{ flex: 1 }}>
          <NavigationContainer>
            <MyStackScreens />
          </NavigationContainer>
        </SafeAreaView>
      </SafeAreaProvider >
    </Provider>
  );
};

export default App;