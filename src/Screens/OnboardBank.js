import { View, Text, TouchableOpacity, TextInput, ScrollView } from 'react-native'
import React from 'react'
import Icon from 'react-native-vector-icons/Feather'
import { COLORS } from '../Colors/Colors'
import Inputtext from '../Components/Inputtext'
import DropdownSelect from '../Components/DropdownSelect'

const OnboardBank = ({ navigation }) => {
  return (
    <ScrollView
      contentContainerStyle={{
        flex: 1,
        paddingBottom: 40,
        backgroundColor: '#fff'
      }}>
      <View style={{
        flex: 1,
        backgroundColor: COLORS.white
      }}>
        <View
          style={{
            width: '90%',
            alignItems: 'center',
            justifyContent: 'center',
            flexDirection: 'row'
          }}>
          <TouchableOpacity
            style={{
              width: '10%',
              right: 30
            }}
            onPress={() => navigation.goBack()}>
            <Icon name='arrow-left' size={30} color={COLORS.black} />
          </TouchableOpacity>
          <Text
            style={{
              fontSize: 26,
              fontWeight: '700',
              color: COLORS.main
            }}>
            User Bank Details
          </Text>
        </View>
        <View
          style={{
            flex: 1,
            width: '90%',
            alignSelf: 'center',
            marginTop: 20
          }}>
          <DropdownSelect nam={'Bank Account Type'} />
          <Inputtext
            name={'Account Number'}
            place={'0011087456'}
            val='Notedit' />
          <Inputtext
            name={'IFSC Code'}
            place={'TOM8765B7'}
            val='Notedit' />
          <Inputtext
            name={'Pan Number'}
            place={'SDFRT4533k'}
            val='Notedit' />
          <View
            style={{
              flexDirection: 'row',
              width: '90%',
              alignSelf: 'center',
              justifyContent: 'space-between',
              marginTop: 40
            }}>
            <TouchableOpacity
              style={{
                backgroundColor: COLORS.main,
                width: '45%',
                alignItems: 'center',
                paddingVertical: 10,
                borderRadius: 8
              }}>
              <Text
                style={{
                  fontSize: 16,
                  fontWeight: '500',
                  color: '#fff'
                }}>
                Submit
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => navigation.navigate('OnboardLocation')}
              style={{
                backgroundColor: COLORS.main,
                width: '45%',
                alignItems: 'center',
                paddingVertical: 10,
                borderRadius: 8
              }}>
              <Text
                style={{
                  fontSize: 16,
                  fontWeight: '500',
                  color: '#fff'
                }}>
                Next
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </ScrollView>
  )
}

export default OnboardBank