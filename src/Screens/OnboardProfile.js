import { View, Text, TouchableOpacity, TextInput, ScrollView, Modal, StyleSheet, ActivityIndicator } from 'react-native'
import React, { useEffect, useState } from 'react'
import Icon from 'react-native-vector-icons/Feather'
import { COLORS } from '../Colors/Colors'
import Inputtext from '../Components/Inputtext'
import DropdownSelect from '../Components/DropdownSelect'
import { Base_Url, UserProfile } from '../Config/config'
import axios from "axios";
import Toast from 'react-native-tiny-toast'
import AsyncStorage from '@react-native-async-storage/async-storage';
import { StackActions } from '@react-navigation/native';
const OnboardProfile = ({ navigation, }) => {
  const [data, setdata] = useState('')
  const [referer, setReferer] = useState('')
  const [cusName, setCusName] = useState('')
  const [email, setEmail] = useState('')
  const [cusCategory, setCusCategory] = useState('')
  const [cusType, setCusType] = useState('')
  const [contactno, setContactno] = useState('')
  const [adharno, setAdharno] = useState('')
  const [shop, setShop] = useState('')
  const [sex, setSex] = useState('')
  const [shopAdd, setShopAdd] = useState('')
  const [homeadd, setHomeadd] = useState('')
  const [modalVisible, setModalVisible] = useState(false);
  useEffect(() => {
    setModalVisible(true)
    profile();
  }, [])
  const profile = async () => {
    const token = await AsyncStorage.getItem('cus_token');
    const id = await AsyncStorage.getItem('cus_id');
    axios.get(Base_Url + UserProfile, {
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
        'token': token,
        'cus_id': id
      }
    })
      .then(function (response) {

        if (response.data.status == 'SUCCESS') {
          setModalVisible(false)
          setdata(response.data.userData)
          setCusName(response.data.userData.cus_name)
          setReferer(response.data.userData.cus_referer_name)
          setEmail(response.data.userData.cus_email)
          setCusCategory(response.data.userData.cus_category)
          setCusType(response.data.userData.cus_type)
          setContactno(response.data.userData.cus_mobile)
          setAdharno(response.data.userData.cus_adhar_no)
          setShop(response.data.userData.cus_shop_name)
          setShopAdd(response.data.userData.cus_shop_address)
          setHomeadd(response.data.userData.cus_address)
          setSex(response.data.userData.cus_sex)
        }
        else if (response.data.status == 'FAIL') {
          Toast.showSuccess('Failed')

        }

      }).catch(function (error) {
        Toast.showSuccess('Server Error')

      })
  }

  return (

    <View style={{ flex: 1, backgroundColor: COLORS.white }}>
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
      <ScrollView contentContainerStyle={{ paddingBottom: 40, backgroundColor: '#fff' }} showsVerticalScrollIndicator={false}>
        <View style={{ alignItems: 'center', justifyContent: 'center', flexDirection: 'row' }}>
          {/* <TouchableOpacity style={{ width: '10%', right: 30 }} onPress={() => navigation.goBack()}>
          <Icon name='arrow-left' size={30} color={COLORS.black} />
        </TouchableOpacity> */}
          <Text style={{ fontSize: 26, fontWeight: '700', color: COLORS.main }}>Complete Profile</Text>
        </View>

        <View style={{ flex: 1, width: '90%', alignSelf: 'center', marginTop: 20 }}>
          <Inputtext name={'Referer'} place={referer} val={'Notedit'} />
          <Inputtext name={'Customer Name'} place={cusName} val={'Notedit'} />
          <Inputtext name={'Email'} place={email} val={'Notedit'} />
          <Inputtext name={'Customer Category'} place={cusCategory} val={'Notedit'} />
          <Inputtext name={'Customer Type'} place={cusType} val={'Notedit'} />
          <Inputtext name={'Gender'} place={sex} val={'Notedit'} />
          <Inputtext name={'Contact Number'} place={contactno} val={'Notedit'} />
          <Inputtext name={'Adhaar Number'} place={adharno} val={'Notedit'} />
          <Inputtext name={'Shop Name'} place={shop} val={'Notedit'} />
          <Inputtext name={'Shop Address'} place={shopAdd} val={'Notedit'} />
          <Inputtext name={'Home Address'} place={homeadd} val={'Notedit'} />
        </View>
        <View style={{ width: '90%', alignSelf: 'center', marginTop: 20 }}>
          {/* <TouchableOpacity style={{backgroundColor:COLORS.main,width:'45%',alignItems:'center',paddingVertical:10,borderRadius:8}}>
            <Text style={{fontSize:16,fontWeight:'500',color:'#fff'}}>Submit</Text>
        </TouchableOpacity> */}
          <TouchableOpacity onPress={() => navigation.dispatch(StackActions.replace('OnboardBank', { props: { data } }))} style={{ backgroundColor: COLORS.main, width: '45%', alignItems: 'center', paddingVertical: 10, borderRadius: 8, alignSelf: 'flex-end' }}>
            <Text style={{ fontSize: 16, fontWeight: '500', color: '#fff' }}>Next</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>

  )
}
const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,0.5)',
    marginTop: 0
  },

});
export default OnboardProfile