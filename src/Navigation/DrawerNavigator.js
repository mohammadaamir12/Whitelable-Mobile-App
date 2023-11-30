import { View, Text } from 'react-native'
import React from 'react'

import { createDrawerNavigator } from '@react-navigation/drawer';
import Home from '../Screens/Home';
import Profile from '../Screens/Profile';
import DrawerContent from '../Screens/DrawerContent';
import { COLORS } from '../Colors/Colors';
const Drawer = createDrawerNavigator();
const DrawerNavigator = () => {
  return (
    <Drawer.Navigator drawerContent={props=> <DrawerContent {...props} />} screenOptions={{headerShown:false,drawerStyle:{backgroundColor:COLORS.main,borderTopRightRadius:25,borderBottomRightRadius:25}}} >
    <Drawer.Screen name="Profile" component={Profile} />
  </Drawer.Navigator>
  )
}

export default DrawerNavigator