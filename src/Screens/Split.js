import { View, Text, StatusBar, Image, TouchableOpacity } from 'react-native'
import { useNavigation } from '@react-navigation/native';
import React, { useEffect } from 'react'
import { COLORS } from '../Colors/Colors'

 


const Split = () => {
    const navigation = useNavigation();
    useEffect(() => {
        setTimeout(() => {
            navigation.reset({
                index: 0,
                routes: [{ name: 'Onboarding' }],
              });
         },2000);
      },[])

  return (
    <View style={{flex:1,alignItems:'center',justifyContent:'center',backgroundColor:COLORS.main}}>
        <StatusBar backgroundColor={COLORS.main}/>
      <Image source={require('../assets/LINE.png')} style={{width:'80%',height:'10%'}}/>
    </View>
  )
}

export default Split