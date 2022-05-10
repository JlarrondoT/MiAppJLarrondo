import React from 'react';
import { Provider } from 'react-redux';
import MainStackNavigator from './navigator/MainStackNavigator';
import store from './store/store';
import { NavigationContainer } from '@react-navigation/native';
import { LogBox } from 'react-native';

const App = () => {
  LogBox.ignoreLogs(['new NativeEventEmitter']); // ignoré estos logs, ya que eran molesto y aparecían con el uso de la librería react-native-sound-player, refer: https://stackoverflow.com/a/69649068
  return (
    <Provider store={store}>
      <NavigationContainer>
        <MainStackNavigator />
      </NavigationContainer>
    </Provider>
  );
};

export default App;
