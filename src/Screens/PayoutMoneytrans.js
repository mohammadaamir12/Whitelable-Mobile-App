import { View, Text,TouchableOpacity, ScrollView } from 'react-native'
import React from 'react'
import { COLORS } from '../Colors/Colors'
import Icon from 'react-native-vector-icons/Feather'
import HomeCartView from '../Components/HomeCartView'
import Inputtext from '../Components/Inputtext'
import Payoutbeneficierycart from '../Components/Payoutbeneficierycart'


const PayoutMoneytrans = ({navigation}) => {
  return (
    <View style={{flex:1,backgroundColor:COLORS.white}}>
  
    <View style={{width:'90%',alignItems:'center',justifyContent:'center',backgroundColor:COLORS.white,marginTop:10,flexDirection:'row'}}>
    <TouchableOpacity style={{backgroundColor:COLORS.white,width:'10%',right:30}} onPress={() => navigation.goBack()}>
    <Icon name='arrow-left' size={30} color={COLORS.black} />
    </TouchableOpacity>
    <Text style={{fontSize:26,fontWeight:'700',color:COLORS.main}}>Money Transaction</Text>
    </View>
   
    <View>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
      <HomeCartView name={'Used Balance'} img={require('../assets/main2.png')} balance={'1655444000.20'} />
      <HomeCartView name={'Remaining Balance'} img={require('../assets/main3.png')} balance={'1111000.00'} />
      <HomeCartView name={'Pending balance'} img={require('../assets/main1.png')} balance={'867665000.80'}/>
      </ScrollView>
      </View>
       
      
      <View style={{width:'95%',alignSelf:'center',marginTop:20,flexDirection:'row',height:'6%'}}>
        <TouchableOpacity onPress={()=>{navigation.navigate('BankBeneficiery')}} style={{marginEnd:5,backgroundColor:'#00bfff',borderRadius:10,alignItems:'center',height:'100%',width:'50%',justifyContent:'center'}}>
            <Text style={{fontSize:14,fontWeight:'400',color:COLORS.white}}>Add Bank Beneficiery</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={()=>{navigation.navigate('CreditCardBeneficiery')}} style={{marginEnd:5,backgroundColor:'#CF9FFF',borderRadius:10,alignItems:'center',height:'100%',width:'50%',justifyContent:'center'}}>
            <Text style={{fontSize:14,fontWeight:'400',color:COLORS.white}}>Add Credit Card Beneficiery</Text>
        </TouchableOpacity>
      </View>
      
      <View style={{width:'90%',alignSelf:'center'}}>
        <Text style={{marginTop:10,fontSize:24,color:'#000',fontWeight:'600'}}>Filter</Text>
        <Inputtext name={'Baneficiary Name'} place={'Enter Name'}/>
        <Inputtext name={'Baneficiary Account'} place={'Account Number'}/>
        <View style={{width:'95%',flexDirection:'row',justifyContent:'space-between',alignSelf:'center',marginTop:20}}>
          <TouchableOpacity style={{backgroundColor:'#F7F1FF',width:'40%',height:50,borderRadius:8,alignItems:'center',justifyContent:'center',elevation:2}}>
            <Text style={{fontSize:16,fontWeight:'700',color:'#A699F8'}}>Filter</Text>
            </TouchableOpacity>
          <TouchableOpacity style={{backgroundColor:'#F7F1FF',width:'40%',height:50,borderRadius:8,alignItems:'center',justifyContent:'center',elevation:2}}>
            <Text style={{fontSize:16,fontWeight:'700',color:'#A699F8'}}>Clear Filter</Text>
            </TouchableOpacity>
          </View>
      </View>
      <Payoutbeneficierycart/>
      
</View>
  )
}

export default PayoutMoneytrans