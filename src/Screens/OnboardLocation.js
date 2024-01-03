import { View, Text, TouchableOpacity, TextInput, ScrollView } from 'react-native'
import React from 'react'
import Icon from 'react-native-vector-icons/Feather'
import { COLORS } from '../Colors/Colors'
import Inputtext from '../Components/Inputtext'
import DropdownSelect from '../Components/DropdownSelect'

const OnboardLocation = ({ navigation }) => {
  return (
    <ScrollView contentContainerStyle={{ flex: 1, paddingBottom: 40, backgroundColor: '#fff' }}>
      <View style={{ flex: 1, backgroundColor: COLORS.white }}>
        <View style={{ width: '90%', alignItems: 'center', justifyContent: 'center', flexDirection: 'row' }}>
          <TouchableOpacity style={{ width: '10%', right: 30 }} onPress={() => navigation.goBack()}>
            <Icon name='arrow-left' size={30} color={COLORS.black} />
          </TouchableOpacity>
          <Text style={{ fontSize: 26, fontWeight: '700', color: COLORS.main }}>Location Details</Text>
        </View>
        <View style={{ flex: 1, width: '90%', alignSelf: 'center', marginTop: 20 }}>
          <DropdownSelect nam={'Country'} />
          <DropdownSelect nam={'State'} />
          <DropdownSelect nam={'City'} />
          <Inputtext name={'Pin Code'} place={'234576'} val='Notedit' />
          <View style={{ flexDirection: 'row', width: '90%', alignSelf: 'center', justifyContent: 'space-between', marginTop: 40 }}>
            <TouchableOpacity style={{ backgroundColor: COLORS.main, width: '45%', alignItems: 'center', paddingVertical: 10, borderRadius: 8 }}>
              <Text style={{ fontSize: 16, fontWeight: '500', color: '#fff' }}>Submit</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate('OnboardDocument')} style={{ backgroundColor: COLORS.main, width: '45%', alignItems: 'center', paddingVertical: 10, borderRadius: 8 }}>
              <Text style={{ fontSize: 16, fontWeight: '500', color: '#fff' }}>Next</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </ScrollView>
  )
}

export default OnboardLocation