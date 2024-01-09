import { View, Text,TouchableOpacity,TextInput,ScrollView } from 'react-native'
import React, { useState } from 'react'
import Icon from 'react-native-vector-icons/Feather'
import { COLORS } from '../Colors/Colors'
import Inputtext from '../Components/Inputtext'
import DropdownSelect from '../Components/DropdownSelect'
import Toast from 'react-native-tiny-toast'
import InternetAvl from './InternetAvl'

const RequestFund = ({navigation}) => {
  const [isConnected, setIsConnected] = useState(false);
  const Transfer =()=>{
    Toast.showSuccess('Request Sent')
    navigation.goBack();
}
  return (
    <View style={{flex:1}}>
    <ScrollView contentContainerStyle={{paddingBottom:40,backgroundColor:'#fff'}}>
    <View style={{flex:1,backgroundColor:COLORS.white}}>
    <View style={{width:'90%',alignItems:'center',justifyContent:'center',flexDirection:'row'}}>
    <TouchableOpacity style={{width:'10%',right:50}} onPress={() => navigation.goBack()}>
    <Icon name='arrow-left' size={30} color={COLORS.black} />
    </TouchableOpacity>
    <Text style={{fontSize:26,fontWeight:'700',color:COLORS.main}}>Fund Request</Text>
    </View>
    <View style={{flex:1,width:'90%',alignSelf:'center',marginTop:20}}>
     <Inputtext name={'Request To'} place={'Admin'} />
     <Inputtext name={'Amount'} place={'Enter Amount'} />
     <Inputtext name={'Reference Number'} place={'Enter Number'} />
     <DropdownSelect nam='Txn Type' sty={5} />
     <DropdownSelect nam='Bank' sty={5} />
     <DropdownSelect nam='Payment Mode' sty={5} />
     <View style={{backgroundColor:COLORS.white}}>
        <Text style={{marginTop:10,fontSize:14,fontWeight:'400',color:'grey'}}>Receipt</Text>
        <View style={{justifyContent:'center'}}>
        <TextInput placeholder='Select' style={{borderWidth:1,borderColor:'grey',fontSize:17,borderRadius:10,paddingStart:20,marginTop:2}} 
        keyboardType='numeric'
        maxLength={10}
        />
        <TouchableOpacity activeOpacity={0.7} style={{position:'absolute',right:20,backgroundColor:'#D0D0D0',borderRadius:5,padding:6,borderColor:'#888888',borderWidth:1}}>
        <Text style={{color:'#000',fontSize:14,fontWeight:'400'}}>Choose Files</Text>
        </TouchableOpacity>
        </View>
        <Inputtext name={'Review'}  />
        </View>
     <TouchableOpacity activeOpacity={0.7} onPress={Transfer} style={{backgroundColor:COLORS.main,borderRadius:30,width:'80%',height:'7%',alignSelf:'center',marginTop:30,alignItems:'center',justifyContent:'center',elevation:2}}>
        <Text style={{fontSize:20,fontWeight:'700',color:COLORS.white}}>Submit</Text>
     </TouchableOpacity>
    </View>
    
    
</View>
</ScrollView>
<InternetAvl isConnected={isConnected} setIsConnected={setIsConnected} />
</View>
  )
}

export default RequestFund