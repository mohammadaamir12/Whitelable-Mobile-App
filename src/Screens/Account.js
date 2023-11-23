import { View, Text } from 'react-native'
import React from 'react'

const Account = ({navigation}) => {
  return (
    <View style={{flex:1,alignItems:'center',justifyContent:'center'}}>
      <Text style={{fontSize:24,color:'#000'}}  onPress={()=>{navigation.openDrawer()}}>Account</Text>
    </View>
  )
}

export default Account