import { View, Text, TouchableOpacity } from 'react-native'
import React, { useEffect, useState } from 'react'
import { COLORS } from '../Colors/Colors'
import Icon from 'react-native-vector-icons/Feather'
import Inputtext from '../Components/Inputtext'
import DropdownSelect from '../Components/DropdownSelect'
import { Base_Url, addbeneficiary, banklist } from '../Config/config'
import axios from "axios";
import Toast from 'react-native-tiny-toast'
import AsyncStorage from '@react-native-async-storage/async-storage';
const BankBeneficiery = ({ navigation }) => {
  const [benename, setbenename] = useState('')
  const [beneaccount, setbeneaccount] = useState('')
  const [ifsc, setifsc] = useState('')
  const [bankname, setbankname] = useState('')
  const [bankfulllist, setbankfulllist] = useState('')
  useEffect(() => {
    bankall()
  }, [])

  const bankall = async () => {
    const token = await AsyncStorage.getItem('cus_token');
    const id = await AsyncStorage.getItem('cus_id');
    axios.get(Base_Url + banklist, {
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
        'token': token,
        'cus_id': id
      }
    })
      .then(function (response) {
        // console.log('SDSD',response)
        if (response.data.status == 'Success') {
          console.log('daa',response.data);
          let newArray = response.data.bank.map((item) => {
            return { key:item.bank_name, value:item.bank_name }
          })
          setbankfulllist(newArray)
          console.log(bankfulllist)

        }
        else if (response.data.status == 'FAIL') {
          Toast.show('Failed')

        }

      }).catch(function (error) {
        Toast.show('Server Error')

      })
  }
  const submitbank = async () => {
   
    if (benename != '' && beneaccount != '' && ifsc != '' && bankname != '') {
      const mobile = await AsyncStorage.getItem('mobile')
      // const mtuser_id = await AsyncStorage.getItem('mtuser_id')
      // const mtcus_id = await AsyncStorage.getItem('mtcus_id')
      console.log('sdsfddsfdf',bankname)
      const token = await AsyncStorage.getItem('cus_token');
      const id = await AsyncStorage.getItem('cus_id');
      axios.post(Base_Url + addbeneficiary, {
        mobile: mobile,
        bank_name: bankname,
        beneficiaryName: benename,
        beneficiaryAccountNumber: beneaccount,
        beneficiaryIfscCode: ifsc
      }, {
        headers: {
          'Content-Type': 'application/json',
          'token': token,
          'cus_id': id

        }
      })
        .then(function (response) {


          if (response.data.status == 'SUCCESS') {
            Toast.show(response.data.message, {
              position: Toast.position.center,
              containerStyle: {},
              textStyle: {},
              imgStyle: {},
              mask: true,

            })
            navigation.navigate('PayoutMoneytrans')
            // console.log('DD', response.data);


          }
          

        }).catch(function (error) {
          Toast.show(error.response.message)
          //  console.log('hhhh',error.response)
        })
    }
    else{
      
      Toast.show('Please fill all fields')
    }
  }

  return (
    <View style={{ flex: 1, backgroundColor: COLORS.white }}>
      <View style={{ width: '90%', alignItems: 'center', justifyContent: 'center', backgroundColor: COLORS.white, marginTop: 10, flexDirection: 'row' }}>
        <TouchableOpacity style={{ backgroundColor: COLORS.white, width: '10%', right: 15 }} onPress={() => navigation.goBack()}>
          <Icon name='arrow-left' size={30} color={COLORS.black} />
        </TouchableOpacity>
        <Text style={{ fontSize: 26, fontWeight: '700', color: COLORS.main }}>Add Bank Beneficiery</Text>
      </View>
      <View style={{ width: '90%', alignSelf: 'center' }}>
        <Inputtext name={'Beneficiary Name'} place={'Enter Name'} value={benename} setValue={setbenename} />
        <Inputtext name={'Beneficiary Account'} place={'Account Number'} value={beneaccount} setValue={setbeneaccount} />
        <DropdownSelect nam='Bank' dropselect={bankname} setDropselect={setbankname} dropdown={bankfulllist} showContent={'Select Bank'} />
        <Inputtext name={'IFSC'} place={'IFSC Code'} value={ifsc} setValue={setifsc} />
      </View>
      <View style={{ width: '80%', alignSelf: 'center', marginTop: 20 }}>
        <TouchableOpacity onPress={submitbank} style={{ marginTop: 5, backgroundColor: COLORS.main, borderRadius: 10, alignItems: 'center', paddingVertical: 15, justifyContent: 'center' }}>
          <Text style={{ fontSize: 16, fontWeight: '500', color: COLORS.white }}>Add</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

export default BankBeneficiery