import { View, Text,TouchableOpacity,TextInput } from 'react-native'
import React, { useState } from 'react'
import { COLORS } from '../Colors/Colors'
import Icon from 'react-native-vector-icons/Feather'




const Payout = ({navigation}) => {
    const [number,setNumber]=useState('')
    const [errNum,setErrNum]=useState(false)
    const submit=()=>{
        if(!number || number.length <=9){
         setErrNum(true)
        }
        if(number.length===10){
            setErrNum(false)
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
        <TextInput placeholder='Enter Mobile Number' style={{borderBottomWidth:1,borderBottomColor:COLORS.black,fontSize:17}} 
        value={number}
        onChangeText={setNumber}
        keyboardType='numeric'
        maxLength={10}
        />
        {errNum?<Text style={{fontSize:14,color:'red',marginTop:5}}>Input valid number!</Text>:null}
        <TouchableOpacity onPress={submit} style={{backgroundColor:COLORS.main,height:'13%',borderRadius:30,alignItems:'center',justifyContent:'center',marginTop:80}}>
            <Text style={{fontSize:17,fontWeight:'700',color:COLORS.white}}>Verify</Text>
        </TouchableOpacity>
        </View>
    </View>
  )
}

export default Payout