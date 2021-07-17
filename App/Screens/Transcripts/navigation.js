import 'react-native-gesture-handler';
import React, {Component} from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Transcripts from './Transcripts';
import uploadMarksheet from './uploadMarksheet.js';
import Subjects from './Subjects';
import SubjectDetails from './SubjectDetails';
const Stack = createStackNavigator();

export default function App() {
  return (
    <Stack.Navigator
      screenOptions={{headerShown: false}}
      initialRouteName="Transcripts">
      <Stack.Screen name="Transcripts" component={Transcripts} />
      <Stack.Screen name="Upload Marksheet" component={uploadMarksheet} />
      <Stack.Screen name="Subjects" component={Subjects} />
      <Stack.Screen name="SubjectDetails" component={SubjectDetails} />
    </Stack.Navigator>
  );
}
