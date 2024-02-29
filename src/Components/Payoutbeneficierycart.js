import { View, Text,TouchableOpacity } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native';


const Payoutbeneficierycart = ({name,bankname,account,ifsc,deleteactive,validate,onDelete,onSend}) => {
  const navigation = useNavigation();
  // console.log('sssss',validate)
  // console.log('sssss',deleteactive)
  return (
    <View style={{paddingVertical:10,width:'90%',alignSelf:'center',backgroundColor:'#FFF',elevation:1,borderRadius:8,borderWidth:1,borderColor:'grey',marginTop:10}}>
      <Text style={{color:'#000',fontWeight:'500',alignSelf:'center',fontSize:18}}>{bankname}</Text>
      <View style={{flexDirection:'row',justifyContent:'space-between',alignItems:'center',}}>
        <Text style={{marginStart:20,fontSize:16,fontWeight:'400',color:'#000'}}>{name}</Text>
        <TouchableOpacity onPress={onSend} style={{marginEnd:20,backgroundColor:'#90EE90',borderRadius:8,width:'30%',alignItems:'center',justifyContent:'center',paddingVertical:5}}>
          <Text style={{fontSize:16,fontWeight:'400',color:'#fff'}}>Send Money</Text>
        </TouchableOpacity>
      </View>
      <View style={{flexDirection:'row',justifyContent:'space-between',marginTop:8,alignItems:'center'}}>
        <Text style={{marginStart:20,fontSize:16,fontWeight:'400',color:'#000'}}>{account}</Text>
       {validate=='1'?<TouchableOpacity style={{marginEnd:20,backgroundColor:'#00bfff',paddingVertical:5,borderRadius:8,width:'30%',alignItems:'center',justifyContent:'center'}}>
         <Text style={{fontSize:16,fontWeight:'400',color:'#fff'}}>Validate</Text>
        </TouchableOpacity>:<TouchableOpacity activeOpacity={1} style={{marginEnd:20,backgroundColor:'#D8D8D8',paddingVertical:5,borderRadius:8,width:'30%',alignItems:'center',justifyContent:'center'}}>
         <Text style={{fontSize:16,fontWeight:'400',color:'#C0C0C0'}}>Validate</Text>
        </TouchableOpacity>}
      </View>
      <View style={{flexDirection:'row',justifyContent:'space-between',marginTop:8,alignItems:'center'}}>
        <Text style={{marginStart:20,fontSize:16,fontWeight:'400',color:'#000'}}>{ifsc}</Text>
       {deleteactive=='1'?<TouchableOpacity onPress={onDelete} style={{marginEnd:20,backgroundColor:'#FFCCCB',paddingVertical:5,borderRadius:8,width:'30%',alignItems:'center',justifyContent:'center'}}>
          <Text style={{fontSize:16,fontWeight:'400',color:'#fff'}}>Delete</Text>
        </TouchableOpacity>:<TouchableOpacity activeOpacity={1} style={{marginEnd:20,backgroundColor:'#D8D8D8',paddingVertical:5,borderRadius:8,width:'30%',alignItems:'center',justifyContent:'center'}}>
          <Text style={{fontSize:16,fontWeight:'400',color:'#C0C0C0'}}>Delete</Text>
        </TouchableOpacity>} 
        
      </View>
     
    </View>
  )
}

export default Payoutbeneficierycart