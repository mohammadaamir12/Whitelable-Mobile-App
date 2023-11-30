import { View, Text, StyleSheet, Image,TouchableOpacity } from 'react-native'
import React from 'react'
import Icon from 'react-native-vector-icons/Feather'
import { useNavigation } from '@react-navigation/native';


const SendandReceivebtn = ({
    color,
    text,
    name,
    iconColor,
    page,
}) => {
  const navigation = useNavigation();
  
  return (
    <View style={{alignItems:'center'}}>
      <TouchableOpacity onPress={()=>page==='Payout'?navigation.navigate('Payout'):page==='Topup'?navigation.navigate('TopUp'):page==='VerficationSuit'?navigation.navigate('Verificationsuit'):page==='RequestFund'?navigation.navigate('RequestFund'):null} style={{height:90,width:90,backgroundColor:color,borderRadius:20,marginStart:16,alignItems:'center',justifyContent:'center'}} activeOpacity={0.5}>
      <Icon color={iconColor} name={name} size={35} />
      </TouchableOpacity >
      
      <Text  style={{
        fontSize:14,
        fontWeight:'500',
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