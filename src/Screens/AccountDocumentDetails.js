import { View, Text, TouchableOpacity, TextInput, ScrollView,Image } from 'react-native'
import React,{useState,useEffect} from 'react'
import Icon from 'react-native-vector-icons/Feather'
import { COLORS } from '../Colors/Colors'
import Inputtext from '../Components/Inputtext'


const AccountDocumentDetails = ({ navigation,route }) => {
  const [cusphoto,setcusphoto]=useState('');
  const [cusaddress,setcusaddress]=useState('');
  const [cussignature,setcussignature]=useState('');
  const [cuspancard,setcuspancard]=useState('');
  const [cusshop,setcusshop]=useState('');
  
  
    useEffect(()=>{
      data()
    },[])
    const data=()=>{
      const {props}=route?.params;
      console.log('props',props.profiledetails.userData.cus_documents.cus_photo_image)
      setcusphoto(props.profiledetails.userData.cus_documents.cus_photo_image)
      setcusaddress(props.profiledetails.userData.cus_documents.cus_address_image)
      setcussignature(props.profiledetails.userData.cus_documents.cus_signature_image)
      setcuspancard(props.profiledetails.userData.cus_documents.cus_pancard_image)
      setcusshop(props.profiledetails.userData.cus_documents.shop_photo)
    }
  return (
   
      <View style={{ flex: 1, backgroundColor: COLORS.white }}>
         <ScrollView contentContainerStyle={{flex:1,  paddingBottom: 40, backgroundColor: '#fff' }}>
        <View style={{ width: '100%', alignItems: 'center', justifyContent: 'center', flexDirection: 'row' }}>
          <TouchableOpacity style={{ width: '10%',left:'5%',position:'absolute' }} onPress={() => navigation.goBack()}>
            <Icon name='arrow-left' size={30} color={COLORS.black} />
          </TouchableOpacity>
          <Text style={{ fontSize: 26, fontWeight: '700', color: COLORS.main }}>Document Details</Text>
        </View>
        <View style={{ flex: 1, width: '90%', alignSelf: 'center', marginTop: 20 }}>
           <Image source={{uri:cusphoto}} style={{height:'15%',width:'30%',alignSelf:'center',borderRadius:10,marginTop:8}} />
          <TouchableOpacity activeOpacity={0.7} style={{ backgroundColor: COLORS.main, borderRadius: 8, width: '100%', height: '6%', alignSelf: 'center', marginTop: 30, alignItems: 'center', justifyContent: 'center', elevation: 2, flexDirection: 'row' }}>
            <Icon name='download-cloud' size={25} color={COLORS.white} />
            <Text style={{ fontSize: 18, fontWeight: '500', color: COLORS.white, marginLeft: 20 }}>Customer Photo</Text>
          </TouchableOpacity>
          <Image source={{uri:cusaddress}} style={{height:'15%',width:'30%',alignSelf:'center',borderRadius:10,marginTop:8}} />
          <TouchableOpacity activeOpacity={0.7} style={{ backgroundColor: COLORS.main, borderRadius: 8, width: '100%', height: '6%', alignSelf: 'center', marginTop: 30, alignItems: 'center', justifyContent: 'center', elevation: 2, flexDirection: 'row' }}>
            <Icon name='download-cloud' size={25} color={COLORS.white} />
            <Text style={{ fontSize: 18, fontWeight: '500', color: COLORS.white, marginLeft: 20 }}>Customer Address</Text>
          </TouchableOpacity>
          <Image source={{uri:cussignature}} style={{height:'15%',width:'30%',alignSelf:'center',borderRadius:10,marginTop:8}} />
          <TouchableOpacity activeOpacity={0.7} style={{ backgroundColor: COLORS.main, borderRadius: 8, width: '100%', height: '6%', alignSelf: 'center', marginTop: 30, alignItems: 'center', justifyContent: 'center', elevation: 2, flexDirection: 'row' }}>
            <Icon name='download-cloud' size={25} color={COLORS.white} />
            <Text style={{ fontSize: 18, fontWeight: '500', color: COLORS.white, marginLeft: 20 }}>Customer Signature</Text>
          </TouchableOpacity>
          <Image source={{uri:cuspancard}} style={{height:'15%',width:'30%',alignSelf:'center',borderRadius:10,marginTop:8}} />
          <TouchableOpacity activeOpacity={0.7} style={{ backgroundColor: COLORS.main, borderRadius: 8, width: '100%', height: '6%', alignSelf: 'center', marginTop: 30, alignItems: 'center', justifyContent: 'center', elevation: 2, flexDirection: 'row' }}>
            <Icon name='download-cloud' size={25} color={COLORS.white} />
            <Text style={{ fontSize: 18, fontWeight: '500', color: COLORS.white, marginLeft: 20 }}>Customer Pan Card</Text>
          </TouchableOpacity>
          <Image source={{uri:cusshop}} style={{height:'15%',width:'30%',alignSelf:'center',borderRadius:10,marginTop:8}} />
          <TouchableOpacity activeOpacity={0.7} style={{ backgroundColor: COLORS.main, borderRadius: 8, width: '100%', height: '6%', alignSelf: 'center', marginTop: 30, alignItems: 'center', justifyContent: 'center', elevation: 2, flexDirection: 'row' }}>
            <Icon name='download-cloud' size={25} color={COLORS.white} />
            <Text style={{ fontSize: 18, fontWeight: '500', color: COLORS.white, marginLeft: 20 }}>Customer Shop Photo</Text>
          </TouchableOpacity>
        </View>
        </ScrollView>
      </View>
   
  )
}

export default AccountDocumentDetails