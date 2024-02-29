import { View, Text,TouchableOpacity,TextInput } from 'react-native'
import React, { useEffect, useState } from 'react'
import Icon from 'react-native-vector-icons/Feather'
import { COLORS } from '../Colors/Colors'
import Inputtext from '../Components/Inputtext'
import DropdownSelect from '../Components/DropdownSelect'
import axios from "axios";
import Toast from 'react-native-tiny-toast'
import AsyncStorage from '@react-native-async-storage/async-storage';

const PayoutSendMoney = ({navigation,route}) => {
  const {mobile,ifsc,id,account,name}=route.params;
  const[beneficieryname,setbeneficieryname]=useState();
  const[beneficierymobile,setbeneficierymobile]=useState();
  const[beneficieryid,setbeneficieryid]=useState();
  const[beneficieryaccount,setbeneficieryaccount]=useState();
  const[beneficieryifsc,setbeneficieryifsc]=useState();
  useEffect(()=>{
  getbenedetails()
  },[])
  const getbenedetails=()=>{
  setbeneficieryname(name)
  setbeneficieryaccount(account)
  setbeneficieryid(id)
  setbeneficieryifsc(ifsc)
  setbeneficierymobile(mobile)
  }
    const Transfer =async()=>{
      const senderMobile=await AsyncStorage.getItem('mobile');
      console.log('dddddd',senderMobile)
        Toast.showSuccess('Done')
        navigation.goBack();
    }
  return (
    <View style={{flex:1,backgroundColor:COLORS.white}}>
    <View style={{width:'90%',alignItems:'center',justifyContent:'center',backgroundColor:COLORS.white,marginTop:10,flexDirection:'row'}}>
    <TouchableOpacity style={{backgroundColor:COLORS.white,width:'10%',right:70}} onPress={() => navigation.goBack()}>
    <Icon name='arrow-left' size={30} color={COLORS.black} />
    </TouchableOpacity>
    <Text style={{fontSize:26,fontWeight:'700',color:COLORS.main}}>Send Money</Text>
    </View>
    <View style={{flex:1,width:'90%',alignSelf:'center',marginTop:30}}>
     <Inputtext name={'Baneficiary Name'} place={'Enter Name'} />
     <Inputtext name={'Benificiary Account'} place={'Account No'} />
     <Inputtext name={'Amount'} place={'Enter Amount'} />
     <Inputtext name={'Pin'} place={'Enter Pin'} />
     <DropdownSelect nam='Transaction Mode' sty={5} />
     <DropdownSelect nam='Transaction Type' sty={5} />
     <TouchableOpacity activeOpacity={0.7} onPress={Transfer} style={{backgroundColor:COLORS.main,borderRadius:30,width:'80%',height:'7%',alignSelf:'center',marginTop:50,alignItems:'center',justifyContent:'center',elevation:2}}>
        <Text style={{fontSize:20,fontWeight:'700',color:COLORS.white}}>Transfer Now</Text>
     </TouchableOpacity>
    </View>
</View>
  )
}

export default PayoutSendMoney