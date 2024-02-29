import { View, Text,TextInput,TouchableOpacity } from 'react-native'
import React,{useState} from 'react'
import InternetAvl from './InternetAvl'
import { COLORS } from '../Colors/Colors'
import Icon from 'react-native-vector-icons/Feather'

const Normal1 = ({navigation}) => {
    const[isConnected,setIsConnected]=useState('')
    return (
      <View style={{flex:1,backgroundColor:COLORS.white}}>
      <View style={{width:'90%',alignSelf:'center',backgroundColor:COLORS.white,marginTop:10}}>
      <TouchableOpacity style={{backgroundColor:COLORS.white,right:8}} onPress={() => navigation.goBack()}>
      <Icon name='arrow-left' size={30} color={COLORS.black} />
      </TouchableOpacity>
      <Text style={{marginTop:40,fontSize:30,fontWeight:'700',color:COLORS.main}}>Normal Mode</Text>
      <Text style={{marginTop:40,fontSize:14,fontWeight:'400',color:'grey'}}>Mobile Number</Text>
      <TextInput placeholder='Enter Mobile Number' style={{borderBottomWidth:1,borderBottomColor:COLORS.black,fontSize:17,color:'#000'}} 
      
      keyboardType='numeric'
      maxLength={10}
      />
      
      
      <Text style={{fontSize:14,color:'red',marginTop:5}}>Input valid number!</Text>
      <View>
      <Text style={{marginTop:40,fontSize:14,fontWeight:'400',color:'grey'}}>OTP</Text>
      <TextInput placeholder='Enter OTP Here' style={{borderBottomWidth:1,borderBottomColor:COLORS.black,fontSize:17,color:'#000'}} 
      
      keyboardType='numeric'
      maxLength={6}
      />
       <Text style={{fontSize:14,color:'red',marginTop:5}}>Input valid otp!</Text>
      </View>
    
      <TouchableOpacity  style={{backgroundColor:COLORS.main,height:'10%',borderRadius:30,alignItems:'center',justifyContent:'center',marginTop:80}}>
          <Text style={{fontSize:17,fontWeight:'700',color:COLORS.white}}>Submit</Text>
      </TouchableOpacity>
      </View>
      <View style={{position:'absolute',bottom:0,width:'100%'}}>
     <InternetAvl isConnected={isConnected} setIsConnected={setIsConnected} />
     </View>
    </View>
    )
}

export default Normal1