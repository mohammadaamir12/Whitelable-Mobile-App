import { View, Text, TouchableOpacity, ScrollView } from 'react-native'
import React, { useEffect, useState } from 'react'
import { COLORS } from '../Colors/Colors'
import Icon from 'react-native-vector-icons/Feather'
import Inputtext from '../Components/Inputtext'


const VerifyUPI = ({ navigation }) => {


 
  const[choose,setChoose]=useState(true)
  const[choose1,setChoose1]=useState(false)
  return (
    <View style={{ flex: 1, backgroundColor: COLORS.white }}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={{ width: '90%', alignItems: 'center', justifyContent: 'center', backgroundColor: COLORS.white, marginTop: 10, flexDirection: 'row' }}>
          <TouchableOpacity style={{ backgroundColor: COLORS.white, width: '10%', right: 40 }} onPress={() => navigation.goBack()}>
            <Icon name='arrow-left' size={30} color={COLORS.black} />
          </TouchableOpacity>
          <Text style={{ fontSize: 26, fontWeight: '700', color: COLORS.main }}>UPI Verification</Text>
        </View>
        <View style={{ flex: 1, width: '90%', alignSelf: 'center', marginVertical: 15 }}>
          <View style={{ flexDirection: 'row', justifyContent: 'center' }}>
            <TouchableOpacity activeOpacity={0.9} onPress={()=>{setChoose(!choose); setChoose1(false)}} style={{ backgroundColor:choose? COLORS.main:'grey', marginTop: 30, borderRadius: 30, paddingVertical: '3%', width: '40%', alignSelf: 'center', alignItems: 'center', marginRight: 5 }}>
              <Text style={{ fontSize: 18, fontWeight: '500', color: '#fff' }}>UPI</Text>
            </TouchableOpacity>
            <TouchableOpacity activeOpacity={0.9} onPress={()=>{setChoose1(!choose1); setChoose(false)}} style={{ backgroundColor: choose1? COLORS.main:'grey', marginTop: 30, borderRadius: 30, paddingVertical: '3%', width: '40%', alignSelf: 'center', alignItems: 'center', marginLeft: 5 }}>
              <Text style={{ fontSize: 18, fontWeight: '500', color: '#fff' }}>Mobile</Text>
            </TouchableOpacity>
          </View>
          <View style={{marginTop:20}}>
          {choose==true?<Inputtext name='UPI ID' place='Enter UPI ID' />:<Inputtext name='Mobile Number' place='Enter Mobile Number' />}
          <TouchableOpacity style={{backgroundColor:COLORS.main,marginTop:30,borderRadius:30,paddingVertical:'3%',width:'40%',alignSelf:'center',alignItems:'center'}}>
          <Text style={{fontSize:18,fontWeight:'500',color:'#fff'}}>Search</Text>
        </TouchableOpacity>
          </View>
        </View>

      </ScrollView>
    </View>
  )
}

export default VerifyUPI