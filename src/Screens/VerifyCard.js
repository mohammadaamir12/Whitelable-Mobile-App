import { View, Text, TouchableOpacity, ScrollView } from 'react-native'
import React, { useState } from 'react'
import { COLORS } from '../Colors/Colors'
import Icon from 'react-native-vector-icons/Feather'
import Historycom from '../Components/Historycom'
import Inputtext from '../Components/Inputtext'
import DropdownSelect from '../Components/DropdownSelect'
import { Base_Url, CardVerification } from '../Config/config'
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';
import Toast from 'react-native-tiny-toast'

const VerifyCard = ({navigation}) => {
  const [card,setcard]=useState('')
  const submit=async()=>{
    const token = await AsyncStorage.getItem('cus_token');
    const id = await AsyncStorage.getItem('cus_id');
    axios.post(Base_Url + CardVerification, {
      card_number: "2121523" 
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


        }
        else if (response.data.status == 'FAIL') {
          Toast.showSuccess('Failed')

        }

      }).catch(function (error) {
        Toast.show('Failed')
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
        <Text style={{ fontSize: 26, fontWeight: '700', color: COLORS.main }}>Card Verifivation</Text>
      </View>
      <View style={{ flex: 1, width: '90%', alignSelf: 'center', marginTop:40 }}>
       
        <Inputtext name={'Card Number'} place={'Enter First 6 Digits'}
        value={card}
        setValue={setcard} />
        <DropdownSelect nam={'Razerpay'}/>
        <TouchableOpacity onPress={submit} style={{backgroundColor:COLORS.main,marginTop:30,borderRadius:30,paddingVertical:'3%',width:'40%',alignSelf:'center',alignItems:'center'}}>
          <Text style={{fontSize:18,fontWeight:'500',color:'#fff'}}>Search</Text>
        </TouchableOpacity>

      </View>
     
    </ScrollView>
  </View>
  )
}

export default VerifyCard