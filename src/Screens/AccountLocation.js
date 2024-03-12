import { View, Text, TouchableOpacity, TextInput, ScrollView } from 'react-native'
import React,{useEffect,useState} from 'react'
import Icon from 'react-native-vector-icons/Feather'
import { COLORS } from '../Colors/Colors'
import Inputtext from '../Components/Inputtext'

const AccountLocation = ({navigation,route}) => {
  const [cuscity,setcuscity]=useState('');
const [cusstate,setcusstate]=useState('');
const [pincode,setpincode]=useState('');


  useEffect(()=>{
    data()
  },[])
  const data=()=>{
    const {props}=route?.params;
    console.log('props',props.profiledetails.userData.cus_ifsc)
    setcuscity(props.profiledetails.userData.cus_city)
    setpincode(props.profiledetails.userData.cus_pincode)
    setcusstate(props.profiledetails.userData.cus_state)
  }
  return (
    <ScrollView contentContainerStyle={{flex:1, paddingBottom: 40, backgroundColor: '#fff' }}>
    <View style={{ flex: 1, backgroundColor: COLORS.white }}>
      <View style={{ width: '100%', alignItems: 'center', justifyContent: 'center', flexDirection: 'row' }}>
        <TouchableOpacity style={{ width: '10%', left:'5%',position:'absolute' }} onPress={() => navigation.goBack()}>
          <Icon name='arrow-left' size={30} color={COLORS.black} />
        </TouchableOpacity>
        <Text style={{ fontSize: 26, fontWeight: '700', color: COLORS.main }}>Location Details</Text>
      </View>
      <View style={{ flex: 1, width: '90%', alignSelf: 'center', marginTop: 20 }}>
        <Inputtext name={'Country'} place={'India'} val='Notedit' />
        <Inputtext name={'State'} place={cusstate} val='Notedit' />
        <Inputtext name={'City'} place={cuscity} val='Notedit' />
        <Inputtext name={'Pin Code'} place={pincode} val='Notedit' />
      </View>
    </View>
  </ScrollView>
  )
}

export default AccountLocation