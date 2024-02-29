import { View, Text, TouchableOpacity, TextInput, ScrollView, Modal, ActivityIndicator } from 'react-native'
import React, { useEffect, useState } from 'react'
import Icon from 'react-native-vector-icons/Feather'
import { COLORS } from '../Colors/Colors'
import Inputtext from '../Components/Inputtext'
import DropdownSelect from '../Components/DropdownSelect'
import { Base_Url, citybystate, countrylist, statebycountry, updateuserlocation } from '../Config/config'
import axios from "axios";
import Toast from 'react-native-tiny-toast'
import AsyncStorage from '@react-native-async-storage/async-storage';

const OnboardLocation = ({ navigation }) => {
  const [pincode, setPincode] = useState('')
  const [country, setCountry] = useState('')
  const [statemap, setStatemap] = useState('')
  const [Cstate, setCstate] = useState('')
  const [cityMap, setCityMap] = useState('')
  const [city, setCity] = useState('')
  const [track, settrack] = useState(false)
  const [modalVisible, setModalVisible] = useState(false);

  // useEffect(()=>{
  // countrycall()
  // },[])
  // const countrycall=async()=>{
  //   const token = await AsyncStorage.getItem('cus_token');
  //     const id = await AsyncStorage.getItem('cus_id');
  //     axios.get(Base_Url + countrylist , {
  //       headers: {
  //         'Content-Type': 'application/json',
  //         'Access-Control-Allow-Origin': '*',
  //         'token': token,
  //         'cus_id': id
  //       }
  //   })
  //       .then(function (response) {

  //           if (response.data.status == 'Success') {
  //               // console.log('datta',response.data.userData);
  //               console.log('country',response.data.countryList[0].country_name)
  //               // setCountry(response.data.countryList[0].country_name)

  //           }
  //           else if (response.data.status == 'FAIL') {
  //               Toast.showSuccess('Failed')

  //           }

  //       }).catch(function (error) {
  //           Toast.showSuccess('Server Error')

  //       })
  // }
  const getState = async () => {
    setModalVisible(true)
    const token = await AsyncStorage.getItem('cus_token');
    const id = await AsyncStorage.getItem('cus_id');
    axios.post(Base_Url + statebycountry, {
      country_id: '1',
    }, {
      headers: {
        'Content-Type': 'application/json',
        'token': token,
        'cus_id': id

      }
    })
      .then(function (response) {

        if (response.data.status == 'Success') {

          // console.log('56', response.data.stateList)
          let newArray = response.data.stateList.map((item) => {
            return { key: item.state_id, value: item.state_name }
          })
          setStatemap(newArray)
          setModalVisible(false)
          // console.log('array', newArray)
        }
        else if (response.data.status == 'FAIL') {
          Toast.showSuccess('Failed')

        }

      }).catch(function (error) {
        Toast.showSuccess('Server Error')
      })

  }
  const getStateValue = async () => {
    setModalVisible(true)
    // console.log('statecode', Cstate)
    const token = await AsyncStorage.getItem('cus_token');
    const id = await AsyncStorage.getItem('cus_id');
    axios.post(Base_Url + citybystate, {
      state_id: Cstate,
    }, {
      headers: {
        'Content-Type': 'application/json',
        'token': token,
        'cus_id': id

      }
    })
      .then(function (response) {

        if (response.data.status == 'Success') {

          // console.log('56', response.data.cityList)
          let newArray = response.data.cityList.map((item) => {
            return { key: item.city_id, value: item.city_name }
          })

          setCityMap(newArray)
          setCity('')
          setModalVisible(false)

        }
        else if (response.data.status == 'FAIL') {
          Toast.showSuccess('Failed')

        }

      }).catch(function (error) {
        Toast.showSuccess('Server Error')
      })
  }
  const dropdowngender = [
    { key: '1', value: 'India' },
  ]

  const submit = async () => {
    setModalVisible(true)
    // console.log('heloo');
    const token = await AsyncStorage.getItem('cus_token');
    const id = await AsyncStorage.getItem('cus_id');
    axios.post(Base_Url + updateuserlocation, {
      country: '1',
      state: Cstate,
      city: city,
      pincode: pincode,
    }, {
      headers: {
        'Content-Type': 'application/json',
        'token': token,
        'cus_id': id

      }
    })
      .then(function (response) {

        if (response.data.status == 'SUCCESS') {
          Toast.showSuccess('Submitted')
          settrack(true)
          setModalVisible(false)
        }
        else if (response.data.status == 'FAIL') {
          Toast.showSuccess('Failed')

        }

      }).catch(function (error) {
        Toast.showSuccess('Server Error')

      })
  }
  const next = () => {
    if (track == true && (country != '' && Cstate != '' && city != '' && pincode != '')) {

      navigation.reset({
        index: 0,
        routes: [{
          name: 'OnboardDocument'
        }],
      });
    }
  }
  return (
    <ScrollView contentContainerStyle={{ flex: 1, paddingBottom: 40, backgroundColor: '#fff' }} showsVerticalScrollIndicator={false}>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
      >
        <View style={{
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: 'rgba(0,0,0,0.5)',
          marginTop: 0
        }}>
          <ActivityIndicator size="large" color="#fff" />
        </View>
      </Modal>
      <View style={{ flex: 1, backgroundColor: COLORS.white }}>
        <View style={{ width: '90%', alignItems: 'center', justifyContent: 'center', flexDirection: 'row' }}>
          <Text style={{ fontSize: 26, fontWeight: '700', color: COLORS.main }}>Location Details</Text>
        </View>
        <View style={{ flex: 1, width: '90%', alignSelf: 'center', marginTop: 20 }}>
          <DropdownSelect nam={'Country'} dropselect={country} setDropselect={setCountry} dropdown={dropdowngender} showContent={'Select Country'} select={getState} />
          <DropdownSelect nam={'State'} dropselect={Cstate} setDropselect={setCstate} dropdown={statemap} select={getStateValue} type={'type'} />
          <DropdownSelect nam={'City'} dropselect={city} setDropselect={setCity} dropdown={cityMap} type={'type'} />
          <Inputtext name={'Pin Code'} value={pincode} setValue={setPincode} place={'Enter Pincode'} keyboard={'numeric'} length={6} />
          <View style={{ flexDirection: 'row', width: '90%', alignSelf: 'center', justifyContent: 'space-between', marginTop: 40 }}>
            <TouchableOpacity onPress={submit} style={{ backgroundColor: COLORS.main, width: '45%', alignItems: 'center', paddingVertical: 10, borderRadius: 8 }}>
              <Text style={{ fontSize: 16, fontWeight: '500', color: '#fff' }}>Submit</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={next} style={{ backgroundColor: track == true || (country != '' && Cstate != '' && city != '' && pincode != '') ? COLORS.main : 'grey', width: '45%', alignItems: 'center', paddingVertical: 10, borderRadius: 8 }}>
              <Text style={{ fontSize: 16, fontWeight: '500', color: '#fff' }}>Next</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </ScrollView>
  )
}

export default OnboardLocation