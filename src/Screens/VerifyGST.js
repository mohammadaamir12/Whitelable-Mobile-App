import { View, Text, TouchableOpacity, ScrollView,} from 'react-native'
import React,{useState} from 'react'
import { COLORS } from '../Colors/Colors'
import Icon from 'react-native-vector-icons/Feather'
import Inputtext from '../Components/Inputtext'
import { Base_Url, GstVerification } from '../Config/config'
import axios from 'axios';
import Toast from 'react-native-tiny-toast'
import AsyncStorage from '@react-native-async-storage/async-storage';



const VerifyGST = ({navigation}) => {
  const [gst,setgst]=useState('')
    const submit=async()=>{
      const token = await AsyncStorage.getItem('cus_token');
      const id = await AsyncStorage.getItem('cus_id');
      axios.post(Base_Url + GstVerification, {
        
        gst: gst
      
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
            Toast.showSuccess('Success')
            navigation.goBack()
  
          }
          else if (response.data.status == 'FAIL') {
            Toast.show('Failed')
  
          }
  
        }).catch(function (error) {
          Toast.show('Failed-hjh')
          console.log(error.response)
  
  
        })
      }
  return (
    <View style={{ flex: 1, backgroundColor: COLORS.white }}>
    <ScrollView showsVerticalScrollIndicator={false}>
      <View style={{ width: '90%', alignItems: 'center', justifyContent: 'center', backgroundColor: COLORS.white, marginTop: 10, flexDirection: 'row' }}>
        <TouchableOpacity style={{ backgroundColor: COLORS.white, width: '10%', right: 40 }} onPress={() => navigation.goBack()}>
          <Icon name='arrow-left' size={30} color={COLORS.black} />
        </TouchableOpacity>
        <Text style={{ fontSize: 26, fontWeight: '700', color: COLORS.main }}>GST Verifivation</Text>
      </View>
      <View style={{ flex: 1, width: '90%', alignSelf: 'center', marginTop:40 }}>
       
        <Inputtext name={'GST Number'} place={'Enter 15 Digits GST Number'} value={gst} setValue={setgst} />
        <TouchableOpacity onPress={submit} style={{backgroundColor:COLORS.main,marginTop:30,borderRadius:30,paddingVertical:'3%',width:'40%',alignSelf:'center',alignItems:'center'}}>
          <Text style={{fontSize:18,fontWeight:'500',color:'#fff'}}>Search</Text>
        </TouchableOpacity>

      </View>
     
    </ScrollView>
  </View>
  )
}

export default VerifyGST