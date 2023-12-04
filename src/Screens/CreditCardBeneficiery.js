import { View, Text,TouchableOpacity } from 'react-native'
import React from 'react'
import { COLORS } from '../Colors/Colors'
import Icon from 'react-native-vector-icons/Feather'
import Inputtext from '../Components/Inputtext'
import DropdownSelect from '../Components/DropdownSelect'

const CreditCardBeneficiery = ({navigation}) => {
  return (
    <View style={{flex:1,backgroundColor:COLORS.white}}>
    <View style={{width:'90%',alignItems:'center',justifyContent:'center',backgroundColor:COLORS.white,marginTop:10,flexDirection:'row'}}>
    <TouchableOpacity style={{backgroundColor:COLORS.white,width:'10%',right:5}} onPress={() => navigation.goBack()}>
    <Icon name='arrow-left' size={30} color={COLORS.black} />
    </TouchableOpacity>
    <Text style={{fontSize:26,fontWeight:'700',color:COLORS.main}}>Credit Card Beneficiery</Text>
    </View>
      <View style={{width:'90%',alignSelf:'center'}}>
        <Inputtext name={'Credit Card Holder Name'} place={'Enter Name'}/>
        <Inputtext name={'Credit Card Number'} place={'Enter Card Number'}/>
        <Text style={{marginTop:20,marginBottom:2}}>Bank Name</Text>
        <DropdownSelect />
        <Inputtext name={'IFSC'} place={'IFSC Code'}/>
      </View>
      <View style={{width:'80%',alignSelf:'center',marginTop:20}}>
        <TouchableOpacity style={{marginTop:5,backgroundColor:COLORS.main,borderRadius:10,alignItems:'center',height:'25%',justifyContent:'center'}}>
            <Text style={{fontSize:16,fontWeight:'500',color:COLORS.white}}>Add</Text>
        </TouchableOpacity>
      </View>
</View>
  )
}

export default CreditCardBeneficiery