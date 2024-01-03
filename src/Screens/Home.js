import { View, Text, Image, ScrollView, TouchableOpacity, StatusBar } from 'react-native'
import React,{useEffect} from 'react'
import Icon from 'react-native-vector-icons/Ionicons';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { COLORS, Sizes } from '../Colors/Colors';
import HomeCartView from '../Components/HomeCartView';
import SendandReceivebtn from '../Components/SendandReceivebtn';
import Historycom from '../Components/Historycom';
import AsyncStorage from '@react-native-async-storage/async-storage';



const Home = ({ navigation }) => {
 

  return (
    <View style={{ flex: 1, backgroundColor: '#fff' }}>
      <StatusBar backgroundColor={COLORS.white} />
      <ScrollView style={{ marginTop: 10 }} showsVerticalScrollIndicator={false}>
        <View style={{ justifyContent: 'space-between', flexDirection: 'row', margin: 16, alignItems: 'center' }}>
          <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
            <TouchableOpacity activeOpacity={0.9} onPress={() => { navigation.openDrawer() }}>
              <Image style={{ height: hp('7%'), width: wp('16%') }} source={require('../assets/man.png')} />
            </TouchableOpacity>
            <View style={{ marginStart: 10 }}>
              <Text style={{ color: COLORS.main, fontSize: hp('2%'), fontWeight: '400' }}>Welcome</Text>
              <Text style={{ color: '#000', fontSize: hp('2%'), fontWeight: '700' }}>Abhishek Jajoria</Text>
            </View>
          </View>
          <View>
            <Icon style={{ color: COLORS.main }} name='notifications' size={32} />
          </View>
        </View>
        <View>
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            <HomeCartView name={'Available balance'} img={require('../assets/main2.png')} balance={'16000.20'} />
            <HomeCartView name={'Unsettle balance'} img={require('../assets/main3.png')} balance={'11000.00'} />
            <HomeCartView name={'Pending balance'} img={require('../assets/main1.png')} balance={'1000.80'} />
          </ScrollView>
        </View>
        <Text style={{
          margin: 16,
          fontSize: 20,
          fontWeight: '700',
          color: '#000'
        }}>
          Activity
        </Text>
        <View>
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            <SendandReceivebtn color={'#F7F1FF'} text={'Top-up Wallet'} name={'arrow-up-right'} iconColor={'#A699F8'} page={'Topup'} />
            <SendandReceivebtn color={'#FFF3F0'} text={'Payout'} name={'arrow-down-left'} iconColor={'#EF8B6E'} page={'Payout'} />
            <SendandReceivebtn color={'#FAF0F5'} text={'Request Fund'} name={'archive'} iconColor={'#F497C9'} page={'RequestFund'} />
            <SendandReceivebtn color={'#E8F1EE'} text={'Verification Suite'} name={'briefcase'} iconColor={'#056348'} page={'VerficationSuit'} />
          </ScrollView>
        </View>
        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
          <Text style={{
            margin: 16,
            fontSize: 20,
            fontWeight: '700',
            color: '#000',
            flex: 1
          }}>
            Recent Transactions
          </Text>
          <Text style={{
            right: 25,
            color: '#34baeb',
            fontSize: 14
          }}>View all</Text>
        </View>
        <Historycom nam={'Aamir'} amt={'140.30'} imgg={require('../assets/handsome.jpg')} sub={'Subscription'} dat={'18 sept 2023'} />
        <Historycom nam={'Rafat'} amt={'2240'} imgg={require('../assets/young.jpg')} sub={'Subscription'} dat={'12 nov 2023'} />
        <Historycom nam={'Prashant (Tester)'} amt={'540.90'} imgg={require('../assets/younggirl.jpg')} sub={'Subscription'} dat={'11 jul 2023'} />
        <Historycom nam={'Aamir'} amt={'140.30'} imgg={require('../assets/handsome.jpg')} sub={'Subscription'} dat={'18 sept 2023'} />
        <Historycom nam={'Rafat'} amt={'2240'} imgg={require('../assets/young.jpg')} sub={'Subscription'} dat={'12 nov 2023'} />
        <Historycom nam={'Prashant (Tester)'} amt={'540.90'} imgg={require('../assets/younggirl.jpg')} sub={'Subscription'} dat={'11 jul 2023'} />
        <Historycom nam={'Aamir'} amt={'140.30'} imgg={require('../assets/handsome.jpg')} sub={'Subscription'} dat={'18 sept 2023'} />
        <Historycom nam={'Rafat'} amt={'2240'} imgg={require('../assets/young.jpg')} sub={'Subscription'} dat={'12 nov 2023'} />
        <Historycom nam={'Prashant (Tester)'} amt={'540.90'} imgg={require('../assets/younggirl.jpg')} sub={'Subscription'} dat={'11 jul 2023'} />
      </ScrollView>
    </View>
  )
}

export default Home