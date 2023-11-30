import { View, Text, Image, TouchableOpacity, ScrollView } from 'react-native'
import React from 'react'
import { COLORS } from '../Colors/Colors'
import Icon from 'react-native-vector-icons/Feather'
import Menulist from '../Components/Menulist'
import { StatusBar } from 'react-native'


const Account = ({navigation}) => {
  return (
    
    <View style={{flex:1,backgroundColor:COLORS.white}}>
      
      <View style={{backgroundColor:COLORS.main,height:250,borderBottomRightRadius:25,borderBottomLeftRadius:20,alignItems:'center'}}>
        <TouchableOpacity activeOpacity={0.8} style={{position:'absolute',alignSelf:'flex-start',top:25,left:15}} onPress={()=>{navigation.openDrawer()}}>
    <Icon name='menu' size={24} style={{color:COLORS.white}}  />
    </TouchableOpacity>
        <Text style={{fontSize:20,fontWeight:'700',color:COLORS.white,marginTop:40}}>My Profile</Text>
      <View style={{ backgroundColor: '#B8EE00', height: 83, width: 83, borderRadius: 40, alignItems: 'center', justifyContent: 'center',marginTop:20 }}>
                <Image style={{ height: 80, width: 80, borderRadius: 40 }} source={require('../assets/handsome.jpg')} />
            </View>
            <Text style={{fontSize:18,fontWeight:'700',color:COLORS.white,marginTop:15}}>Abhishek Jajoria</Text>
      </View> 
      
      <Menulist />
      <Menulist />
      <Menulist />
      <Menulist />
      <Menulist />
      
    </View>
    
    
  )
}

export default Account