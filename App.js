import React from 'react'
import { View, Text } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import Home from './components/Home'
import About from './components/About'

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator initialRouteName="Home">
        <Tab.Screen name="Home" component={Home} />
        <Tab.Screen name="About" component={About} />
      </Tab.Navigator>
    </NavigationContainer>
    // <View><Text>Hello world</Text></View>
  );
}