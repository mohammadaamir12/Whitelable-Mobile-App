import { View, Text,TouchableOpacity,TextInput } from 'react-native'
import React from 'react'
import Botton from '../Components/Botton'
import { COLORS } from '../Colors/Colors'
import Icon from 'react-native-vector-icons/Feather'



const Verificationsuit = ({navigation}) => {
  return (
    <View style={{flex:1,backgroundColor:COLORS.white}}>
    <View style={{width:'90%',alignItems:'center',justifyContent:'center',backgroundColor:COLORS.white,marginTop:10,flexDirection:'row'}}>
    <TouchableOpacity style={{backgroundColor:COLORS.white,width:'10%',right:40}} onPress={() => navigation.goBack()}>
    <Icon name='arrow-left' size={30} color={COLORS.black} />
    </TouchableOpacity>
    <Text style={{fontSize:26,fontWeight:'700',color:COLORS.main}}>Verfication Suite</Text>
    </View>
    <View style={{flex:1,width:'90%',alignSelf:'center',marginTop:10}}>
    <Botton name={'Verify Card'} icname={'credit-card'} />
    <Botton name={'Verify Pan'} icname={'id-card-alt'} />
    <Botton name={'Verify Aadhar'} icname={'address-card'} />
    <Botton name={'Verify Account'} icname={'house-user'} />
    <Botton name={'Verify GST'} icname={'money-bill'} />
    <Botton name={'Verify UPI'} icname={'qrcode-scan'} />
    <Botton name={'Verification Report'} icname={'auto-graph'} />
    </View>
</View>
  )
}

export default Verificationsuit