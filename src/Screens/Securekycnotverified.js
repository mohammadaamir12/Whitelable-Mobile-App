import { View, Text, TouchableOpacity, ScrollView } from 'react-native'
import React, { useEffect, useState } from 'react'
import { COLORS } from '../Colors/Colors'
import Icon from 'react-native-vector-icons/Feather'
import Inputtext from '../Components/Inputtext'
import axios from "axios";
import Toast from 'react-native-tiny-toast'
import AsyncStorage from '@react-native-async-storage/async-storage';
import { AadhaarVerifyVerifycation, Base_Url, PanVerification, sendAadharOtp } from '../Config/config'

const Securekycnotverified = ({ navigation }) => {
  const [choose, setChoose] = useState(true)
  const [choose1, setChoose1] = useState(false)
  const [adharNum, setAdharNum] = useState('')
  const [panNum, setPanNum] = useState('')
  const [refId, setRefId] = useState('')
  const [otp, setOtp] = useState('')
  const [otpShow, setOtpShow] = useState(false)
  const check = () => {
    if (adharNum != '' && adharNum.length == 12 && otp == '') {
      adharOtp()
    }
    else if (adharNum != '' && adharNum.length == 12 && otp != '' && otp.length == 6) {
      console.log('entered')
      OtpVerifing()
    }
    else if (panNum != '') {
      PanVerifing()
    }
    else {
      // Toast.show('Please fill all fields',{
      //   position: Toast.position.center,
      //   mask: true,
      // })
      Toast.show('Please fill all fields')
    }
  }
  const adharOtp = async () => {
    const token = await AsyncStorage.getItem('cus_token');
    const id = await AsyncStorage.getItem('cus_id');
    axios.post(Base_Url + sendAadharOtp, {
      aadhaar_number: adharNum,
    }, {
      headers: {
        'Content-Type': 'application/json',
        'token': token,
        'cus_id': id

      }
    })
      .then(function (response) {
        console.log(response)
        if (response.data.status == 'SUCCESS') {
          Toast.showSuccess('Submitted')
          console.log(response.data.mobile)
          setRefId(response.data.ref_id)
          setOtpShow(true)
          

        }
        else if (response.data.status == 'FAIL') {
          Toast.showSuccess(response.data.message)

        }
        else if (response.data.status == 'AADHAAR_ALREADY_VERIFIED') {
          Toast.showSuccess('Aadhaar Verified')
        }
      }).catch(function (error) {
        Toast.show('Server Error')

      })
  }
  const OtpVerifing = async () => {

    const token = await AsyncStorage.getItem('cus_token');
    const id = await AsyncStorage.getItem('cus_id');
    axios.post(Base_Url + AadhaarVerifyVerifycation, {
      aadhaar_number: adharNum,
      ref_id: refId,
      otp: otp
    }, {
      headers: {
        'Content-Type': 'application/json',
        'token': token,
        'cus_id': id

      }
    })
      .then(function (response) {
        console.log(response)
        if (response.data.status == 'SUCCESS') {
          Toast.showSuccess('Verified')

          navigation.navigate('PayoutMoneytrans')
          setAdharNum('')
          setOtp('')
          setOtpShow(false)
        }
        else if (response.data.status == 'FAIL') {
          // console.log(response.data)
          Toast.show(response.data.message)

        }
      }).catch(function (error) {
        Toast.show('Server Error')
        console.log(error.response)

      })
  }
  const PanVerifing = async () => {

    const token = await AsyncStorage.getItem('cus_token');
    const id = await AsyncStorage.getItem('cus_id');
    axios.post(Base_Url + PanVerification, {
      pan_number: panNum,
    }, {
      headers: {
        'Content-Type': 'application/json',
        'token': token,
        'cus_id': id

      }
    })
      .then(function (response) {
        if (response.data.status == 'SUCCESS') {
          Toast.showSuccess('Verified')
          navigation.navigate('PayoutMoneytrans')
          setPanNum('')
        }
        else if (response.data.status == 'FAIL') {
          // console.log(response.data)
          Toast.show(response.data.message)
        }
      }).catch(function (error) {
        Toast.show(error.response.data.message)
      })
  }

  return (
    <View style={{ flex: 1, backgroundColor: COLORS.white }}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={{ width: '90%', alignItems: 'center', justifyContent: 'center', backgroundColor: COLORS.white, marginTop: 10, flexDirection: 'row' }}>
          <TouchableOpacity style={{ backgroundColor: COLORS.white, width: '10%', right: 80 }} onPress={() => navigation.goBack()}>
            <Icon name='arrow-left' size={30} color={COLORS.black} />
          </TouchableOpacity>
          <Text style={{ fontSize: 26, fontWeight: '700', color: COLORS.main }}>KYC Verify</Text>
        </View>
        <View style={{ flex: 1, width: '90%', alignSelf: 'center', marginVertical: 15 }}>
          <View style={{ flexDirection: 'row', justifyContent: 'center' }}>
            <TouchableOpacity activeOpacity={0.9} onPress={() => { setChoose(!choose); setChoose1(false) }} style={{ backgroundColor: choose ? COLORS.main : 'grey', marginTop: 30, borderRadius: 30, paddingVertical: '3%', width: '40%', alignSelf: 'center', alignItems: 'center', marginRight: 5 }}>
              <Text style={{ fontSize: 18, fontWeight: '500', color: '#fff' }}>Pan</Text>
            </TouchableOpacity>
            <TouchableOpacity activeOpacity={0.9} onPress={() => { setChoose1(!choose1); setChoose(false) }} style={{ backgroundColor: choose1 ? COLORS.main : 'grey', marginTop: 30, borderRadius: 30, paddingVertical: '3%', width: '40%', alignSelf: 'center', alignItems: 'center', marginLeft: 5 }}>
              <Text style={{ fontSize: 18, fontWeight: '500', color: '#fff' }}>Adhaar</Text>
            </TouchableOpacity>
          </View>
          <View style={{ marginTop: 20 }}>
            {choose == true ?
              <Inputtext
                name='Pan Number'
                place='Enter Pan Details'
                value={panNum}
                setValue={setPanNum}
              /> :
              <View>
                <Inputtext
                  name='Adhaar Number'
                  place='Enter 12 Digits Number'
                  value={adharNum}
                  setValue={setAdharNum}
                  keyboard={'numeric'}
                 />
                 {otpShow == true ? <Inputtext
                  name='Otp'
                  place='Enter Here'
                  value={otp}
                  setValue={setOtp}
                 /> :
                  null
                 }
              </View>
            }
            <TouchableOpacity onPress={check} style={{ backgroundColor: COLORS.main, marginTop: 30, borderRadius: 30, paddingVertical: '3%', width: '40%', alignSelf: 'center', alignItems: 'center' }}>
              <Text style={{ fontSize: 18, fontWeight: '500', color: '#fff' }}>Verify</Text>
            </TouchableOpacity>
          </View>
        </View>

      </ScrollView>
    </View>
  )
}

export default Securekycnotverified