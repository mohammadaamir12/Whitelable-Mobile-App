import { View, Text, TouchableOpacity, TextInput, ScrollView } from 'react-native'
import React from 'react'
import Icon from 'react-native-vector-icons/Feather'
import { COLORS } from '../Colors/Colors'
import Inputtext from '../Components/Inputtext'
import DropdownSelect from '../Components/DropdownSelect'

const AccountProfile = ({ navigation }) => {
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
          <Inputtext name={'Referer'} place={'Admin'} val='Notedit' />
          <Inputtext name={'Name'} place={'Computer Operator'} val='Notedit' />
          <Inputtext name={'Email'} place={'Com@gmail.com'} val='Notedit' />
          <Inputtext name={'Contact Number'} place={'1234567898'} val='Notedit' />
          <Inputtext name={'Adhaar Number'} place={'234554326785'} val='Notedit' />
          <Inputtext name={'Shop Name'} place={'Fun Shop'} val='Notedit' />
          <Inputtext name={'Shop Address'} place={'Fun Nagar, Delhi'} val='Notedit' />
          <Inputtext name={'Home Address'} place={'fun House'} val='Notedit' />
        </View>
      </View>
    </ScrollView>
  )
}

export default AccountProfile