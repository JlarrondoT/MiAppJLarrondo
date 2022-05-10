import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from '../screens/Login';
import Home from '../screens/Home';
import Book from '../screens/Book';

const mainStack = createNativeStackNavigator();

const MainStackNavigator = () => {
  return (
    <mainStack.Navigator initialRouteName="Login" screenOptions={{ headerShown: false }}>
      <mainStack.Screen name="Login" component={Login} />
      <mainStack.Screen name="Home" component={Home} />
      <mainStack.Screen name="Book" component={Book} options={{ title: 'Libro', headerShown: true }} />
    </mainStack.Navigator>
  );
};

export default MainStackNavigator;
