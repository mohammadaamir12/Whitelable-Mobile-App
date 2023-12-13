import { View, Text } from 'react-native'
import React from 'react'
import DrawerNavigator from '../Navigation/DrawerNavigator'
import BottomNavigator from '../Navigation/BottomNavigator'

const HomeScreen = () => {
  return (
    <View style={{flex:1}}>
      <DrawerNavigator/>
    </View>
  )
}

export default HomeScreen