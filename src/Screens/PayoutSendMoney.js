import { View, Text, TouchableOpacity, TextInput } from 'react-native'
import React, { useEffect, useState } from 'react'
import Icon from 'react-native-vector-icons/Feather'
import { COLORS } from '../Colors/Colors'
import Inputtext from '../Components/Inputtext'
import DropdownSelect from '../Components/DropdownSelect'
import axios from "axios";
import Toast from 'react-native-tiny-toast'
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Base_Url, sendMoney } from '../Config/config'

const PayoutSendMoney = ({ navigation, route }) => {
  const { mobile, ifsc, id, account, name } = route.params;
  const [beneficieryname, setbeneficieryname] = useState('');
  const [beneficierymobile, setbeneficierymobile] = useState('');
  const [beneficieryid, setbeneficieryid] = useState('');
  const [beneficieryaccount, setbeneficieryaccount] = useState('');
  const [beneficieryifsc, setbeneficieryifsc] = useState('');
  const [beneficieryamount, setbeneficieryamount] = useState('');
  const [beneficierypin, setbeneficierypin] = useState('');
  const [transactiontype, settransactiontype] = useState('');
  const [transactionmode, settransactionmode] = useState('');
  useEffect(() => {
    getbenedetails()
  }, [])
  const getbenedetails = () => {
    setbeneficieryname(name)
    setbeneficieryaccount(account)
    setbeneficieryid(id)
    setbeneficieryifsc(ifsc)
    setbeneficierymobile(mobile)
  }
  const Transfer = async () => {
    const senderMobile = await AsyncStorage.getItem('mobile');
    console.log('dddddd', senderMobile)
    console.log('dddSDSddd', transactionmode)
    console.log('ddSDSDdddd', transactiontype)
    const token = await AsyncStorage.getItem('cus_token');
    const id = await AsyncStorage.getItem('cus_id');
    axios.post(Base_Url + sendMoney, {
      benf_mobile: beneficierymobile,
      benf_id: beneficieryid,
      amount: beneficieryamount,
      transaction_type: 'transactiontype',
      transaction_mode: 'transactionmode',
      benf_account: beneficieryaccount,
      pin: beneficierypin
    }, {
      headers: {
        'Content-Type': 'application/json',
        'token': token,
        'cus_id': id

      }
    })
      .then(function (response) {

        if (response.data.status == 'SUCCESS') {

          console.log('56', response.data)


        }
        else if (response.data.status == 'FAIL') {
          Toast.showSuccess('Failed')

        }

      }).catch(function (error) {
        Toast.show('SDSD')
        console.log(error.response)


      })
  }
  const transmode = [
    { key: 'India', value: 'India' },
  ]
  const transtype = [
    { key: 'India', value: 'India' },
  ]
  return (
    <View style={{ flex: 1, backgroundColor: COLORS.white }}>
      <View style={{ width: '100%', alignItems: 'center', justifyContent: 'center', backgroundColor: COLORS.white, marginTop: 10, flexDirection: 'row' }}>
        <TouchableOpacity style={{ backgroundColor: COLORS.white, width: '10%',position:'absolute',left:'5%' }} onPress={() => navigation.goBack()}>
          <Icon name='arrow-left' size={30} color={COLORS.black} />
        </TouchableOpacity>
        <Text style={{ fontSize: 26, fontWeight: '700', color: COLORS.main }}>Send Money</Text>
      </View>
      <View style={{ flex: 1, width: '90%', alignSelf: 'center', marginTop: 30 }}>
        <Inputtext name={'Baneficiary Name'} place={'Enter Name'}
          value={beneficieryname}
          setValue={setbeneficieryname} />
        <Inputtext name={'Benificiary Account'} place={'Account No'}
          value={beneficieryaccount}
          setValue={setbeneficieryaccount}
        />
        <Inputtext name={'Amount'} place={'Enter Amount'}
          value={beneficieryamount}
          setValue={setbeneficieryamount} />
        <Inputtext name={'Pin'} place={'Enter Pin'}
          value={beneficierypin}
          setValue={setbeneficierypin} />
        <DropdownSelect nam='Transaction Mode' sty={5} dropselect={transactionmode} setDropselect={settransactionmode} dropdown={transmode} />
        <DropdownSelect nam='Transaction Type' sty={5} dropselect={transactiontype} setDropselect={settransactiontype} dropdown={transtype}/>
        <TouchableOpacity activeOpacity={0.7} onPress={Transfer} style={{ backgroundColor: COLORS.main, borderRadius: 30, width: '80%', height: '7%', alignSelf: 'center', marginTop: 50, alignItems: 'center', justifyContent: 'center', elevation: 2 }}>
          <Text style={{ fontSize: 20, fontWeight: '700', color: COLORS.white }}>Transfer Now</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

export default PayoutSendMoney