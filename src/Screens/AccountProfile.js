import { View, Text, TouchableOpacity, TextInput, ScrollView, } from 'react-native'
import React,{useState,useEffect} from 'react'
import Icon from 'react-native-vector-icons/Feather'
import { COLORS } from '../Colors/Colors'
import Inputtext from '../Components/Inputtext'


const AccountProfile = ({ navigation,route}) => {
  const [referer,setReferer]=useState('')
  const [name,setName]=useState('')
  const [email,setEmail]=useState('')
  const [number,setNumber]=useState('')
  const [shop,setShop]=useState('')
  const [adharno,setAdharno]=useState('')
  const [shopadd,setShopnadd]=useState('')
  const [homeadd,setHomeadd]=useState('')
  useEffect(()=>{
    datafetch();
  },[])
  const datafetch=()=>{
    const {props}=route?.params;
    // console.log('props',props.profiledetails)
    // console.log('hi',props.profiledetails.userData.cus_referer_name);
    setReferer(props.profiledetails.userData.cus_referer_name)
    setName(props.profiledetails.userData.cus_name)
    setEmail(props.profiledetails.userData.cus_email)
    setNumber(props.profiledetails.userData.cus_mobile)
    setAdharno(props.profiledetails.userData.cus_adhar_no)
    setShopnadd(props.profiledetails.userData.cus_shop_address)
    setShop(props.profiledetails.userData.cus_shop_name)
    setHomeadd(props.profiledetails.userData.cus_address)
  }
  
  return (
    <ScrollView contentContainerStyle={{flex:1, paddingBottom: 40, backgroundColor: '#fff' }}>
   
   <View style={{ flex: 1, backgroundColor: COLORS.white }}>
     <View style={{ width: '90%', alignItems: 'center', justifyContent: 'center', flexDirection: 'row' }}>
       <TouchableOpacity style={{ width: '10%', right: 90 }} onPress={() => navigation.goBack()}>
         <Icon name='arrow-left' size={30} color={COLORS.black} />
       </TouchableOpacity>
       <Text style={{ fontSize: 26, fontWeight: '700', color: COLORS.main }}>Profile</Text>
     </View>
     <View style={{ flex: 1, width: '90%', alignSelf: 'center', marginTop: 20 }}>
       <Inputtext name={'Referer'} place={referer} val='Notedit' />
       <Inputtext name={'Name'} place={name} val='Notedit' />
       <Inputtext name={'Email'} place={email} val='Notedit' />
       <Inputtext name={'Contact Number'} place={number} val='Notedit' />
       <Inputtext name={'Adhaar Number'} place={adharno} val='Notedit' />
       <Inputtext name={'Shop Name'} place={shop} val='Notedit' />
       <Inputtext name={'Shop Address'} place={shopadd} val='Notedit' />
       <Inputtext name={'Home Address'} place={homeadd} val='Notedit' />
     </View>
   </View>
 </ScrollView>
   
  )
}

export default AccountProfile