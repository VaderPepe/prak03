import 'react-native-gesture-handler';
import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Constants from 'expo-constants';
import Details from './Details'
import Home from './Home'
import ListView from './ListView';

const Stack = createStackNavigator();

export default function App() {

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={Home} options={{ title: 'Home' }}/>
        <Stack.Screen name="Second" component={Details} options={{ title: 'Details' }} />
        <Stack.Screen name="ListView" component={ListView} options={{ title: 'ListView' }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
