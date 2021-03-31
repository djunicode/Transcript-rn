import 'react-native-gesture-handler';
import React, {Component} from 'react';
import {Provider as PaperProvider} from 'react-native-paper';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Signup from './App/Screens/signup.js';
import Login from './App/Screens/login.js';

import Settings from './App/Screens/settings.js';
import Lor from './App/Screens/LOR/Lor';
import Sop from './App/Screens/Sop';
import Profile from './App/Screens/Profile';
import NewLor from './App/Screens/LOR/NewLor';
import Template1 from './App/Screens/LOR/Template1';
import Template2 from './App/Screens/LOR/Template2';
import Template3 from './App/Screens/LOR/Template3';

import Ionicons from 'react-native-vector-icons/Ionicons';
import Entypo from 'react-native-vector-icons/Entypo';

import {Provider} from 'react-redux';
import Store from './App/redux/store.js';
import {persistor} from './App/redux/store.js';
import {PersistGate} from 'redux-persist/integration/react';
import TranscriptNavigation from './App/Screens/Transcripts/navigation';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const Home = () => {
  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        tabBarIcon: ({color}) => {
          if (route.name == 'Transcripts') {
            return (
              <Ionicons name="newspaper-outline" size={25} color={color} />
            );
          } else if (route.name == 'SOP') {
            return (
              <Ionicons name="documents-outline" size={25} color={color} />
            );
          } else if (route.name == 'LOR') {
            return <Entypo name="text-document" size={25} color={color} />;
          } else {
            return <Ionicons name="settings-outline" size={25} color={color} />;
          }
        },
      })}
      tabBarOptions={{
        activeBackgroundColor: '#9AB3FF',
        activeTintColor: 'black',
        inactiveBackgroundColor: 'white',
        style: {borderTopWidth: 0},
      }}>
      <Tab.Screen name="Transcripts" component={TranscriptNavigation} />
      <Tab.Screen name="SOP" component={Sop} />
      <Tab.Screen name="LOR" component={Lor} />
      <Tab.Screen name="Profile" component={Profile} />
    </Tab.Navigator>
  );
};

export default function App() {
  return (
    <PaperProvider>
      <Provider store={Store}>
        <PersistGate loading={null} persistor={persistor}>
          <NavigationContainer>
            <Stack.Navigator
              screenOptions={{headerShown: false}}
              initialRouteName="Home">
              <Stack.Screen name="SignUp" component={Signup} />
              <Stack.Screen name="Login" component={Login} />
              <Stack.Screen name="Settings" component={Settings} />
              <Stack.Screen name="Home" component={Home} />
              <Stack.Screen name="NewLor" component={NewLor} />
              <Stack.Screen name="Template1" component={Template1} />
              <Stack.Screen name="Template2" component={Template2} />
              <Stack.Screen name="Template3" component={Template3} />
            </Stack.Navigator>
          </NavigationContainer>
        </PersistGate>
      </Provider>
    </PaperProvider>
  );
}
