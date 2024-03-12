import { View, Text, TouchableOpacity, ScrollView, FlatList,ActivityIndicator } from 'react-native'
import React, { useState,useEffect } from 'react'
import { COLORS } from '../Colors/Colors'
import Icon from 'react-native-vector-icons/Feather'
import Historycom from '../Components/Historycom'
import Inputtext from '../Components/Inputtext'
import DropdownSelect from '../Components/DropdownSelect'
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';
import { Base_Url, payReport } from '../Config/config'
import Toast from 'react-native-tiny-toast'

const PayoutReoprt = ({ navigation }) => {
  const [filter, setFilter] = useState(false)
  const [payoutReport,setPayoutReport]=useState([])
  const [loader,setLoader]=useState(false)
  useEffect(()=>{
    report();
    
  },[])
  const report= async() =>{
    const token = await AsyncStorage.getItem('cus_token');
      const id = await AsyncStorage.getItem('cus_id');
      axios.get(Base_Url+payReport, {
        headers: {
        'Content-Type':'application/json',
        'token':token,
        'cus_id':id
      }
    })
        .then(function (response) {
  
            if (response.data.status == 'SUCCESS') {
             setPayoutReport(response.data.allreports)
             setLoader(true)
                console.log('sdddd',response.data.allreports);
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
          console.log(error)
          })
          
  }
  return (
    <View style={{ flex: 1, backgroundColor: COLORS.white }}>
      {loader==false?<View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: '#fff' }} >
                <ActivityIndicator size="large" color={COLORS.main} />
            </View>:<ScrollView showsVerticalScrollIndicator={false}>
        <View style={{ width: '100%', alignItems: 'center', justifyContent: 'center', backgroundColor: COLORS.white, marginTop: 10, flexDirection: 'row' }}>
          <TouchableOpacity style={{ backgroundColor: COLORS.white, width: '10%',position:'absolute',left:'5%'  }} onPress={() => navigation.goBack()}>
            <Icon name='arrow-left' size={30} color={COLORS.black} />
          </TouchableOpacity>
          <Text style={{ fontSize: 26, fontWeight: '700', color: COLORS.main }}>Payout Report</Text>
        </View>
        <View style={{ flexDirection: 'row', width: '90%', alignSelf: 'center',marginVertical:13, justifyContent: 'space-between', }}>
          <Text style={{ fontSize: 24, color: '#000', fontWeight: '600', }}>Filter</Text>
          <TouchableOpacity onPress={() => setFilter(!filter)}>
          {filter == true ? <Icon name='chevron-down' size={30} color={'#000'} /> : <Icon name='chevron-right' size={30} color={'#000'} />}
          </TouchableOpacity>
          
        </View>
        {filter==true? <View style={{ flex: 1, width: '90%', alignSelf: 'center', marginVertical: 15 }}>
          <Inputtext name={'From'} place={'DD/MM/YY'} />
          <Inputtext name={'To'} place={'DD/MM/YY'} />
          <Inputtext name={'Transaction ID'} place={'Enter Order ID'} />
          <Inputtext name={'Sender Mobile'} place={'Enter Number'} />
          <Inputtext name={'Account No'} place={'Enter Account Number'} />
          <DropdownSelect nam='Status' />
          <View style={{ width: '95%', flexDirection: 'row', justifyContent: 'space-between', alignSelf: 'center', marginTop: 20 }}>
            <TouchableOpacity style={{ backgroundColor: '#F7F1FF', width: '40%', height: 40, borderRadius: 8, alignItems: 'center', justifyContent: 'center', elevation: 2 }}>
              <Text style={{ fontSize: 16, fontWeight: '700', color: '#A699F8' }}>Filter</Text>
            </TouchableOpacity>
            <TouchableOpacity style={{ backgroundColor: '#F7F1FF', width: '40%', height: 40, borderRadius: 8, alignItems: 'center', justifyContent: 'center', elevation: 2 }}>
              <Text style={{ fontSize: 16, fontWeight: '700', color: '#A699F8' }}>Clear Filter</Text>
            </TouchableOpacity>
          </View>

        </View>:null}
       
        <View>
        <FlatList
        scrollEnabled={false}
         showsVerticalScrollIndicator={false}
        data={payoutReport}
        renderItem={({item})=>
        <Historycom nam={item.order_id} amt={item.credit_amount} imgg={require('../assets/handsome.jpg')} sub={item.txn_status_desc} dat={item.paytm_txn_datetime} />
        }
        />
          {/* <Historycom nam={'Aamir'} amt={'140.30'} imgg={require('../assets/handsome.jpg')} sub={'Subscription'} dat={'18 sept 2023'} />
          <Historycom nam={'Rafat'} amt={'2240'} imgg={require('../assets/young.jpg')} sub={'Subscription'} dat={'12 nov 2023'} />
          <Historycom nam={'Prashant (Tester)'} amt={'540.90'} imgg={require('../assets/younggirl.jpg')} sub={'Subscription'} dat={'11 jul 2023'} />
          <Historycom nam={'Aamir'} amt={'140.30'} imgg={require('../assets/handsome.jpg')} sub={'Subscription'} dat={'18 sept 2023'} />
          <Historycom nam={'Rafat'} amt={'2240'} imgg={require('../assets/young.jpg')} sub={'Subscription'} dat={'12 nov 2023'} />
          <Historycom nam={'Prashant (Tester)'} amt={'540.90'} imgg={require('../assets/younggirl.jpg')} sub={'Subscription'} dat={'11 jul 2023'} />
          <Historycom nam={'Aamir'} amt={'140.30'} imgg={require('../assets/handsome.jpg')} sub={'Subscription'} dat={'18 sept 2023'} />
          <Historycom nam={'Rafat'} amt={'2240'} imgg={require('../assets/young.jpg')} sub={'Subscription'} dat={'12 nov 2023'} />
          <Historycom nam={'Prashant (Tester)'} amt={'540.90'} imgg={require('../assets/younggirl.jpg')} sub={'Subscription'} dat={'11 jul 2023'} />
          <Historycom nam={'Aamir'} amt={'140.30'} imgg={require('../assets/handsome.jpg')} sub={'Subscription'} dat={'18 sept 2023'} />
          <Historycom nam={'Rafat'} amt={'2240'} imgg={require('../assets/young.jpg')} sub={'Subscription'} dat={'12 nov 2023'} />
          <Historycom nam={'Prashant (Tester)'} amt={'540.90'} imgg={require('../assets/younggirl.jpg')} sub={'Subscription'} dat={'11 jul 2023'} />
          <Historycom nam={'Aamir'} amt={'140.30'} imgg={require('../assets/handsome.jpg')} sub={'Subscription'} dat={'18 sept 2023'} />
          <Historycom nam={'Rafat'} amt={'2240'} imgg={require('../assets/young.jpg')} sub={'Subscription'} dat={'12 nov 2023'} />
          <Historycom nam={'Prashant (Tester)'} amt={'540.90'} imgg={require('../assets/younggirl.jpg')} sub={'Subscription'} dat={'11 jul 2023'} /> */}

        </View>
      </ScrollView>}
      
    </View>
  )
}

export default PayoutReoprt