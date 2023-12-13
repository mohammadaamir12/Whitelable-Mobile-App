import { View, Text,TouchableOpacity } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native';


const Payoutbeneficierycart = ({name}) => {
  const navigation = useNavigation();
  return (
    <View style={{width:'90%',alignSelf:'center',backgroundColor:'#FFF',elevation:1,marginTop:20,borderRadius:8,height:'15%',borderWidth:1,borderColor:'grey'}}>
      <Text style={{color:'#000',fontWeight:'500',alignSelf:'center',fontSize:18,marginTop:10}}>Abhishek Jajoria</Text>
      <View style={{flexDirection:'row',justifyContent:'space-between',marginTop:5,height:'20%',alignItems:'center'}}>
        <Text style={{marginStart:20,fontSize:16,fontWeight:'400',color:'#000'}}>Beneficiery Name</Text>
        <TouchableOpacity onPress={()=>name=='send money'?navigation.navigate("PayoutSendMoney"):null} style={{marginEnd:20,backgroundColor:'#90EE90',borderRadius:8,width:'30%',height:'100%',alignItems:'center',justifyContent:'center'}}>
          <Text style={{fontSize:16,fontWeight:'400',color:'#fff'}}>Send Money</Text>
        </TouchableOpacity>
      </View>
      <View style={{flexDirection:'row',justifyContent:'space-between',marginTop:5,height:'20%',alignItems:'center'}}>
        <Text style={{marginStart:20,fontSize:16,fontWeight:'400',color:'#000'}}>Bank Ac/Credit Card</Text>
        <TouchableOpacity style={{marginEnd:20,backgroundColor:'#00bfff',borderRadius:8,width:'30%',height:'100%',alignItems:'center',justifyContent:'center'}}>
          <Text style={{fontSize:16,fontWeight:'400',color:'#fff'}}>Validate</Text>
        </TouchableOpacity>
      </View>
      <View style={{flexDirection:'row',justifyContent:'space-between',marginTop:5,height:'20%',alignItems:'center'}}>
        <Text style={{marginStart:20,fontSize:16,fontWeight:'400',color:'#000'}}>IFSC</Text>
        <TouchableOpacity style={{marginEnd:20,backgroundColor:'#FFCCCB',borderRadius:8,width:'30%',height:'100%',alignItems:'center',justifyContent:'center'}}>
          <Text style={{fontSize:16,fontWeight:'400',color:'#fff'}}>Delete</Text>
        </TouchableOpacity>
        
      </View>
     
    </View>
  )
}

export default Payoutbeneficierycart