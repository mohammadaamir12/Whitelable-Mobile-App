import { View, Text, TouchableOpacity, ScrollView, FlatList,RefreshControl,Modal,StyleSheet,Pressable} from 'react-native'
import { useFocusEffect } from '@react-navigation/native';
import React, { useState, useEffect, useCallback } from 'react'
import { COLORS } from '../Colors/Colors'
import Icon from 'react-native-vector-icons/Feather'
import HomeCartView from '../Components/HomeCartView'
import Inputtext from '../Components/Inputtext'
import Payoutbeneficierycart from '../Components/Payoutbeneficierycart'
import axios from "axios";
import Toast from 'react-native-tiny-toast'
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Base_Url, deletebeneficiary, getbeneficiarybycustomer, loadBeneficiaryList } from '../Config/config'
const PayoutMoneytrans = ({ navigation }) => {
  const [filter, setFilter] = useState(false)
  const [name, setName] = useState('')
  const [consume, setConsume] = useState('')
  const [remaining, setRemaining] = useState('')
  const [deleteactive, setdeleteactive] = useState('')
  const [validate, setvalidate] = useState('')
  const [benepin,setbenepin]=useState('') 
  const [benebankname, setbenebankname] = useState('')
  const [benename, setbenename] = useState('')
  const [beneaccount, setbeneaccount] = useState('')
  const [beneifsc, setbeneifsc] = useState('')
  const [data, setData] = useState('')
  const [beneid, setBeneid] = useState('')
  const [userid, setuserid] = useState('')

 


  useFocusEffect(
    useCallback(() => {
      getpersondetails()
      getbeneficiary()

    }, [])
  );



  const getbeneficiary = async () => {
    const token = await AsyncStorage.getItem('cus_token');
    const id = await AsyncStorage.getItem('cus_id');
    const mobile = await AsyncStorage.getItem('mobile');
    axios.post(Base_Url + getbeneficiarybycustomer, {
      money_transfer_mobile: mobile,
    }, {
      headers: {
        'Content-Type': 'application/json',
        'token': token,
        'cus_id': id

      }
    })
      .then(function (response) {


        if (response.data.status == 'SUCCESS') {
          setbenename(response.data.mtuser_data[0].mtbenf_name)
          setbeneaccount(response.data.mtuser_data[0].mtbenf_account)
          setbenebankname(response.data.mtuser_data[0].mtbenf_bank_name)
          setbeneifsc(response.data.mtuser_data[0].mtbenf_ifsc)
          setvalidate(response.data.mtuser_data[0].mtbenf_status)
          setdeleteactive(response.data.mtuser_data[0].is_active)
          setuserid(response.data.mtuser_data[0].mtuser_id)
          // console.log(response.data.mtuser_data)
          setData(response.data.mtuser_data)
          
        }

      }).catch(function (error) {
        Toast.show(error.response.message)
        //  console.log('hhhh',error.response)
      })

  }
  const handleItemPress = async (mtbenf_id) => {
    // console.log('lkjhgfdsar',mtbenf_id);
    
    const token = await AsyncStorage.getItem('cus_token');
    const id = await AsyncStorage.getItem('cus_id');
    axios.post(Base_Url + deletebeneficiary, {
      mtuser_id: userid,
      benf_id: mtbenf_id
    }, {
      headers: {
        'Content-Type': 'application/json',
        'token': token,
        'cus_id': id

      }
    })
      .then(function (response) {

        
        if (response.data.status == 'SUCCESS') {
          getbeneficiary()
          Toast.show(response.data.message, {
            position: Toast.position.center,
            containerStyle: {},
            textStyle: {},
            imgStyle: {},
            mask: true,

          })


        }

      }).catch(function (error) {
        
         console.log('hhhh',error.response)
      })
  }

  const getpersondetails = async () => {
    const token = await AsyncStorage.getItem('cus_token');
    const id = await AsyncStorage.getItem('cus_id');
    const mobile = await AsyncStorage.getItem('mobile');
    axios.post(Base_Url + loadBeneficiaryList, {
      money_transfer_mobile: mobile,
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
          setConsume(response.data.customerData.consume_limit)
          setRemaining(response.data.customerData.remaining_limit)
          setName(response.data.customerData.mtuser_name)
          // console.log('DD',response.data);
          AsyncStorage.setItem('mtuser_id', response.data.customerData.mtuser_id)
          AsyncStorage.setItem('mtcus_id', response.data.customerData.mtcus_id)

        }

      }).catch(function (error) {
        Toast.show(error.response.message)
        //  console.log('hhhh',error.response)
      })

  }
  const sendMoney=(benf_mobile,benf_account,benf_ifsc,benf_id,benf_name)=>{
    navigation.navigate('PayoutSendMoney',{mobile:benf_mobile,ifsc:benf_ifsc,account:benf_account,id:benf_id,name:benf_name})
  }
  
  return (

    <View style={{ flex: 1, backgroundColor: COLORS.white }}>
      <View style={{ width: '100%', alignItems: 'center', justifyContent: 'center', backgroundColor: COLORS.white, marginTop: 10, flexDirection: 'row' }}>
        <TouchableOpacity style={{ backgroundColor: COLORS.white, width: '10%', left:'5%',position:'absolute' }} onPress={() => navigation.goBack()}>
          <Icon name='arrow-left' size={30} color={COLORS.black} />
        </TouchableOpacity>
        <Text style={{ fontSize: 26, fontWeight: '700', color: COLORS.main }}>Money Transaction</Text>
      </View>
      <View>
        <ScrollView contentContainerStyle={{ paddingBottom: 40 }} showsVerticalScrollIndicator={false}>

          <View style={{ flex: 1 }}>
            <ScrollView horizontal showsHorizontalScrollIndicator={false}>
              <HomeCartView cusName={name} name={'Used Balance'} img={require('../assets/main2.png')} balance={consume} />
              <HomeCartView cusName={name} name={'Remaining Balance'} img={require('../assets/main3.png')} balance={remaining} />
              {/* <HomeCartView cusName={name} name={'Pending balance'} img={require('../assets/main1.png')} balance={'867665000.80'} /> */}
            </ScrollView>
          </View>


          <View style={{ marginTop: 20, flexDirection: 'row', marginVertical: 10, alignSelf: 'center' }}>
            <TouchableOpacity onPress={() => { navigation.navigate('BankBeneficiery') }} style={{ backgroundColor: '#00bfff', borderRadius: 10, alignItems: 'center', width: '45%', justifyContent: 'center', paddingVertical: 15 }}>
              <Text style={{ fontSize: 14, fontWeight: '400', color: COLORS.white }}>Add Bank Beneficiery</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => { navigation.navigate('CreditCardBeneficiery') }} style={{ marginLeft: 5, backgroundColor: '#CF9FFF', borderRadius: 10, alignItems: 'center', paddingVertical: 15, width: '45%', justifyContent: 'center' }}>
              <Text style={{ fontSize: 14, fontWeight: '400', color: COLORS.white }}>Add Credit Card Beneficiery</Text>
            </TouchableOpacity>
          </View>
          <View style={{ flexDirection: 'row', width: '90%', alignSelf: 'center', marginVertical: 13, justifyContent: 'space-between', }}>
            <Text style={{ fontSize: 24, color: '#000', fontWeight: '600', }}>Filter</Text>
            <TouchableOpacity onPress={() => setFilter(!filter)}>
              {filter == true ? <Icon name='chevron-down' size={30} color={'#000'} /> : <Icon name='chevron-right' size={30} color={'#000'} />}
            </TouchableOpacity>
          </View>
          {filter == true ? <View style={{ width: '90%', alignSelf: 'center', }}>
            <Inputtext name={'Baneficiary Name'} place={'Enter Name'} />
            <Inputtext name={'Baneficiary Account'} place={'Account Number'} />
            <View style={{ width: '95%', flexDirection: 'row', justifyContent: 'space-between', alignSelf: 'center', marginTop: 20 }}>
              <TouchableOpacity style={{ backgroundColor: '#F7F1FF', width: '40%', height: 40, borderRadius: 8, alignItems: 'center', justifyContent: 'center', elevation: 2 }}>
                <Text style={{ fontSize: 16, fontWeight: '700', color: '#A699F8' }}>Filter</Text>
              </TouchableOpacity>
              <TouchableOpacity style={{ backgroundColor: '#F7F1FF', width: '40%', height: 40, borderRadius: 8, alignItems: 'center', justifyContent: 'center', elevation: 2 }}>
                <Text style={{ fontSize: 16, fontWeight: '700', color: '#A699F8' }}>Clear Filter</Text>
              </TouchableOpacity>
            </View>

          </View> : null}

          <View style={{}}>
            {console.log(data)}
            <FlatList
              style={{}}
              contentContainerStyle={{ paddingBottom: 40 }}
              scrollEnabled={false}
              showsVerticalScrollIndicator={false}
              data={data}
              extraData={data}
              renderItem={({ item }) =>
                <Payoutbeneficierycart
                  name={item.mtbenf_name}
                  bankname={item.mtbenf_bank_name}
                  account={item.mtbenf_account}
                  ifsc={item.mtbenf_ifsc}
                  validate={validate}
                  deleteactive={deleteactive}
                  onSend={()=> sendMoney(item.mtbenf_mobile,item.mtbenf_account,item.mtbenf_ifsc,item.mtbenf_id,item.mtbenf_name)}
                  onDelete={() => handleItemPress(item.mtbenf_id)}
                />
                 

              }
             keyExtractor={(item,index)=>item.mtbenf_id}
             
            /> 
         
          </View>



        </ScrollView>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22,
  },
  modalView: {
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 35,
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
    borderRadius: 20,
    padding: 10,
    elevation: 2,
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
    marginBottom: 15,
    textAlign: 'center',
  },
});


export default PayoutMoneytrans