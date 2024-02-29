import { View, Text, TextInput,} from 'react-native'
import React from 'react'
import { COLORS } from '../Colors/Colors'


const Inputtext = ({
  name,
  place,
  val,
  value,
  setValue,
  keyboard,
  length
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
        placeholderTextColor={'#000'}
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
        value={value}
        onChangeText={setValue}
        placeholderTextColor={'grey'}
        style={{
          borderWidth: 1,
          borderColor: 'grey',
          fontSize: 17,
          borderRadius: 10,
          paddingStart: 20,
          marginTop: 2
        }}
        keyboardType={keyboard}
        maxLength={length}
      />}
    </View>
  )
}

export default Inputtext