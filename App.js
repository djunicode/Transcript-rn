import 'react-native-gesture-handler';
import React, { Component } from 'react';
import signup from './App/Screens/signup.js';
import { Provider as PaperProvider } from 'react-native-paper';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

export default function App(){
  return (
    <PaperProvider>
      <NavigationContainer>
        <Stack.Navigator screenOptions={{headerShown:false}} initialRouteName="SignUp">
          <Stack.Screen name="SignUp" component={signup} />
        </Stack.Navigator>
      </NavigationContainer>
    </PaperProvider>
  );
}