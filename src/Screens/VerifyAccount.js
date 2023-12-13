import { View, Text, TouchableOpacity, ScrollView } from 'react-native'
import React from 'react'
import { COLORS } from '../Colors/Colors'
import Icon from 'react-native-vector-icons/Feather'
import Inputtext from '../Components/Inputtext'

const VerifyAccount = ({navigation}) => {
  return (
    <View style={{ flex: 1, backgroundColor: COLORS.white }}>
    <ScrollView showsVerticalScrollIndicator={false}>
      <View style={{ width: '90%', alignItems: 'center', justifyContent: 'center', backgroundColor: COLORS.white, marginTop: 10, flexDirection: 'row' }}>
        <TouchableOpacity style={{ backgroundColor: COLORS.white, width: '10%', right: 20 }} onPress={() => navigation.goBack()}>
          <Icon name='arrow-left' size={30} color={COLORS.black} />
        </TouchableOpacity>
        <Text style={{ fontSize: 26, fontWeight: '700', color: COLORS.main }}>Account Verifivation</Text>
      </View>
      <View style={{ flex: 1, width: '90%', alignSelf: 'center', marginTop:40 }}>
       
        <Inputtext name={'Account Number'} place={'Enter Account Number'} />
        <Inputtext name={'IFSC Code'} place={'Enter IFSC Code'} />
        <TouchableOpacity style={{backgroundColor:COLORS.main,marginTop:30,borderRadius:30,paddingVertical:'3%',width:'40%',alignSelf:'center',alignItems:'center'}}>
          <Text style={{fontSize:18,fontWeight:'500',color:'#fff'}}>Search</Text>
        </TouchableOpacity>

      </View>
     
    </ScrollView>
  </View>
  )
}

export default VerifyAccount