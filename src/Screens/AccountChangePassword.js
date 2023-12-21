import { View, Text, TouchableOpacity, TextInput, ScrollView } from 'react-native'
import React from 'react'
import Icon from 'react-native-vector-icons/Feather'
import { COLORS } from '../Colors/Colors'
import Inputtext from '../Components/Inputtext'
import Toast from 'react-native-tiny-toast'

const AccountChangePassword = ({navigation}) => {
  const Transfer =()=>{
    Toast.showSuccess('Changed')
    navigation.goBack();
}
  return (
    <ScrollView contentContainerStyle={{flex:1, paddingBottom: 40, backgroundColor: '#fff' }}>
    <View style={{ flex: 1, backgroundColor: COLORS.white }}>
      <View style={{ width: '90%', alignItems: 'center', justifyContent: 'center', flexDirection: 'row' }}>
        <TouchableOpacity style={{ width: '10%', right: 30 }} onPress={() => navigation.goBack()}>
          <Icon name='arrow-left' size={30} color={COLORS.black} />
        </TouchableOpacity>
        <Text style={{ fontSize: 26, fontWeight: '700', color: COLORS.main }}>Change Password</Text>
      </View>
      <View style={{ flex: 1, width: '90%', alignSelf: 'center', marginTop: 20 }}>
        <Inputtext name={'Current Password'} place={'Enter Current Password'}/>
        <Inputtext name={'New Password'} place={'Enter New Password'}  />
        <Inputtext name={'Confirm Password'} place={'Re-enter Password'}  />
        <TouchableOpacity activeOpacity={0.7} onPress={Transfer} style={{backgroundColor:COLORS.main,borderRadius:30,width:'80%',height:'7%',alignSelf:'center',marginTop:30,alignItems:'center',justifyContent:'center',elevation:2}}>
        <Text style={{fontSize:20,fontWeight:'700',color:COLORS.white}}>Save Changes</Text>
     </TouchableOpacity>
      </View>
      
    </View>
  </ScrollView>
  )
}

export default AccountChangePassword