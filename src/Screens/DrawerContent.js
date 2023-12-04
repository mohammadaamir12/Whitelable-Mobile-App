import { View, Text, Image, TouchableOpacity, StatusBar } from 'react-native'
import React, { useState } from 'react'
import { COLORS } from '../Colors/Colors'
import Icon from 'react-native-vector-icons/Feather'
import Iconss from 'react-native-vector-icons/Octicons'
import Iconsss from 'react-native-vector-icons/MaterialCommunityIcons'





const DrawerContent = ({navigation}) => {
    const [submenu,setSubmenu]=useState(false)
    return (
        <View style={{flex: 1, alignItems: 'center'}}>
            <View style={{ backgroundColor: '#B8EE00', height: 70, width: 70, borderRadius: 40, alignItems: 'center', justifyContent: 'center',marginTop:30 }}>
                <Image style={{ height: 66, width: 66, borderRadius: 40 }} source={require('../assets/handsome.jpg')} />
            </View>
            <View style={{marginTop:5}}>
                <Text style={{ fontSize: 16, fontWeight: '700', color: COLORS.white }}>Abhishek Jajoria</Text>
                <TouchableOpacity onPress={()=>{
                navigation.navigate('Account')
                navigation.closeDrawer()
            }} activeOpacity={0.8} style={{ backgroundColor: '#B8EE00', width: 120, height: 25, alignItems: 'center', borderRadius: 20, justifyContent: 'center',marginTop:10 }}>
                    <Text style={{ color: COLORS.black,fontWeight:'700',fontSize:12 }}>Profile</Text>
                </TouchableOpacity>
            </View>
            <TouchableOpacity onPress={()=>{
                navigation.navigate('Home')
                navigation.closeDrawer()
            }} activeOpacity={0.8} style={{marginTop:60,flexDirection:'row',alignItems:'center'}}>
                <View style={{alignItems:'center',flexDirection:'row',flex:1,marginStart:30}}>
                <Icon name='home' color={COLORS.main2} size={22} />
                <Text style={{color:COLORS.white,fontSize:14,fontWeight:'500',marginStart:10}}>Home</Text>
                </View>
                <View style={{marginEnd:20}}>
                <Icon name='chevron-right' color={COLORS.main2} size={25} />
                </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={()=>{
                navigation.navigate('Payout')
                navigation.closeDrawer()
            }} activeOpacity={0.8} style={{marginTop:20,flexDirection:'row',alignItems:'center'}}>
                <View style={{alignItems:'center',flexDirection:'row',flex:1,marginStart:30}}>
                <Icon name='corner-down-left' color={COLORS.main2} size={22} />
                <Text style={{color:COLORS.white,fontSize:14,fontWeight:'500',marginStart:10}}>Payout</Text>
                </View>
                <View style={{marginEnd:20}}>
                <Icon name='chevron-right' color={COLORS.main2} size={25} />
                </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={()=>{
                navigation.navigate('ReportDetails')
                navigation.closeDrawer()
            }} activeOpacity={0.8} style={{marginTop:20,flexDirection:'row',alignItems:'center'}}>
                <View style={{alignItems:'center',flexDirection:'row',flex:1,marginStart:30}}>
                <Iconss name='report' color={COLORS.main2} size={22} />
                <Text style={{color:COLORS.white,fontSize:14,fontWeight:'500',marginStart:10}}>Report</Text>
                </View>
                <View style={{marginEnd:20}}>
                <Icon name='chevron-right' color={COLORS.main2} size={25} />
                </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={()=>{setSubmenu(!submenu)}} style={{marginTop:20,flexDirection:'row',alignItems:'center'}}>
                <View style={{alignItems:'center',flexDirection:'row',flex:1,marginStart:30}}>
                <Iconsss name='credit-card-outline' color={COLORS.main2} size={22} />
                <Text style={{color:COLORS.white,fontSize:14,fontWeight:'500',marginStart:10}}>VA Management</Text>
                </View>
                <View style={{marginEnd:20}}>
               {submenu==true? <Icon name='chevron-down' color={COLORS.main2} size={25} />: <Icon name='chevron-right' color={COLORS.main2} size={25} />}
                </View>
            </TouchableOpacity>
            {submenu==true?<View style={{borderRadius:10}} >
                <View style={{flexDirection:'row',alignItems:'center'}}>
                <Text  style={{margin:5, color: COLORS.white,fontWeight:'700',fontSize:13 }}>Wallet Details</Text>
                <Icon name='chevron-right' color={COLORS.white} size={20} style={{position:'absolute',left:'100%'}} />
                </View>
                <View style={{flexDirection:'row',alignItems:'center'}}>
                <Text onPress={()=>{
                    setSubmenu(!submenu)
                    navigation.closeDrawer()
                    navigation.navigate('TopUp')
                    
                }}  style={{margin:5, color: COLORS.white,fontWeight:'700',fontSize:13 }}>TopUp Wallet</Text>
                <Icon name='chevron-right' color={COLORS.white} size={20} style={{position:'absolute',left:'100%'}}  />
                </View>
                <View style={{flexDirection:'row',alignItems:'center'}}>
                <Text  onPress={()=>{
                    setSubmenu(!submenu)
                    navigation.closeDrawer()
                    navigation.navigate('RequestFund')
                }}  style={{margin:5, color: COLORS.white,fontWeight:'700',fontSize:13 }}>Request Fund</Text>
                <Icon name='chevron-right' color={COLORS.white} size={20} style={{position:'absolute',left:'100%'}}  />
                </View>
            </View>:null}
            <TouchableOpacity onPress={()=>{
                navigation.navigate('Verificationsuit')
                navigation.closeDrawer()
            }} activeOpacity={0.8} style={{marginTop:20,flexDirection:'row',alignItems:'center'}}>
                <View style={{alignItems:'center',flexDirection:'row',flex:1,marginStart:30}}>
                <Iconsss name='credit-card-sync-outline' color={COLORS.main2} size={22} />
                <Text style={{color:COLORS.white,fontSize:14,fontWeight:'500',marginStart:10}}>Verification Suite</Text>
                </View>
                <View style={{marginEnd:20}}>
                <Icon name='chevron-right' color={COLORS.main2} size={25} />
                </View>
            </TouchableOpacity>

        </View>
    )
}

export default DrawerContent