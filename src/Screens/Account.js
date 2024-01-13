import { View, Text, Image, TouchableOpacity, ScrollView } from 'react-native'
import React from 'react'
import { COLORS } from '../Colors/Colors'
import Icon from 'react-native-vector-icons/Feather'
import Menulist from '../Components/Menulist'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';



const Account = ({ navigation }) => {
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
          <View
            style={{
              backgroundColor: '#B8EE00',
              height: hp('10%'),
              width: wp('20%'),
              borderRadius: 40,
              alignItems: 'center',
              justifyContent: 'center',
              marginTop: 20
            }}>
            <Image style={{
              height: hp('9.5%'),
              width: wp('19.5%'),
              borderRadius: 40
            }}
              source={require('../assets/handsome.jpg')} />
          </View>
          <Text
            style={{
              fontSize: 18,
              fontWeight: '700',
              color: COLORS.white,
              marginTop: 15
            }}>
            Abhishek Jajoria
          </Text>
        </View>

        <Menulist
          naam='Profile'
          icon='profile'
        />
        <Menulist
          naam='Bank Details'
          icon='bank' />
        <Menulist
          naam='Location Details'
          icon='location' />
        <Menulist
          naam='Document details'
          icon='text-document'
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