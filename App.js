import 'react-native-gesture-handler';
import React, { Component } from 'react';
import signup_student from './App/Screens/signup_student.js';
import { Provider as PaperProvider } from 'react-native-paper';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

export default function App(){
  return (
    <PaperProvider>
      <NavigationContainer>
        <Stack.Navigator screenOptions={{headerShown:false}} initialRouteName="SignUpStudent">
          <Stack.Screen name="SignUpStudent" component={signup_student} />
        </Stack.Navigator>
      </NavigationContainer>
    </PaperProvider>
  );
}