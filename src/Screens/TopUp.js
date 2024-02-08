import { View, Text, TouchableOpacity,Linking} from 'react-native'
import React, { useEffect, useState } from 'react'
import Icon from 'react-native-vector-icons/Feather'
import WebView from 'react-native-webview'
import { COLORS } from '../Colors/Colors'
import * as Progress from 'react-native-progress';
import InternetAvl from './InternetAvl'
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';
import Toast from 'react-native-tiny-toast'
import { Base_Url, TopupRequest } from '../Config/config'

const TopUp = ({ navigation }) => {
  // const [back, setBack] = useState(false)
  const [isConnected, setIsConnected] = useState(false);
  const [progress, setProgress] = useState(0)
  const [isLoad, setLoad] = useState(false)
  const [url,setUrl]=useState('')
  // const goBack = () => {
  //   navigation.navigate('Home')
  // }
useEffect(()=>{
  call();
},[])

  const call = async () => {

    const token = await AsyncStorage.getItem('cus_token');
    const id = await AsyncStorage.getItem('cus_id');
    // console.log("token", token);
    // console.log("id", id);
    axios.get(Base_Url + TopupRequest, {
      headers: {
        'Content-Type': 'application/json',
        'token': token,
        'cus_id': id
      }
    })
      .then(function (response) {
        if (response.data.status == 'SUCCESS') {
         setUrl(response.data.pgurl);
        }
        else {

          Toast.show('Failed', {
            position: Toast.position.center,
            containerStyle: {},
            textStyle: {},
          })
        }
      }).catch(function (error) {
        Toast.show('Request failed', {
          position: Toast.position.center,
          containerStyle: {},
          textStyle: {},
        })
      })


  }
  return (

    <View style={{ flex: 1, backgroundColor: '#fff' }}>
      <View style={{ width: '90%', alignItems: 'center', justifyContent: 'center', backgroundColor: '#fff', marginTop: 10, flexDirection: 'row' }}>
        <TouchableOpacity style={{ backgroundColor: COLORS.white, width: '10%', right: 50 }} onPress={() => navigation.goBack()}>
          <Icon name='arrow-left' size={30} color={COLORS.black} />
        </TouchableOpacity>
        <Text style={{ fontSize: 26, fontWeight: '700', color: COLORS.main }}>TopUp Request</Text>
      </View>
      {!isLoad ? <Progress.Bar
        progress={progress}
        width={null}
        borderWidth={0}
        borderRadius={0}
        color='#B8EE00'
      /> : null}
      <View style={{ flex: 10 }}>
        <WebView
        javaScriptEnabled={true}
        domStorageEnabled={true}
        javaScriptCanOpenWindowsAutomatically={true}
        // onShouldStartLoadWithRequest={event => {if(event.url==="transaction")
          
        //   return false;}}
          source={{ uri: url }}
          style={{ flex: 1 }}
          onNavigationStateChange={navState => {
            console.log("navState ", navState.url);
            if (navState.url.includes("notify")) {
              // console.log("go back after 10 seconds");
              // setBack(true)
              setTimeout(() => {
                navigation.navigate('Home')
              }, 5000);
            }
            // if(navState.url.includes('transaction')){
            //   Linking.openURL(navState.url)
            // }
          }}
          onLoadProgress={({ nativeEvent }) => setProgress(nativeEvent.progress)}
          onLoadEnd={() => setLoad(true)}
        />
      </View>
      {/* <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: '#fff' }}>
        <TouchableOpacity onPress={goBack} style={{ backgroundColor: COLORS.main, borderRadius: 10, width: '25%', height: '40%', justifyContent: 'center' }}>
          <Text style={{ alignSelf: 'center', color: COLORS.white, fontSize: 14, fontWeight: '400' }}>Go Back</Text></TouchableOpacity>
      </View> */}
      <InternetAvl isConnected={isConnected} setIsConnected={setIsConnected} />
    </View>

  )
}

export default TopUp