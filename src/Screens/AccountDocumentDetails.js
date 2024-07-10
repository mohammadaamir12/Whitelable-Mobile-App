import { View, Text, TouchableOpacity, TextInput, ScrollView, Image } from 'react-native'
import React, { useState, useEffect } from 'react'
import Icon from 'react-native-vector-icons/Feather'
import { COLORS } from '../Colors/Colors'
import Inputtext from '../Components/Inputtext'


const AccountDocumentDetails = ({ navigation, route }) => {
  const [cusphoto, setcusphoto] = useState('');
  const [cusaddress, setcusaddress] = useState('');
  const [cussignature, setcussignature] = useState('');
  const [cuspancard, setcuspancard] = useState('');
  const [cusshop, setcusshop] = useState('');


  useEffect(() => {
    data()
  }, [])
  const data = () => {
    const { props } = route?.params;
    console.log('props', props.profiledetails.userData.cus_documents.cus_photo_image)
    setcusphoto(props.profiledetails.userData.cus_documents.cus_photo_image)
    setcusaddress(props.profiledetails.userData.cus_documents.cus_address_image)
    setcussignature(props.profiledetails.userData.cus_documents.cus_signature_image)
    setcuspancard(props.profiledetails.userData.cus_documents.cus_pancard_image)
    setcusshop(props.profiledetails.userData.cus_documents.shop_photo)
  }
  return (

    <View style={{backgroundColor:'#fff'}}>

      <View style={{ width: '100%', alignItems: 'center', justifyContent: 'center', flexDirection: 'row', marginTop: 10,backgroundColor:'#fff' }}>
        <TouchableOpacity style={{ width: '10%', left: '5%', position: 'absolute' }} onPress={() => navigation.goBack()}>
          <Icon name='arrow-left' size={30} color={COLORS.black} />
        </TouchableOpacity>
        <Text style={{ fontSize: 26, fontWeight: '700', color: COLORS.main }}>Document Details</Text>
      </View>
      <ScrollView contentContainerStyle={{ flexGrow: 1, paddingBottom: 60, backgroundColor: '#fff' }} showsVerticalScrollIndicator={false}>
        <View style={{ flex: 1, width: '90%', alignSelf: 'center' }}>
          {cusphoto == null ? <Image source={require('../assets/No_image.png')} style={{ paddingVertical: '15%', width: '30%', alignSelf: 'center', borderRadius: 10, marginTop: 30 }} /> : <Image source={{ uri: cusphoto }} style={{ paddingVertical: '15%', width: '30%', alignSelf: 'center', borderRadius: 10, marginTop: 30 }} />}
          <Text style={{ fontSize: 18, color: '#000', fontWeight: '500', alignSelf: 'center', marginTop: 5 }}>Customer Photo</Text>

          {cusaddress == null ? <Image source={require('../assets/No_image.png')} style={{ paddingVertical: '15%', width: '30%', alignSelf: 'center', borderRadius: 10, marginTop: 30 }} /> : <Image source={{ uri: cusaddress }} style={{ paddingVertical: '15%', width: '30%', alignSelf: 'center', borderRadius: 10, marginTop: 30 }} />}
          <Text style={{ fontSize: 18, color: '#000', fontWeight: '500', alignSelf: 'center', marginTop: 5 }}>Customer Address</Text>

          {cussignature == null ? <Image source={require('../assets/No_image.png')} style={{ paddingVertical: '15%', width: '30%', alignSelf: 'center', borderRadius: 10, marginTop: 30 }} /> : <Image source={{ uri: cussignature }} style={{ paddingVertical: '15%', width: '30%', alignSelf: 'center', borderRadius: 10, marginTop: 30 }} />}
          <Text style={{ fontSize: 18, color: '#000', fontWeight: '500', alignSelf: 'center', marginTop: 5 }}>Customer Signature</Text>

          {cuspancard == null ? <Image source={require('../assets/No_image.png')} style={{ paddingVertical: '15%', width: '30%', alignSelf: 'center', borderRadius: 10, marginTop: 30 }} /> : <Image source={{ uri: cuspancard }} style={{ paddingVertical: '15%', width: '30%', alignSelf: 'center', borderRadius: 10, marginTop: 30 }} />}
          <Text style={{ fontSize: 18, color: '#000', fontWeight: '500', alignSelf: 'center', marginTop: 5 }}>Customer Photo</Text>

          {cusshop == null ? <Image source={require('../assets/No_image.png')} style={{ paddingVertical: '15%', width: '30%', alignSelf: 'center', borderRadius: 10, marginTop: 30 }} /> : <Image source={{ uri: cusshop }} style={{ paddingVertical: '15%', width: '30%', alignSelf: 'center', borderRadius: 10, marginTop: 30 }} />}
          <Text style={{ fontSize: 18, color: '#000', fontWeight: '500', alignSelf: 'center', marginTop: 5 }}>Customer Shop Photo</Text>


        </View>
      </ScrollView>
    </View>

  )
}

export default AccountDocumentDetails