import { View, Text,TouchableOpacity } from 'react-native'
import React from 'react'
import Inputtext from '../Components/Inputtext'
import { COLORS } from '../Colors/Colors'
import Icon from 'react-native-vector-icons/Feather'
import DropdownSelect from '../Components/DropdownSelect'

const RequestFund = ({navigation}) => {
  return (
    <View style={{flex:1,backgroundColor:COLORS.white}}>
    <View style={{width:'90%',alignItems:'center',justifyContent:'center',backgroundColor:COLORS.white,marginTop:10,flexDirection:'row'}}>
    <TouchableOpacity style={{backgroundColor:COLORS.white,width:'10%',right:60}} onPress={() => navigation.goBack()}>
    <Icon name='arrow-left' size={30} color={COLORS.black} />
    </TouchableOpacity>
    <Text style={{fontSize:26,fontWeight:'700',color:COLORS.main}}>Request Fund</Text>
    </View>
    <View style={{flex:1,width:'90%',alignSelf:'center',marginTop:10}}>
     <Inputtext />
     <DropdownSelect sty={10} />
    </View>
</View>
  )
}

export default RequestFund