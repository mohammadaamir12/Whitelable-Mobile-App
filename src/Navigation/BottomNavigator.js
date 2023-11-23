import { View, Text } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import History from '../Screens/History';
import Account from '../Screens/Account';
import Icon from 'react-native-vector-icons/AntDesign';
import { COLORS } from '../Colors/Colors';
import Home from '../Screens/Home';
const Bottom = createBottomTabNavigator();

const BottomNavigator = () => {
  return (
    <Bottom.Navigator screenOptions={{headerShown:false,tabBarActiveTintColor:COLORS.main,tabBarLabelStyle:{
        fontSize:12,
        fontWeight:'bold',
    }}} >
       <Bottom.Screen name="Home" component={Home}
      options={{tabBarIcon:(tintInfo)=>{
        return(
            <Icon name='home' size={28} color={tintInfo.focused?COLORS.main:'grey'} />
        )
      }}}
      />
      <Bottom.Screen  name="History" component={History}
      options={{tabBarIcon:(tintInfo)=>{
        return(
            <Icon name='clockcircleo' size={25} color={tintInfo.focused?COLORS.main:'grey'} />
        )
      }}}
      />
      <Bottom.Screen name="Account" component={Account}
      options={{tabBarIcon:(tintInfo)=>{
        return(
            <Icon name='user' size={28} color={tintInfo.focused?COLORS.main:'grey'} />
        )
      }}}
      />
     
    </Bottom.Navigator>
  )
}

export default BottomNavigator