import { View, Text, TouchableOpacity, TextInput, ScrollView, ActivityIndicator, Modal } from 'react-native'
import React, { useState, useEffect } from 'react'
import Icon from 'react-native-vector-icons/Feather'
import { COLORS } from '../Colors/Colors'
import Inputtext from '../Components/Inputtext'
import DropdownSelect from '../Components/DropdownSelect'
import { Base_Url, UserProfile, userBankDetails } from '../Config/config'
import axios from "axios";
import Toast from 'react-native-tiny-toast'
import AsyncStorage from '@react-native-async-storage/async-storage';

const OnboardBank = ({ navigation, route }) => {
  const [bank, setBank] = useState('')
  const [bankacc, setBankacc] = useState('')
  const [ifsc, setIfsc] = useState('')
  const [panno, setPanNo] = useState('')
  const [track, settrack] = useState(false)
  const [modalVisible, setModalVisible] = useState(false);

  useEffect(() => {
    // const { props } = route?.params;
    // setBank(props.data.cus_account_type)
    // setBankacc(props.data.cus_account_no)
    // setIfsc(props.data.cus_ifsc)
    // setPanNo(props.data.cus_pan_no)
    call()
    setModalVisible(true)
  },[])
  const call=async()=>{
    const token = await AsyncStorage.getItem('cus_token');
    const id = await AsyncStorage.getItem('cus_id');
    axios.get(Base_Url + UserProfile , {
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
        'token': token,
        'cus_id': id
      }
  })
      .then(function (response) {

          if (response.data.status == 'SUCCESS') {
              // console.log('datta',response.data.userData);
              setBank(response.data.userData.cus_account_type)
              setBankacc(response.data.userData.cus_account_no)
              setIfsc(response.data.userData.cus_ifsc)
              setPanNo(response.data.userData.cus_pan_no)
              setModalVisible(false)
              set();
          }
          else if (response.data.status == 'FAIL') {
              Toast.showSuccess('Failed')
              
          }

      }).catch(function (error) {
          Toast.showSuccess('Server Error')
         
      })
  }
  const set=()=>{
    if(bank!='' && bankacc!='' && ifsc_code!='' && panno!=''){
      settrack(true)
    }
  }
  const submit = async () => {
    if(bank!='' && bankacc!='' && ifsc_code!='' && panno!=''){
      setModalVisible(true)
      // console.log('heloo');
      const token = await AsyncStorage.getItem('cus_token');
      const id = await AsyncStorage.getItem('cus_id');
      axios.post(Base_Url + userBankDetails, {
        account_type: bank,
        account_number: bankacc,
        ifsc_code: ifsc,
        pan_number: panno,
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
            // console.log('56',response.data)
          }
          else if (response.data.status == 'FAIL') {
            Toast.showSuccess('Failed')
            isLoading(false)
            setPhone('')
            setPass('')
          }
  
        }).catch(function (error) {
          Toast.showSuccess('Server Error')
          isLoading(false)
          setPhone('')
          setPass('')
        })
    }
    else{
      Toast.showSuccess('Upload all images')
    }
   

  }
  const next = () => {
    if (track == true && (bankacc!='' && bank!='' && ifsc!='' && panno!='') ) {
      
      navigation.reset({
        index: 0,
        routes: [{ name: 'OnboardLocation'
    }],
    });
    }
  }

  const dropdowngender = [
    { key: '1', value: 'Saving' },
    { key: '2', value: 'Current' },
  ]

  return (
    
    <ScrollView
      contentContainerStyle={{
        flex: 1,
        paddingBottom: 40,
        backgroundColor: '#fff'
      }} showsVerticalScrollIndicator={false}>
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
      <View style={{
        flex: 1,
        backgroundColor: COLORS.white
      }}>
        <View
          style={{
            width: '100%',
            alignItems: 'center',
            justifyContent: 'center',
            flexDirection: 'row'
          }}>
          
          <Text
            style={{
              fontSize: 26,
              fontWeight: '700',
              color: COLORS.main
            }}>
            User Bank Details
          </Text>
        </View>
        <View
          style={{
            flex: 1,
            width: '90%',
            alignSelf: 'center',
            marginTop: 20
          }}>
          <DropdownSelect nam={'Bank Account Type'}
            dropselect={bank}
            setDropselect={setBank}
            showContent='Select Type'
            dropdown={dropdowngender}
          />
          <Inputtext
            name={'Account Number'}
            value={bankacc}
            setValue={setBankacc}
            keyboard={'numeric'}
             />
          <Inputtext
            name={'IFSC Code'}
            value={ifsc}
            setValue={setIfsc}
             />
          <Inputtext
            name={'Pan Number'}
            value={panno}
            setValue={setPanNo}
            />
          <View
            style={{
              flexDirection: 'row',
              width: '90%',
              alignSelf: 'center',
              justifyContent: 'space-between',
              marginTop: 40
            }}>
            <TouchableOpacity
            activeOpacity={0.7}
              onPress={submit}
              style={{
                backgroundColor: COLORS.main,
                width: '45%',
                alignItems: 'center',
                paddingVertical: 10,
                borderRadius: 8
              }}>
              <Text
                style={{
                  fontSize: 16,
                  fontWeight: '500',
                  color: '#fff'
                }}>
                Submit
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
            activeOpacity={0.7}
              onPress={next}
              style={{
                backgroundColor: track == true || (bankacc!='' && bank!='' && ifsc!='' && panno!='')  ? COLORS.main : 'grey',
                width: '45%',
                alignItems: 'center',
                paddingVertical: 10,
                borderRadius: 8
              }}>
              <Text
                style={{
                  fontSize: 16,
                  fontWeight: '500',
                  color: '#fff'
                }}>
                Next
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </ScrollView>
  )
}

export default OnboardBank