import { View, Text, TouchableOpacity, TextInput, ScrollView } from 'react-native'
import React, { useEffect, useState } from 'react'
import Icon from 'react-native-vector-icons/Feather'
import { COLORS } from '../Colors/Colors'
import Inputtext from '../Components/Inputtext'

const AccountBankDetails = ({navigation,route}) => {
const [accounttype,setaccounttype]=useState('');
const [accountno,setaccountno]=useState('');
const [accountifsc,setaccountifsc]=useState('');
const [pan,setpan]=useState('');


  useEffect(()=>{
    data()
  },[])
  const data=()=>{
    const {props}=route?.params;
    console.log('props',props.profiledetails.userData.cus_ifsc)
    setaccountifsc(props.profiledetails.userData.cus_ifsc)
    setaccountno(props.profiledetails.userData.cus_account_no)
    setaccounttype(props.profiledetails.userData.cus_account_type)
    setpan(props.profiledetails.userData.cus_pan_no)
  }
  return (
    <ScrollView contentContainerStyle={{flex:1, paddingBottom: 40, backgroundColor: '#fff' }}>
      <View style={{ flex: 1, backgroundColor: COLORS.white }}>
        <View style={{ width: '100%', alignItems: 'center', justifyContent: 'center', flexDirection: 'row' }}>
          <TouchableOpacity style={{ width: '10%',left:'5%',position:'absolute' }} onPress={() => navigation.goBack()}>
            <Icon name='arrow-left' size={30} color={COLORS.black} />
          </TouchableOpacity>
          <Text style={{ fontSize: 26, fontWeight: '700', color: COLORS.main }}>User Bank Details</Text>
        </View>
        <View style={{ flex: 1, width: '90%', alignSelf: 'center', marginTop: 20 }}>
          <Inputtext name={'Bank Account Type'} place={accounttype} val='Notedit' />
          <Inputtext name={'Account Number'} place={accountno} val='Notedit' />
          <Inputtext name={'IFSC Code'} place={accountifsc} val='Notedit' />
          <Inputtext name={'Pan Number'} place={pan} val='Notedit' />
        </View>
      </View>
    </ScrollView>
  )
}

export default AccountBankDetails