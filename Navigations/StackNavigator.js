import React from 'react'
import { View, Text } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import Home from './components/Home'
import About from './components/About'

import { createNativeStackNavigator } from '@react-navigation/native-stack';
const Stack=createNativeStackNavigator()

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{
          headerStyle: {
            backgroundColor: '#777'         
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
          }}>
        <Stack.Screen name="Home" component={Home} options={{title:'Home Screen from options'}}  />
        <Stack.Screen name="About" component={About} options={({route})=>({title:route.params.name})}/>
      </Stack.Navigator>
    </NavigationContainer>
  )
}
