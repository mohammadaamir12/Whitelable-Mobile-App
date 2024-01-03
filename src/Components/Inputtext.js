import { View, Text, TextInput,} from 'react-native'
import React from 'react'
import { COLORS } from '../Colors/Colors'


const Inputtext = ({
  name,
  place,
  val
}) => {
  return (
    <View style={{ backgroundColor: COLORS.white }}>
      <Text
        style={{
          marginTop: 10,
          fontSize: 14,
          fontWeight: '400',
          color: 'grey'
        }}>
        {name}
      </Text>
      {val == 'Notedit' ? <TextInput
        placeholder={place}
        placeholderTextColor={'grey'}
        style={{
          borderWidth: 1,
          borderColor: 'grey',
          fontSize: 17,
          borderRadius: 10,
          paddingStart: 20,
          marginTop: 2
        }}
        editable={false}
      /> : <TextInput
        placeholder={place}
        placeholderTextColor={'grey'}
        style={{
          borderWidth: 1,
          borderColor: 'grey',
          fontSize: 17,
          borderRadius: 10,
          paddingStart: 20,
          marginTop: 2
        }}
        keyboardType='numeric'
        maxLength={10}
      />}
    </View>
  )
}

export default Inputtext