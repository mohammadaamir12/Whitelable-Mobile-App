import { View, Text, StyleSheet, Image,TouchableOpacity } from 'react-native'
import React from 'react'
import Icon from 'react-native-vector-icons/Feather'
import { useNavigation } from '@react-navigation/native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';


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
      <TouchableOpacity onPress={()=>page==='Payout'?navigation.navigate('Payout'):page==='Topup'?navigation.navigate('TopUp'):page==='VerficationSuit'?navigation.navigate('Verificationsuit'):page==='RequestFund'?navigation.navigate('RequestFund'):null} style={{height:hp('16%'),width:wp('25%'),backgroundColor:color,borderRadius:20,alignItems:'center',justifyContent:'center',margin:20,elevation: 5, // for Android shadow
  shadowColor: "#000", // for iOS shadow
  shadowOffset: {
    width: 0,
    height: 2,
  },
  shadowOpacity: 0.23,
  shadowRadius: 2.62,}} activeOpacity={0.5}>
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