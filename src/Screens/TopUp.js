import { View, Text, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import Icon from 'react-native-vector-icons/Feather'
import WebView from 'react-native-webview'
import { COLORS } from '../Colors/Colors'
import * as Progress from 'react-native-progress';

const TopUp = ({ navigation }) => {
  // const [back, setBack] = useState(false)
  const [progress, setProgress] = useState(0)
  const [isLoad, setLoad] = useState(false)
  // const goBack = () => {
  //   navigation.navigate('Home')
  // }
  return (

    <View style={{ flex: 1,backgroundColor:'#fff' }}>
      <View style={{width:'90%',alignItems:'center',justifyContent:'center',backgroundColor:'#fff',marginTop:10,flexDirection:'row'}}>
    <TouchableOpacity style={{backgroundColor:COLORS.white,width:'10%',right:50}} onPress={() => navigation.goBack()}>
    <Icon name='arrow-left' size={30} color={COLORS.black} />
    </TouchableOpacity>
    <Text style={{fontSize:26,fontWeight:'700',color:COLORS.main}}>TopUp Request</Text>
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
          source={{ uri: 'https://test.api.pg.runpaisa.com/checkout/7a69eb62576d63a742a01fb6cfc8f175' }}
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
          }}
          onLoadProgress={({ nativeEvent }) => setProgress(nativeEvent.progress)}
          onLoadEnd={() => setLoad(true)}
        />
      </View>
      {/* <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: '#fff' }}>
        <TouchableOpacity onPress={goBack} style={{ backgroundColor: COLORS.main, borderRadius: 10, width: '25%', height: '40%', justifyContent: 'center' }}>
          <Text style={{ alignSelf: 'center', color: COLORS.white, fontSize: 14, fontWeight: '400' }}>Go Back</Text></TouchableOpacity>
      </View> */}

    </View>

  )
}

export default TopUp