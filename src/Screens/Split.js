import { View, Text, StatusBar, Image, TouchableOpacity } from 'react-native'
import { useNavigation } from '@react-navigation/native';
import React, { useEffect,useState } from 'react'
import { COLORS } from '../Colors/Colors'
import AsyncStorage from '@react-native-async-storage/async-storage';

 


const Split = () => {
    const navigation = useNavigation();
    const [screen, setScreen] = useState(false)
    const[token,setToken]=useState(false)
  
  retrieveData = async () => {
    const value = await AsyncStorage.getItem('mess');
    if (value !==null) {
      navigation.reset({
        index: 0,
        routes: [{ name: 'HomeScreen' }],
      });
    }
    else{
      navigation.reset({
        index: 0,
        routes: [{ name: 'Login' }],
      }); 
    }
  }
    useEffect(() => {
      
      
        setTimeout(() => {
          retrieveData()
           
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