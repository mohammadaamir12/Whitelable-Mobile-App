import { View, Text,Image } from 'react-native'
import React, { useEffect } from 'react'
import NetInfo from "@react-native-community/netinfo";



const InternetAvl = ({ isConnected, setIsConnected }) => {
    useEffect(() => {
        const unsubscribe = NetInfo.addEventListener(state => {
            console.log("Connection type", state.type);
            console.log("Is connected?", state.isConnected);
            setIsConnected(state.isConnected)
        });

        return () => {
            unsubscribe();
        }

    }, [])
    return (
      <View style={{}}>
       {isConnected==false?(<View style={{alignItems:'center',justifyContent:'center',backgroundColor:'#C8C8C8',borderTopLeftRadius:20,borderTopRightRadius:20,elevation:8}}>
            {/* {isConnected==true? <Text>Connected</Text>: <Text>Not Connected</Text>} */}
           <Image style={{height:160,width:200}} source={require('../assets/lost-connection.png')}/>
           <Text style={{fontSize:24,fontWeight:'500',color:'#fff',marginBottom:8}}>No Internet Connection</Text>
        </View>):null} 
        </View>
    )
}

export default InternetAvl