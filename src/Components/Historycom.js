import { View, Text,Image } from 'react-native'
import React from 'react'
import { COLORS } from '../Colors/Colors'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

const Historycom = ({nam,amt,imgg,sub,dat}) => {
  
  return (
    <View style={{flex:1,alignItems:'center',alignSelf:'center',borderRadius:10,}}>
      <View style={{flexDirection:'row',alignItems:'center',marginVertical:10}}>
      <Image source={imgg} style={{height:hp('5%'),width:wp('8%'),borderRadius:8,marginStart:8,resizeMode:'cover'}} />
      <View style={{left:10,flex:1}}>
      <Text style={{color:'#000',fontSize:13,fontWeight:'700',width:'90%',flexShrink:2}}>{nam}</Text>
      <Text style={{color:'#222222',fontSize:12,fontWeight:'400'}}>{sub}</Text>
      </View>
      <View style={{alignItems:'flex-end',right:16}}>
      <Text style={{color:COLORS.main,fontSize:12,fontWeight:'700'}} >₹{amt}</Text>
      <Text style={{color:'#222222',fontSize:12,fontWeight:'400'}}>{dat}</Text>
      </View>
      
      </View>
    </View>
  )
}

export default Historycom