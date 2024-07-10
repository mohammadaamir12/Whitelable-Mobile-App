import { View, Text, Image, TouchableOpacity, ScrollView } from 'react-native'
import React,{createContext, useEffect,useState} from 'react'
import { COLORS } from '../Colors/Colors'
import Icon from 'react-native-vector-icons/Feather'
import Menulist from '../Components/Menulist'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Base_Url, UserProfile } from '../Config/config'
import axios from 'axios';
import Toast from 'react-native-tiny-toast'



const Account = ({ navigation }) => {
  const [profilename,setProfilename]=useState('')
  const [profiledata,setProfiledata]=useState('')
  useEffect(()=>{
    get();
},[])
useEffect(()=>{
  profilecall();
},[])
const profilecall=async()=>{
  const token = await AsyncStorage.getItem('cus_token');
  const id = await AsyncStorage.getItem('cus_id');
  // console.log("token", token);
  // console.log("id", id);
  axios.get(Base_Url + UserProfile, {
    headers: {
      'Content-Type': 'application/json',
      'token': token,
      'cus_id': id
    }
  })
    .then(function (response) {

      if (response.data.status == 'SUCCESS') {
     setProfiledata(response.data)
       
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

    const get=async()=>{
   const get=await AsyncStorage.getItem('profilename');
   setProfilename(get)
    }
   
  return (

<View style={{ 
      flex: 1,
      backgroundColor: COLORS.white,
    }}>
      <ScrollView style={{bottom:10}}>
        <View
          style={{
            backgroundColor: COLORS.main,
            height: hp('30%'),
            borderBottomRightRadius: 25,
            borderBottomLeftRadius: 20,
            alignItems: 'center'
          }}>
          <TouchableOpacity
            activeOpacity={0.8}
            style={{
              position: 'absolute',
              alignSelf: 'flex-start',
              top: hp('3%'),
              left: wp('4%')
            }}
            onPress={() => { navigation.openDrawer() }}>
            <Icon
              name='menu'
              size={24}
              style={{ color: COLORS.white }} />
          </TouchableOpacity>
          <Text
            style={{
              fontSize: 20,
              fontWeight: '700',
              color: COLORS.white,
              marginTop: hp("5%")
            }}>
            My Profile
          </Text>
          {/* <View
            style={{
              backgroundColor: '#B8EE00',
              height: hp('10%'),
              width: wp('21%'),
              borderRadius: 40,
              alignItems: 'center',
              justifyContent: 'center',
              marginTop: 20
            }}> */}
            <Image style={{
              height: hp('10%'),
              width: wp('20%'),
              borderRadius: 40,
              alignItems:'center',
              justifyContent:'center',
              marginTop:8
            }}
              source={require('../assets/handsome.jpg')} />
          {/* </View> */}
          <Text
            style={{
              fontSize: 18,
              fontWeight: '700',
              color: COLORS.white,
              marginTop: 8
            }}>
            {profilename}
          </Text>
        </View>

        <Menulist
          naam='Profile'
          icon='profile'
          profiledetails={profiledata}
        />
        <Menulist
          naam='Bank Details'
          icon='bank' 
          profiledetails={profiledata}
          />
        <Menulist
          naam='Location Details'
          icon='location'
          profiledetails={profiledata}
          />
        <Menulist
          naam='Document details'
          icon='text-document'
          profiledetails={profiledata}
        />
        <Menulist
          naam='Change Password'
          icon='published-with-changes'
        />
        <Menulist
          naam='Change Pin'
          icon='key-change'
        />
        <Menulist
          naam='Logout'
          icon='logout'
        />
      </ScrollView>
    </View>

    


  )
}

export default Account