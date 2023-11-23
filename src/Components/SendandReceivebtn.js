import { View, Text, StyleSheet, Image,TouchableOpacity } from 'react-native'
import React from 'react'
import Icon from 'react-native-vector-icons/Feather'
const SendandReceivebtn = ({
    color,
    text,
    name,
    iconColor,
}) => {
  return (
    <View style={{alignItems:'center'}}>
      <TouchableOpacity style={{height:90,width:90,backgroundColor:color,borderRadius:20,marginStart:16,alignItems:'center',justifyContent:'center'}} activeOpacity={0.5}>
      <Icon color={iconColor} name={name} size={35} />
      </TouchableOpacity >
      
      <Text style={{
        fontSize:16,
        fontWeight:'400',
        color:'#000',
        marginStart:16,
        marginTop:5
      }}>
        {text}
      </Text>
    </View>
  )
}

export default SendandReceivebtn