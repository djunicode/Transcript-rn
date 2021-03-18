import 'react-native-gesture-handler';
import React, { Component } from 'react';
import { Provider as PaperProvider } from 'react-native-paper';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Signup from './App/Screens/signup.js';
import Login from './App/Screens/login.js';
import Error from './App/components/error_page.js'
import Settings from './App/Screens/settings.js'

import {Provider} from 'react-redux'
import Store from './App/redux/store.js'
import {persistor} from './App/redux/store.js'
import {PersistGate} from 'redux-persist/integration/react'

const Stack = createStackNavigator();

export default function App(){
  return (
    <PaperProvider>
      <Provider store={Store}>
        <PersistGate loading={null} persistor={persistor}>
          <NavigationContainer>
            <Stack.Navigator screenOptions={{headerShown:false}} initialRouteName="Settings">
              <Stack.Screen name="SignUp" component={Signup} />
              <Stack.Screen name="Login" component={Login} />
              <Stack.Screen name="Settings" component={Settings}/>
            </Stack.Navigator>
          </NavigationContainer>
        </PersistGate>
      </Provider>
    </PaperProvider>
  );
}