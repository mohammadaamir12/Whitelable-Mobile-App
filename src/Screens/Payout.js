import { View, Text,TouchableOpacity,TextInput } from 'react-native'
import React, { useState,useEffect } from 'react'
import { COLORS } from '../Colors/Colors'
import Icon from 'react-native-vector-icons/Feather'
import InternetAvl from './InternetAvl'
import { Base_Url, mobileOtpSend, searchRegisteredCustomer, verifyOtp } from '../Config/config'
import axios from "axios";
import Toast from 'react-native-tiny-toast'
import AsyncStorage from '@react-native-async-storage/async-storage';



const Payout = ({navigation}) => {
    const [number,setNumber]=useState('')
    const [errNum,setErrNum]=useState(false)
    const [isConnected, setIsConnected] = useState(false);
    const [otpvalue,setOtpvalue]=useState('')
    const [otp,setOtp]=useState(false)
    const [otpErr,setOtpErr]=useState(false)
    const [mode,setMode]=useState('')
    const [statusApi,setStatusApi]=useState('')
    const [apiOtp,setApiOtp]=useState('')

    useEffect(()=>{
     getPayoutdetails();
    },[mode])

    const getPayoutdetails=async()=>{
      const token = await AsyncStorage.getItem('cus_token');
      const id = await AsyncStorage.getItem('cus_id');
      axios.get(Base_Url + searchRegisteredCustomer , {
        headers: {
          'Content-Type': 'application/json',
          'Access-Control-Allow-Origin': '*',
          'token': token,
          'cus_id': id
        }
    })
        .then(function (response) {
           
            if (response.data.status == 'SUCCESS') {
                // console.log('dat-ta',response.data.mode);
                setMode(response.data.mode)
                
            }
            else if (response.data.status == 'FAIL') {
                Toast.show('Failed')
                // console.log('failesd')
                
            }
  
        }).catch(function (error) {
            Toast.show(error.response.message)
           
        })
    }
    
    const submit=()=>{
      AsyncStorage.setItem('mobile',number)
        if(!number || number.length <=9){
         setErrNum(true)
        }
        if(number && number.length===10){
            setErrNum(false)
        }
        if(otpvalue && otpvalue.length<4){
         setOtpErr(true)
        }
         if(number.length===10 || otpvalue.length===4 ){
          setErrNum(false)
          
          if(mode=='S'){
            if(otpvalue==''){
            securemode()
            }
            else if(otpvalue!='' && otpvalue.length===4){
             otpsubmit()
            }
            else{
              setOtpErr(true)
            }
           }
           else if(mode=='N'){
            navigation.navigate('Normal1')
           }
         
       
    }
  }

  const securemode=async()=>{
    
    const token = await AsyncStorage.getItem('cus_token');
    const id = await AsyncStorage.getItem('cus_id');
    // const mobile = await AsyncStorage.getItem('mobile');
    // console.log('dddd',mobile);
    // console.log('ooo',id);
    axios.post(Base_Url + mobileOtpSend, {
      mobile_number:number,
  }, {
    headers: {
      'Content-Type': 'application/json',
      'token': token,
      'cus_id': id

    }
  })
      .then(function (response) {
       
          if (response.data.status == 'CUSTOMER_KYC_NOT_VERIFIED') {
            Toast.show(response.data.message,{
              position: Toast.position.center,
              containerStyle:{},
              textStyle: {},
              imgStyle: {},
              mask: true,
              
            })
            // console.log('q',response.data);
            // navigation.navigate('Securekycnotverified')
            navigation.navigate('Securekycnotverified')
              
          }
          else if(response.data.status=='MOBILE_OTP_SEND'){
            
            Toast.show(response.data.message,{
              position: Toast.position.center,
              containerStyle:{},
              textStyle: {},
              imgStyle: {},
              mask: true,
              
            })
            setOtp(true)
            setApiOtp(response.data.otp)
            console.log(response.data.otp);
            // console.log('r',response.data);
          }
          else if(response.data.status=='SUCCESS'){
            Toast.show(response.data.message,{
              position: Toast.position.center,
              containerStyle:{},
              textStyle: {},
              imgStyle: {},
              mask: true,
              
            })
            // navigation.navigate('PayoutMoneytrans')
            // console.log('r',response.data);
            navigation.navigate('PayoutMoneytrans')
          }

      }).catch(function (error) {
          Toast.show(error.response.message)
          //  console.log('hhhh',error.response)
      })


  }
  const otpsubmit=async()=>{
    
    const token = await AsyncStorage.getItem('cus_token');
    const id = await AsyncStorage.getItem('cus_id');
    axios.post(Base_Url + verifyOtp, {
      mobile_number:number,
      otp:otpvalue
  }, {
    headers: {
      'Content-Type': 'application/json',
      'token': token,
      'cus_id': id

    }
  })
      .then(function (response) {
        // console.log('here is something',response);
          if(response.data.status=='MOBILE_VERIFY_SUCCESS'){
            
            Toast.show(response.data.message,{
              position: Toast.position.center,
              containerStyle:{},
              textStyle: {},
              imgStyle: {},
              mask: true,
              
            })
            // console.log('a',response.data)
            // navigation.navigate('HomeScreen')
            navigation.reset({
              index: 0,
              routes: [{name: 'HomeScreen'}],
            });
            setOtp(false)
          }
          else if(response.data.status==='FAIL'){
            Toast.show(response.data.message)
          }

      }).catch(function (error) {
          Toast.show(error.response.message)
          
      })
  }
   
  return (
    <View style={{flex:1,backgroundColor:COLORS.white}}>
  <View style={{width:'90%',alignSelf:'center',backgroundColor:COLORS.white,marginTop:10}}>
  <TouchableOpacity style={{backgroundColor:COLORS.white}} onPress={() => navigation.goBack()}>
  <Icon name='arrow-left' size={30} color={COLORS.black} />
  </TouchableOpacity>
  <Text style={{marginTop:40,fontSize:30,fontWeight:'700',color:COLORS.main}}>Money Transactions</Text>
  <Text style={{marginTop:40,fontSize:14,fontWeight:'400',color:'grey'}}>Mobile Number</Text>
  <TextInput placeholder='Enter Mobile Number' style={{borderBottomWidth:1,borderBottomColor:'#000',fontSize:17,color:'#000'}} 
  value={number}
  onChangeText={setNumber}
  keyboardType='numeric'
  maxLength={10}
  />
  
  
  {errNum?<Text style={{fontSize:14,color:'red',marginTop:5}}>Input valid number!</Text>:null}
  {otp==true?<View>
  <Text style={{marginTop:40,fontSize:14,fontWeight:'400',color:'grey'}}>OTP</Text>
  <TextInput placeholder='Enter OTP Here' style={{borderBottomWidth:1,borderBottomColor:'#000',fontSize:17,color:'#000'}} 
  value={otpvalue}
  onChangeText={setOtpvalue}
  keyboardType='numeric'
  maxLength={4}
  />
   {otpErr?<Text style={{fontSize:14,color:'red',marginTop:5}}>Input valid otp!</Text>:null}
  </View>:null}

  <TouchableOpacity onPress={submit} style={{backgroundColor:COLORS.main,paddingVertical:15,borderRadius:30,alignItems:'center',justifyContent:'center',marginTop:80}}>
      <Text style={{fontSize:17,fontWeight:'700',color:COLORS.white}}>Verify</Text>
  </TouchableOpacity>
  </View>
  <View style={{position:'absolute',bottom:0,width:'100%'}}>
 <InternetAvl isConnected={isConnected} setIsConnected={setIsConnected} />
 </View>
</View>
   
  )
}


export default Payout