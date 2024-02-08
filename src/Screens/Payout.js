import { View, Text,TouchableOpacity,TextInput } from 'react-native'
import React, { useState } from 'react'
import { COLORS } from '../Colors/Colors'
import Icon from 'react-native-vector-icons/Feather'
import InternetAvl from './InternetAvl'




const Payout = ({navigation}) => {
    const [number,setNumber]=useState('')
    const [errNum,setErrNum]=useState(false)
    const [isConnected, setIsConnected] = useState(false);
    const [otpvalue,setOtpvalue]=useState('')
    const [otp,setOtp]=useState(false)
    const [otpErr,setOtpErr]=useState(false)
    
    const submit=()=>{
      
        if(!number || number.length <=9){
         setErrNum(true)
        }
        if(number && number.length===10){
            setErrNum(false)
            setOtp(true)
        }
        if(otpvalue && otpvalue.length<=6){
         setOtpErr(true)
        }
         if(number.length===10 && otpvalue.length===6 ){
          setErrNum(false)
          setOtpErr(false)
          setOtp(false)
          setNumber('')
          setOtpvalue('')
          navigation.navigate('PayoutMoneytrans')
         }
       
    }
  return (
    <View style={{flex:1,backgroundColor:COLORS.white}}>
  <View style={{width:'90%',alignSelf:'center',backgroundColor:COLORS.white,marginTop:10}}>
  <TouchableOpacity style={{backgroundColor:COLORS.white,right:8}} onPress={() => navigation.goBack()}>
  <Icon name='arrow-left' size={30} color={COLORS.black} />
  </TouchableOpacity>
  <Text style={{marginTop:40,fontSize:30,fontWeight:'700',color:COLORS.main}}>Money Transactions</Text>
  <Text style={{marginTop:40,fontSize:14,fontWeight:'400',color:'grey'}}>Mobile Number</Text>
  <TextInput placeholder='Enter Mobile Number' style={{borderBottomWidth:1,borderBottomColor:COLORS.black,fontSize:17,color:'#000'}} 
  value={number}
  onChangeText={setNumber}
  keyboardType='numeric'
  maxLength={10}
  />
  
  
  {errNum?<Text style={{fontSize:14,color:'red',marginTop:5}}>Input valid number!</Text>:null}
  {otp==true?<View>
  <Text style={{marginTop:40,fontSize:14,fontWeight:'400',color:'grey'}}>OTP</Text>
  <TextInput placeholder='Enter OTP Here' style={{borderBottomWidth:1,borderBottomColor:COLORS.black,fontSize:17,color:'#000'}} 
  value={otpvalue}
  onChangeText={setOtpvalue}
  keyboardType='numeric'
  maxLength={6}
  />
   {otpErr?<Text style={{fontSize:14,color:'red',marginTop:5}}>Input valid otp!</Text>:null}
  </View>:null}

  <TouchableOpacity onPress={submit} style={{backgroundColor:COLORS.main,height:'13%',borderRadius:30,alignItems:'center',justifyContent:'center',marginTop:80}}>
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