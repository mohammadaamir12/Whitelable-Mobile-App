import { View, Text, TouchableOpacity, ScrollView } from 'react-native'
import React, { useEffect, useState } from 'react'
import { COLORS } from '../Colors/Colors'
import Icon from 'react-native-vector-icons/Feather'

const WalletDetails = ({navigation}) => {
  return (
    <View style={{ flex: 1, backgroundColor: COLORS.white }}>
    <ScrollView showsVerticalScrollIndicator={false}>
      <View style={{ width: '90%', alignItems: 'center', justifyContent: 'center', backgroundColor: COLORS.white, marginTop: 10, flexDirection: 'row' }}>
        <TouchableOpacity style={{ backgroundColor: COLORS.white, width: '10%', right: 50 }} onPress={() => navigation.goBack()}>
          <Icon name='arrow-left' size={30} color={COLORS.black} />
        </TouchableOpacity>
        <Text style={{ fontSize: 26, fontWeight: '700', color: COLORS.main }}>Wallet Details</Text>
      </View>
      <View style={{ flex: 1, width: '90%', alignSelf: 'center', marginVertical: 35,flexDirection:'row',height:80,justifyContent:'space-between'}}>
        <View style={{backgroundColor:'#00bfff',alignItems:'center',width:'48%',justifyContent:'center',borderRadius:10}}>
          <Text style={{fontSize:24,color:'#000',fontWeight:'600'}}>Balance</Text>
          <Text style={{fontSize:20,color:'#4a4240',fontWeight:'500'}}>16000</Text>
        </View>
        <View style={{backgroundColor:'#00bfff',alignItems:'center',width:'48%',justifyContent:'center',borderRadius:10}}>
        <Text style={{fontSize:24,color:'#000',fontWeight:'600'}}>Unsettled</Text>
          <Text style={{fontSize:20,color:'#4a4240',fontWeight:'500'}}>0</Text>
        </View>
      </View>
     <Text style={{alignSelf:'center',fontSize:18,color:'#A87CA0'}}>https://test.api.pg.runpaisa.com/checkout/7a69eb62576d63a742a01fb6cfc8f175</Text>
     <TouchableOpacity style={{alignItems:'center',marginVertical:30,backgroundColor:COLORS.main2,width:'85%',alignSelf:'center',height:40,borderRadius:8,justifyContent:'center'}}>
      <Text style={{fontSize:20,fontWeight:'400',color:'#000'}}>Regenerate Payment Link</Text>
     </TouchableOpacity>
     <View style={{alignItems:'center',width:'90%',alignSelf:'center'}}>
     <Text style={{fontSize:24,color:'#000',fontWeight:'500'}}>TERMS AND CONDITIONS</Text>
     <Text style={{fontSize:20,color:'#000',fontWeight:'400',marginVertical:10}}>HOW TO USE?</Text>
     <Text style={{fontSize:16,color:'#000',fontWeight:'300'}}>While doing transactions through any credit or debit card, the retailer/distributor must get the attached agreement filled and signed by the customer. Also take one signed KYC document from the customer along with card's front copy.</Text>
     </View>
     <TouchableOpacity style={{alignItems:'center',marginVertical:20,backgroundColor:'#BF55EC',width:'85%',alignSelf:'center',height:40,borderRadius:8,justifyContent:'center'}}>
      <Text style={{fontSize:20,fontWeight:'400',color:'#fff'}}>Download PAYU Agreement</Text>
     </TouchableOpacity>
     <TouchableOpacity style={{alignItems:'center',marginVertical:20,backgroundColor:'#BF55EC',width:'85%',alignSelf:'center',height:40,borderRadius:8,justifyContent:'center'}}>
      <Text style={{fontSize:20,fontWeight:'400',color:'#fff'}}>Download LYRE Agreement</Text>
     </TouchableOpacity>
     <TouchableOpacity style={{alignItems:'center',marginVertical:20,backgroundColor:'#BF55EC',width:'85%',alignSelf:'center',height:40,borderRadius:8,justifyContent:'center'}}>
      <Text style={{fontSize:20,fontWeight:'400',color:'#fff'}}>Download PAYTM Agreement</Text>
     </TouchableOpacity>
     <TouchableOpacity style={{alignItems:'center',marginVertical:20,backgroundColor:'#BF55EC',width:'85%',alignSelf:'center',height:40,borderRadius:8,justifyContent:'center'}}>
      <Text style={{fontSize:20,fontWeight:'400',color:'#fff'}}>Download RAZERPAY Agreement</Text>
     </TouchableOpacity>
     <TouchableOpacity style={{alignItems:'center',marginVertical:20,backgroundColor:'#BF55EC',width:'85%',alignSelf:'center',height:40,borderRadius:8,justifyContent:'center'}}>
      <Text style={{fontSize:20,fontWeight:'400',color:'#fff'}}>Download CASHFREE Agreement</Text>
     </TouchableOpacity>
    </ScrollView>
  </View>
  )
}

export default WalletDetails