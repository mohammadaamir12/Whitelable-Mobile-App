import { View, Text, StatusBar, Image, TouchableOpacity } from 'react-native'
import { useNavigation } from '@react-navigation/native';
import React, { useEffect,useState } from 'react'
import { COLORS } from '../Colors/Colors'
import AsyncStorage from '@react-native-async-storage/async-storage';
import { jwtDecode } from "jwt-decode";

 


const Split = () => {
    const navigation = useNavigation();
    const [screen, setScreen] = useState(false)
    

   

   
    
    useEffect(() => { 
      
      setTimeout(() => {
        retrieveData()  
       },2000);
    },[])

  retrieveData = async () => {    
    const value = await AsyncStorage.getItem('mess');
    const profile = await AsyncStorage.getItem('profile');
    const page= await AsyncStorage.getItem('page');
    if (value !==null && profile==1) {
      navigation.reset({
        index: 0,
        routes: [{ name: 'HomeScreen' }],
      });
    }
    else if(value !==null && profile==0){
      if(page=='4'){
        navigation.reset({
          index: 0,
          routes: [{ name: 'OnboardDocument' }],
        });
      }
      else if(page=='3'){
        navigation.reset({
          index: 0,
          routes: [{ name: 'OnboardLocation' }],
        });
      }
      else if (page=='2'){
        navigation.reset({
          index: 0,
          routes: [{ name: 'OnboardBank' }],
        });
      }
      else{
        navigation.reset({
          index: 0,
          routes: [{ name: 'OnboardProfile' }],
        });
      }
      
    }
    else{
      navigation.reset({
        index: 0,
        routes: [{ name: 'Login' }],
      }); 
    }
  }
   

  return (
    <View style={{flex:1,alignItems:'center',justifyContent:'center',backgroundColor:COLORS.main}}>
        <StatusBar backgroundColor={COLORS.main}/>
      <Image source={require('../assets/LINE.png')} style={{width:'80%',height:'10%'}}/>
    </View>
  )
}

export default Split