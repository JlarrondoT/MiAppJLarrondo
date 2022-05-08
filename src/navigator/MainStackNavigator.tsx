import React from 'react';
import { Platform } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { COLORS } from '../constants/colors';
import Login from '../screens/Login';
import Home from '../screens/Home';
import Book from '../screens/Book';

const mainStack = createNativeStackNavigator();

const MainStackNavigator = () => {
  return (
    <mainStack.Navigator initialRouteName="Login" screenOptions={{ headerShown: false }}>
      <mainStack.Screen name="Login" component={Login} />
      <mainStack.Screen name="Home" component={Home} />
      <mainStack.Screen name="Book" component={Book} />
    </mainStack.Navigator>
  );
};

export default MainStackNavigator;
