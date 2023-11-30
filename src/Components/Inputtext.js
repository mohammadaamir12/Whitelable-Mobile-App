import { View, Text,TextInput,TouchableOpacity} from 'react-native'
import React from 'react'
import { COLORS } from '../Colors/Colors'
import Icon from 'react-native-vector-icons/Feather'

const Inputtext = ({
  name,
  place
}) => {
  return (
    <View style={{backgroundColor:COLORS.white}}>
        <Text style={{marginTop:20,fontSize:14,fontWeight:'400',color:'grey'}}>{name}</Text>
        <TextInput placeholder={place} style={{borderWidth:1,borderColor:'grey',fontSize:17,borderRadius:10,paddingStart:20,marginTop:2}} 
        // value={number}
        // onChangeText={setNumber}
        keyboardType='numeric'
        maxLength={10}
        />
        {/* {errNum?<Text style={{fontSize:14,color:'red',marginTop:5}}>Input valid number!</Text>:null} */}
        </View>
  )
}

export default Inputtext