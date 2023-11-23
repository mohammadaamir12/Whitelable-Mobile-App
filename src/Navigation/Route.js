
import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Main from './Main';
import Auth from './Auth';
const Stack = createNativeStackNavigator();

const Route = () => {
  return (
    <NavigationContainer>
    <Stack.Navigator screenOptions={{headerShown:false}}>
      {Auth(Stack)}
      {Main(Stack)}
    </Stack.Navigator>
    </NavigationContainer>
  )
}

export default Route