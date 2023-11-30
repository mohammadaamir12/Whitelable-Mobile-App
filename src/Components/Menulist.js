import { View, Text } from 'react-native'
import React from 'react'
import Icon from 'react-native-vector-icons/Feather'
import { COLORS } from '../Colors/Colors'

const Menulist = () => {
  return (
      <View style={{marginTop:15,flexDirection:'row',alignItems:'center',backgroundColor:'#E8F1EE',width:'95%',height:'10%',alignSelf:'center',borderRadius:10}}>
                <View style={{alignItems:'center',flexDirection:'row',flex:1,marginStart:30}}>
                <Icon name='arrow-up-right' color={'grey'} size={22} />
                <Text style={{color:COLORS.black,fontSize:14,fontWeight:'400',marginStart:20,}}>Pos</Text>
                </View>
                <View style={{marginEnd:20}}>
                <Icon name='chevron-right' color={COLORS.black} size={25} />
                </View>
            </View>
            
            
        
  )
}

export default Menulist