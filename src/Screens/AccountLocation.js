import { View, Text, TouchableOpacity, TextInput, ScrollView } from 'react-native'
import React from 'react'
import Icon from 'react-native-vector-icons/Feather'
import { COLORS } from '../Colors/Colors'
import Inputtext from '../Components/Inputtext'

const AccountLocation = ({navigation}) => {
  return (
    <ScrollView contentContainerStyle={{flex:1, paddingBottom: 40, backgroundColor: '#fff' }}>
    <View style={{ flex: 1, backgroundColor: COLORS.white }}>
      <View style={{ width: '90%', alignItems: 'center', justifyContent: 'center', flexDirection: 'row' }}>
        <TouchableOpacity style={{ width: '10%', right: 30 }} onPress={() => navigation.goBack()}>
          <Icon name='arrow-left' size={30} color={COLORS.black} />
        </TouchableOpacity>
        <Text style={{ fontSize: 26, fontWeight: '700', color: COLORS.main }}>Location Details</Text>
      </View>
      <View style={{ flex: 1, width: '90%', alignSelf: 'center', marginTop: 20 }}>
        <Inputtext name={'Country'} place={'India'} val='Notedit' />
        <Inputtext name={'State'} place={'Uttar'} val='Notedit' />
        <Inputtext name={'City'} place={'Kashi'} val='Notedit' />
        <Inputtext name={'Pin Code'} place={'234576'} val='Notedit' />
      </View>
    </View>
  </ScrollView>
  )
}

export default AccountLocation