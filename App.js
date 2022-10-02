import {View, Text} from 'react-native';
import React from 'react';
import Login from './screens/Login';
import Register from './screens/Register';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}>
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Register" component={Register} />
        <Stack.Screen
          name="Root"
          component={Root}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>

      
    </NavigationContainer>
  );
}

function Root() {
  return (
    <Tab.Navigator>
      <Tab.Screen options={{ headerShown: false }} name="Login" component={Login} />
      <Tab.Screen options={{ headerShown: false }} name="Register" component={Register} />
    </Tab.Navigator>
  );
}
