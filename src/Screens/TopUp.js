import { View, Text, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import WebView from 'react-native-webview'
import { COLORS } from '../Colors/Colors'

const TopUp = ({ navigation }) => {
  const [back, setBack] = useState(false)
  const goBack = () => {
    setBack(false)
    navigation.navigate('Home')
  }
  return (
    <View style={{ flex: 1 }}>
      <View style={{ flex: 8 }}>
        <WebView
          source={{ uri: 'https://test.api.pg.runpaisa.com/checkout/522a3c75798a4588acc7339ae159fe97' }}
          style={{ flex: 1 }}
          onNavigationStateChange={navState => {
            console.log("navState ", navState.url);
            if (navState.url.includes("notify")) {
              console.log("go back after 10 seconds");
              setBack(true)
              setTimeout(() => {
                navigation.navigate('Home')
              }, 10000);
            }
          }}
        />
      </View>
      {back == true ? <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <TouchableOpacity onPress={goBack} style={{ backgroundColor: COLORS.main, borderRadius: 10, width: '20%', height: '30%', justifyContent: 'center' }}>
          <Text style={{ alignSelf: 'center', color: COLORS.white, fontSize: 14, fontWeight: '400' }}>Go Back</Text></TouchableOpacity>
      </View> : null}

    </View>
  )
}

export default TopUp