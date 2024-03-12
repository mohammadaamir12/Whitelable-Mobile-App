import { View, Text, TouchableOpacity, ScrollView } from 'react-native'
import React, { useState } from 'react'
import { COLORS } from '../Colors/Colors'
import Icon from 'react-native-vector-icons/Feather'
import Inputtext from '../Components/Inputtext'
import { AadhaarVerifyVerifycation, Base_Url, sendAadharOtp } from '../Config/config'
import axios from 'axios';
import Toast from 'react-native-tiny-toast'
import AsyncStorage from '@react-native-async-storage/async-storage';


const VerifyAdhar = ({navigation}) => {
  const [adharno,setadharno]=useState('')
  const [otp,setotp]=useState('')
  const [otpview,setotpview]=useState(false)
  const [refid,setrefid]=useState('')

  const check=()=>{
    if(otpview===false && adharno.length===12){
      submit()
    }
    if(otpview===true && adharno.length===12 && otp!='' && otp.length===6){
      submitotp()
    }

  }
  const submitotp=async()=>{
    console.log('hellooooo');
    const token = await AsyncStorage.getItem('cus_token');
    const id = await AsyncStorage.getItem('cus_id');
    axios.post(Base_Url+ AadhaarVerifyVerifycation, {
      aadhaar_number:adharno,
      ref_id:refid,
      otp: otp
    
    }, {
      headers: {
        'Content-Type': 'application/json',
        'token': token,
        'cus_id': id

      }
    })
      .then(function (response) {
          console.log('sdsdsdsd',response)
        if (response.data.status == 'SUCCESS') {

          console.log('56', response.data)
          Toast.show('Success')
          navigation.goBack()

        }
        if (response.data.status == 'AADHAAR_ALREADY_VERIFIED') {
          Toast.showSuccess('Already Verified')

        }

      }).catch(function (error) {
        Toast.show('Failed-hjh')
        console.log(error.response)


      })
  }

  const submit=async()=>{
    const token = await AsyncStorage.getItem('cus_token');
    const id = await AsyncStorage.getItem('cus_id');
    axios.post(Base_Url+ sendAadharOtp, {
      
      aadhaar_number:adharno
    
    }, {
      headers: {
        'Content-Type': 'application/json',
        'token': token,
        'cus_id': id

      }
    })
      .then(function (response) {
          // console.log('sdsdsdsd',response)
        if (response.data.status == 'SUCCESS') {

          // console.log('56', response.data)
          Toast.show('Sent')
          setotpview(true)
          setrefid(response.data.ref_id)
          // navigation.goBack()

        }
        if (response.data.status == 'AADHAAR_ALREADY_VERIFIED') {
          Toast.showSuccess('Already Verified')

        }

      }).catch(function (error) {
        Toast.show('Failed-hjh')
        console.log(error.response)


      })
    }
  return (
    <View style={{ flex: 1, backgroundColor: COLORS.white }}>
    <ScrollView showsVerticalScrollIndicator={false}>
      <View style={{ width: '100%', alignItems: 'center', justifyContent: 'center', backgroundColor: COLORS.white, marginTop: 10, flexDirection: 'row' }}>
        <TouchableOpacity style={{ backgroundColor: COLORS.white, width: '10%', left:'5%',position:'absolute' }} onPress={() => navigation.goBack()}>
          <Icon name='arrow-left' size={30} color={COLORS.black} />
        </TouchableOpacity>
        <Text style={{ fontSize: 26, fontWeight: '700', color: COLORS.main }}>Adhaar Verifivation</Text>
      </View>
      <View style={{ flex: 1, width: '90%', alignSelf: 'center', marginTop:40 }}>
       
        <Inputtext name={'Adhaar Number'} place={'Enter 12 Digits Adhaar Number'} value={adharno} setValue={setadharno} />
       {otpview===true?<Inputtext name={'OTP'} place={'Enter Otp here'} value={otp} setValue={setotp}/>:null} 
        <TouchableOpacity onPress={check} style={{backgroundColor:COLORS.main,marginTop:30,borderRadius:30,paddingVertical:'3%',width:'40%',alignSelf:'center',alignItems:'center'}}>
          <Text style={{fontSize:18,fontWeight:'500',color:'#fff'}}>Search</Text>
        </TouchableOpacity>

      </View>
     
    </ScrollView>
  </View>
  )
}

export default VerifyAdhar