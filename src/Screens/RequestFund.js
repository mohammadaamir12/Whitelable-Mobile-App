import { PermissionsAndroid,Alert, View, Text, TouchableOpacity, TextInput, ScrollView, Modal, StyleSheet } from 'react-native'
import React, { useState,useEffect } from 'react'
import Icon from 'react-native-vector-icons/Feather'
import { COLORS } from '../Colors/Colors'
import Inputtext from '../Components/Inputtext'
import DropdownSelect from '../Components/DropdownSelect'
import InternetAvl from './InternetAvl'
import { Base_Url, FundRequest } from '../Config/config'
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';
import Toast from 'react-native-tiny-toast'
import { launchCamera, launchImageLibrary } from 'react-native-image-picker';


const RequestFund = ({ navigation }) => {
  const [isConnected, setIsConnected] = useState(false);
  const [chooseFile, setChooseFile] = useState(null);
  const [amount, setAmount] = useState('');
  const [reference, setReference] = useState('');
  const [modal, setModal] = useState(false);
  // const [amount,setAmount]=useState('');
  // const [amount,setAmount]=useState('');
  // const [amount,setAmount]=useState('');

  // useEffect(()=>{
  //   hasPermissin();
  // },[])
  const file =async () => {
    
    let options = {
      storageOptions: {
        path: 'image',
      },
    };
    launchImageLibrary(options, response => {
      if (response.didCancel) {
        console.log('User cancelled image picker');
      }
      else if (response.error) {
        console.log('ImagePicker Error: ', response.error);
      }
      else {
        setModal(false)
        setChooseFile(response.assets[0].uri)
        console.log(response.assets[0].uri);
        
      }

    })
  }

  const hasPermissin= async()=>{
    const permission = PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE;
    const isPermission = await PermissionsAndroid.request(permission);
    console.log('check',isPermission);
    if (isPermission===PermissionsAndroid.RESULTS.GRANTED) {
      console.log('granted')
    }
    else{
      console.log('not granted');
    }
  
  }

  const file1 =async () => {
    
    let options = {
      storageOptions: {
        path: 'image',
      },
    };
    
      launchCamera(options, response => {
        if (response.didCancel) {
          console.log('User cancelled image picker');
        }
        else if (response.error) {
          console.log('ImagePicker Error: ', response.error);
        }
        else {
          setModal(false)
          setChooseFile(response.assets[0].uri)
          // console.log(response.assets[0].uri);
        }
        
      })
    
    
   
  }
  const req = async () => {
    
    const token = await AsyncStorage.getItem('cus_token');
    const id = await AsyncStorage.getItem('cus_id');
    const data = new FormData();
    data.append('amount', 'raphael');
    data.append('bankname', 'raphael');
    data.append('payment_mode', 'raphael');
    data.append('reference_number', 'raphael');
    data.append('remarks', 'raphael');
    data.append('receipt', chooseFile);
    axios.post(Base_Url + FundRequest, {
      body: data,
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
        'token': token,
        'cus_id': id
      }
    })
      .then(function (response) {

        if (response.data.status == 'SUCCESS') {
          console.log(response);
          // console.log("response",response.data.tranaction.payout_transaction[0].amount);   
        }
        else {

          Toast.show('Failed', {
            position: Toast.position.center,
            containerStyle: {},
            textStyle: {},
          })
        }
      }).catch(function (error) {
        Toast.show('Request failed', {
          position: Toast.position.center,
          containerStyle: {},
          textStyle: {},
        })
      })
  }
  return (
    <View style={{ flex: 1 }}>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modal}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <TouchableOpacity activeOpacity={0.7} onPress={file1} style={{ borderColor: '#000', borderWidth: 1, padding: 5, borderRadius: 8, width: '80%', height: '20%', alignItems: 'center', justifyContent: 'center' }}>
              <Text style={styles.modalText}>Open Camera</Text>
            </TouchableOpacity>
            <TouchableOpacity activeOpacity={0.7} onPress={file} style={{ borderColor: '#000', borderWidth: 1, padding: 5, borderRadius: 8, width: '80%', height: '20%', alignItems: 'center', justifyContent: 'center', top: 10 }}>
              <Text style={styles.modalText}>Open Gallery</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={[styles.button, styles.buttonClose]}
              onPress={() => setModal(!modal)}>
              <Text style={styles.textStyle}>Close</Text>
            </TouchableOpacity>

          </View>
        </View>
      </Modal>

      <ScrollView contentContainerStyle={{ paddingBottom: 40, backgroundColor: '#fff' }}>
        <View style={{ flex: 1, backgroundColor: COLORS.white }}>
          <View style={{ width: '90%', alignItems: 'center', justifyContent: 'center', flexDirection: 'row' }}>
            <TouchableOpacity style={{ width: '10%', right: 50 }} onPress={() => navigation.goBack()}>
              <Icon name='arrow-left' size={30} color={COLORS.black} />
            </TouchableOpacity>
            <Text style={{ fontSize: 26, fontWeight: '700', color: COLORS.main }}>Fund Request</Text>
          </View>
          <View style={{ flex: 1, width: '90%', alignSelf: 'center', marginTop: 20 }}>
            <Inputtext name={'Request To'} place={'Admin'} />
            <Inputtext name={'Amount'} place={'Enter Amount'} value={amount} setValue={setAmount} />
            <Inputtext name={'Reference Number'} place={'Enter Number'} value={reference} setValue={setReference} />
            <DropdownSelect nam='Txn Type' sty={5} />
            <DropdownSelect nam='Bank' sty={5} />
            <DropdownSelect nam='Payment Mode' sty={5} />
            <View style={{ backgroundColor: COLORS.white }}>
              <Text style={{ marginTop: 10, fontSize: 14, fontWeight: '400', color: 'grey' }}>Receipt</Text>
              <View style={{ justifyContent: 'center' }}>
                <TextInput placeholder={chooseFile == null ? 'Pick a Image' : 'Image Selected'} style={{ borderWidth: 1, borderColor: 'grey', fontSize: 17, borderRadius: 10, paddingStart: 20, marginTop: 2 }}
                  editable={false}
                  placeholderTextColor={chooseFile==null?'grey':COLORS.main}
                />
                <TouchableOpacity onPress={() => setModal(true)} activeOpacity={0.7} style={{ position: 'absolute', right: 20, backgroundColor: '#D0D0D0', borderRadius: 5, padding: 6, borderColor: '#888888', borderWidth: 1 }}>
                  <Text style={{ color: '#000', fontSize: 14, fontWeight: '400' }}>Choose Files</Text>
                </TouchableOpacity>
              </View>
              <Inputtext name={'Review'} />
            </View>
            <TouchableOpacity activeOpacity={0.7} style={{ backgroundColor: COLORS.main, borderRadius: 30, width: '80%', height: '7%', alignSelf: 'center', marginTop: 30, alignItems: 'center', justifyContent: 'center', elevation: 2 }}>
              <Text style={{ fontSize: 20, fontWeight: '700', color: COLORS.white }}>Submit</Text>
            </TouchableOpacity>
          </View>


        </View>
      </ScrollView>
      <InternetAvl isConnected={isConnected} setIsConnected={setIsConnected} />
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
  modalView: {
    height: 200,
    width: 200,
    backgroundColor: 'white',
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  button: {
    borderRadius: 10,
    padding: 6,
    elevation: 2,
    top: 25
  },
  buttonOpen: {
    backgroundColor: '#F194FF',
  },
  buttonClose: {
    backgroundColor: '#2196F3',
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  modalText: {
    textAlign: 'center',
    fontWeight: '500',
    color: 'grey'
  },
});

export default RequestFund