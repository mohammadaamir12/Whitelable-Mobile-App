import { View, Text, ImageBackground } from 'react-native'
import React from 'react'
import { COLORS, Sizes } from '../Colors/Colors'
import Icon from 'react-native-vector-icons/Ionicons';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';



const HomeCartView = ({
    img,
    name,
    balance
}) => {
    return (
        <View style={{ justifyContent: 'space-evenly', flexDirection: 'row', marginTop:hp('2%'),marginStart:8,marginEnd:5,flex:1 }}>
            <ImageBackground style={{ backgroundColor: '#8DC1B3', height:hp('25%'), width: wp('90%'), borderRadius: 18, shadowColor: "#000", shadowOffset: { width: 0, height: 1 }, shadowOpacity: 10, shadowRadius: 7,elevation:4 }} source={img} imageStyle={{borderRadius:20}}>
                <View style={{margin:30}}>
                <View>
                <Text style={{color:'#fff',fontSize:16}}>{name}</Text>
                <Text style={{color:'#fff',fontSize:28,fontWeight:'600'}}>{balance}</Text>
                <Text style={{color:'#fff',fontSize:18,fontWeight:'500'}}>Abhishek Jajoria</Text>
                </View>
                <View style={{top:hp('3.5%'),flexDirection:'row',alignItems:'center'}}>
                <Icon style={{color:'#fff'}} name='add-circle-outline' size={35} />
                <Text style={{color:'#fff',left:5,fontSize:16}}>Fund</Text>
                </View> 
                </View>
                
            </ImageBackground>
        </View>
    )
}

export default HomeCartView