import { View, Text,Image } from 'react-native'
import React from 'react'
import { COLORS } from '../Colors/Colors'

const Historycom = ({nam,amt,imgg,sub,dat}) => {
  
  return (
    <View style={{flex:1,marginStart:16,marginTop:10}}>
      <View style={{flexDirection:'row',alignItems:'center'}}>
      <Image source={imgg} style={{height:50,width:50,borderRadius:8}} />
      <View style={{left:10,flex:1}}>
      <Text style={{color:'#000',fontSize:14,fontWeight:'700'}}>{nam}</Text>
      <Text style={{color:'#222222',fontSize:12,fontWeight:'400'}}>{sub}</Text>
      </View>
      <View style={{alignItems:'flex-end',right:16}}>
      <Text style={{color:COLORS.main,fontSize:14,fontWeight:'700'}} >+ ₹{amt}</Text>
      <Text style={{color:'#222222',fontSize:12,fontWeight:'400'}}>{dat}</Text>
      </View>
      
      </View>
    </View>
  )
}

export default Historycom