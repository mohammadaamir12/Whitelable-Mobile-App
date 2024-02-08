import { View, Text,TouchableOpacity } from 'react-native'
import React from 'react'
import { COLORS } from '../Colors/Colors'
import Icon from 'react-native-vector-icons/Feather'
import Botton from '../Components/Botton'


const ReoprtDetails = ({navigation}) => {
  return (
    <View style={{flex:1,backgroundColor:COLORS.white}}>
    <View style={{alignItems:'center',justifyContent:'center',backgroundColor:COLORS.white,marginTop:10,flexDirection:'row'}}>
    {/* <TouchableOpacity style={{backgroundColor:COLORS.white,width:'10%',right:90}} onPress={() => navigation.goBack()}>
    <Icon name='arrow-left' size={30} color={COLORS.black} />
    </TouchableOpacity> */}
    <Text style={{fontSize:26,fontWeight:'700',color:COLORS.main,alignSelf:'center'}}>Reports</Text>
    </View>
    <View style={{flex:1,width:'95%',alignSelf:'center',marginTop:10}}>
    <Botton name={'Payout Report'} icname={'arrows-turn-right'} />
    <Botton name={'Wallet Top-Up Report'} icname={'add-card'} />
    <Botton name={'Fund Request Report'} icname={'business-time'} />
    <Botton name={'All Transaction Report'} icname={'chart-line'} />
    </View>
</View>
  )
}

export default ReoprtDetails