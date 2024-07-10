import { View, Text, Image, TouchableOpacity, StatusBar, ScrollView, BackHandler, Alert, FlatList, RefreshControl,StyleSheet } from 'react-native'
import React, { useCallback, useEffect, useState } from 'react'
import Icon from 'react-native-vector-icons/Ionicons';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { COLORS, Sizes } from '../Colors/Colors';
import HomeCartView from '../Components/HomeCartView';
import SendandReceivebtn from '../Components/SendandReceivebtn';
import Historycom from '../Components/Historycom';
import InternetAvl from './InternetAvl';
import { useFocusEffect } from '@react-navigation/native';
import { Base_Url, UserProfile, dashboard, recentTransaction } from '../Config/config';
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';
import Toast from 'react-native-tiny-toast'
import LinearGradient from 'react-native-linear-gradient';
import { createShimmerPlaceholder } from 'react-native-shimmer-placeholder'
import Moment from 'moment';

const ShimmerPlaceholder = createShimmerPlaceholder(LinearGradient)
const Home = ({ navigation }) => {
  const [isConnected, setIsConnected] = useState(false);
  const [dashData, setDashData] = useState('');
  const [cus_amt, setCus_amt] = useState(0);
  const [cus_amt2, setCus_amt2] = useState(0);
  const [cus_amt3, setCus_amt3] = useState(0);
  const [orderid, setOrderid] = useState([])
  const [date, setDate] = useState('')
  const [loader, setLoader] = useState(false)
  const [profileName, setProfileName] = useState('')
  const [refreshing, setRefreshing] = useState(false);
  // useEffect(() => {
  const backAction = () => {
    Alert.alert("Hold on!", "Are you sure you want to exit?", [
      {
        text: "Cancel",
        onPress: () => null,
        style: "cancel"
      },
      { text: "Yes", onPress: () => BackHandler.exitApp() }
    ]);
    return true;
  };
  //   const backHandler = BackHandler.addEventListener(
  //     'hardwareBackPress',
  //      backAction
  //   );
  //   return () => backHandler.remove();
  // }, [])
  useFocusEffect(
    useCallback(() => {
      onRefresh();
      BackHandler.addEventListener('hardwareBackPress', backAction);
      return () => {
        BackHandler.removeEventListener('hardwareBackPress', backAction);
      };
    }, [])
  );
  useEffect(() => {
    user();
  }, [])
  useEffect(() => {
    call();
  }, [])

  const user = async () => {
    const token = await AsyncStorage.getItem('cus_token');
    const id = await AsyncStorage.getItem('cus_id');
    axios.get(Base_Url + UserProfile, {
      headers: {
        'Content-Type': 'application/json',
        'token': token,
        'cus_id': id
      }
    })
      .then(function (response) {

        if (response.data.status == 'SUCCESS') {
          setProfileName(response.data.userData.cus_name)
          AsyncStorage.setItem('profilename', response.data.userData.cus_name)
          // console.log('sdddd',userData);
          // console.log("response",response.data.tranaction.payout_transaction[0].amount);   
        }
        else {
          Toast.show('Failed', {
            position: Toast.position.center,
            containerStyle: {},
            textStyle: {},
          })
        }
      }).catch(function (error) {
        console.log(error.message)
        Toast.show('No recent transaction', {
          position: Toast.position.center,
          containerStyle: {},
          textStyle: {},
        })
      })
  }

  const call = async () => {
    // setRefreshing(true)
    const token = await AsyncStorage.getItem('cus_token');
    const id = await AsyncStorage.getItem('cus_id');
    // console.log("token", token);
    // console.log("id", id);

    axios.get(Base_Url + dashboard, {
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
        'token': token,
        'cus_id': id
      }
    })
      .then(function (response) {

        if (response.data.status == 'SUCCESS') {
          setDashData(response.data.balance)
          setCus_amt(response.data.balance.unsettle)
          setCus_amt2(response.data.balance.available);
          setCus_amt3(response.data.balance.pending);
          setRefreshing(false);
          setLoader(true)

          // console.log(response);
          // console.log("response",response.data.tranaction.payout_transaction[0].amount);   
        }
        else {

          Toast.show('Failed', {
            position: Toast.position.center,
            containerStyle: {},
            textStyle: {},
          })
        }
      }).catch(function (error) {
        // console.log(error.response.data)
        Toast.show('Request failed', {
          position: Toast.position.center,
          containerStyle: {},
          textStyle: {},
        })
      })


    axios.get(Base_Url + recentTransaction, {
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
        'token': token,
        'cus_id': id
      }
    })
      .then(function (response) {

        if (response.data.status == 'SUCCESS') {
          // console.log(response.data)
          setOrderid(response.data.allreports)
          setDate(Moment(response.data.allreports[0].txn_date).format('ll'))
          setLoader(true)
          // console.log('sdddd',userData);
          // console.log("response",response.data.tranaction.payout_transaction[0].amount);   
        }
        else {
          Toast.show('Failed', {
            position: Toast.position.center,
            containerStyle: {},
            textStyle: {},
          })
        }
      }).catch(function (error) {
        console.log(error.message)
        Toast.show('No recent transaction', {
          position: Toast.position.center,
          containerStyle: {},
          textStyle: {},
        })
      })
  }



  const onRefresh = useCallback(() => {
    setRefreshing(true);
    call();
  }, []);

  return (
    <View style={{ flex: 1, backgroundColor: '#fff' }}>
      <StatusBar backgroundColor={COLORS.white} />
      {loader == false ? <View style={{ height: '100%', width: '100%', }}>
        <View style={{ flexDirection: 'row', height: '15%', alignItems: 'center' }}>
          <ShimmerPlaceholder
            style={{ width: '17%', height: '55%', borderRadius: 40, justifyContent: 'center', margin: 15 }}
          >
          </ShimmerPlaceholder>
          <View style={{ justifyContent: 'center' }}>
            <ShimmerPlaceholder
              style={{ width: '40%', height: '20%', borderRadius: 5, bottom: 2.5 }}
            >

            </ShimmerPlaceholder>
            <ShimmerPlaceholder style={{ width: '50%', height: '20%', borderRadius: 5, top: 2.5 }}>

            </ShimmerPlaceholder>
          </View>
          <ShimmerPlaceholder
            style={{ width: '10%', height: '35%', borderRadius: 8, left: '25%' }}>

          </ShimmerPlaceholder>
        </View>
        <View style={{ height: '25%' }}>
          <ShimmerPlaceholder
            style={{
              width: '80%',
              height: '85%',
              borderRadius: 8,
              marginLeft: 15,
            }}>
          </ShimmerPlaceholder>
        </View>
        <View style={{ height: '20%' }}>
          <ShimmerPlaceholder
            style={{ width: '20%', height: '15%', margin: 15, borderRadius: 5 }}>
          </ShimmerPlaceholder>
          <View style={{ flexDirection: 'row', height: '70%', }}>
            <View style={{ width: '30%', height: '80%', marginRight: 15 }}>
              <ShimmerPlaceholder style={{
                height: '95%',
                width: '75%',
                margin: 15,
                borderRadius: 8
              }}></ShimmerPlaceholder>
            </View>
            <View style={{ width: '30%', height: '80%', marginRight: 15 }}>
              <ShimmerPlaceholder style={{
                height: '95%',
                width: '75%',
                margin: 15,
                borderRadius: 8
              }}></ShimmerPlaceholder>
            </View>
            <View style={{ width: '30%', height: '80%' }}>
              <ShimmerPlaceholder style={{
                height: '95%',
                width: '75%',
                margin: 15,
                borderRadius: 8
              }}></ShimmerPlaceholder>
            </View>

          </View>

        </View>
        <View style={{ height: '5%', }}>
          <ShimmerPlaceholder style={{ width: '30%', height: '55%', margin: 15, borderRadius: 5 }}></ShimmerPlaceholder>
        </View>
        <View style={{ flexDirection: 'row', height: '15%', alignItems: 'center' }}>
          <ShimmerPlaceholder
            style={{ width: '17%', height: '55%', borderRadius: 40, justifyContent: 'center', margin: 15 }}
          >
          </ShimmerPlaceholder>
          <View style={{ justifyContent: 'center' }}>
            <ShimmerPlaceholder
              style={{ width: '90%', height: '18%', borderRadius: 5, bottom: 2.5 }}
            >

            </ShimmerPlaceholder>
            <ShimmerPlaceholder style={{ width: '40%', height: '18%', borderRadius: 5, top: 2.5 }}>

            </ShimmerPlaceholder>
          </View>
          <ShimmerPlaceholder
            style={{ width: '15%', height: '25%', borderRadius: 8, left: '20%' }}>

          </ShimmerPlaceholder>
        </View>
        <View style={{ flexDirection: 'row', height: '15%', alignItems: 'center' }}>
          <ShimmerPlaceholder
            style={{ width: '17%', height: '55%', borderRadius: 40, justifyContent: 'center', margin: 15 }}
          >
          </ShimmerPlaceholder>
          <View style={{ justifyContent: 'center' }}>
            <ShimmerPlaceholder
              style={{ width: '90%', height: '18%', borderRadius: 5, bottom: 2.5 }}
            >

            </ShimmerPlaceholder>
            <ShimmerPlaceholder style={{ width: '40%', height: '18%', borderRadius: 5, top: 2.5 }}>

            </ShimmerPlaceholder>
          </View>
          <ShimmerPlaceholder
            style={{ width: '15%', height: '25%', borderRadius: 8, left: '20%' }}>

          </ShimmerPlaceholder>
        </View>

      </View> : <ScrollView refreshControl={
        <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
      } style={{ marginTop: 10 }} showsVerticalScrollIndicator={false}>
        <View style={{ justifyContent:'space-between', flexDirection: 'row', margin: 14, alignItems: 'center' }}>
          <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
            <TouchableOpacity activeOpacity={0.9} onPress={() => { navigation.openDrawer() }}>
              <Image style={{ height: hp('7%'), width: wp('14%'),resizeMode:'cover',borderRadius:30 }} source={require('../assets/handsome.jpg')} />
            </TouchableOpacity>
            <View style={{ marginStart: 10 }}>
              <Text style={{ color: COLORS.main, fontSize: hp('2%'), fontWeight: '400' }}>Welcome !</Text>
              <Text style={{ color: '#000', fontSize: hp('2%'), fontWeight: '700' }}>{profileName}</Text>
            </View>
          </View>
          <View>
            <Icon style={{ color: COLORS.main }} name='notifications' size={32} />
          </View>
        </View>
        <View>
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            <HomeCartView cusName={profileName} name={'Available balance'} img={require('../assets/main2.png')} balance={cus_amt2} />
            <HomeCartView cusName={profileName} name={'Unsettle balance'} img={require('../assets/main3.png')} balance={cus_amt} />
            <HomeCartView cusName={profileName} name={'Pending balance'} img={require('../assets/main1.png')} balance={cus_amt3} />
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
        <View >
          <ScrollView  horizontal showsHorizontalScrollIndicator={false}>
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
          {/* <Text style={{
          right: 25,
          color: '#34baeb',
          fontSize: 14
        }}>View all</Text> */}
        </View>
        <FlatList
          scrollEnabled={false}
          showsVerticalScrollIndicator={false}
          initialNumToRender={10}
          data={orderid}
          renderItem={({ item }) =>
          <TouchableOpacity style={styles.RecentButton} onPress={()=>navigation.navigate('RecentTransactiondetails')}>
            <Historycom nam={profileName} amt={item.txn_crdt} imgg={require('../assets/handsome.jpg')} sub={item.txn_type} dat={date} />
            </TouchableOpacity>
          }
        />

        {/* <Historycom nam={'aamir'} amt={'140.30'} imgg={require('../assets/handsome.jpg')} sub={'Subscription'} dat={'18 sept 2023'} />
      <Historycom nam={'Rafat'} amt={'2240'} imgg={require('../assets/young.jpg')} sub={'Subscription'} dat={'12 nov 2023'} />
      <Historycom nam={'Prashant (Tester)'} amt={'540.90'} imgg={require('../assets/younggirl.jpg')} sub={'Subscription'} dat={'11 jul 2023'} />
      <Historycom nam={'Aamir'} amt={'140.30'} imgg={require('../assets/handsome.jpg')} sub={'Subscription'} dat={'18 sept 2023'} />
      <Historycom nam={'Rafat'} amt={'2240'} imgg={require('../assets/young.jpg')} sub={'Subscription'} dat={'12 nov 2023'} />
      <Historycom nam={'Prashant (Tester)'} amt={'540.90'} imgg={require('../assets/younggirl.jpg')} sub={'Subscription'} dat={'11 jul 2023'} />
      <Historycom nam={'Aamir'} amt={'140.30'} imgg={require('../assets/handsome.jpg')} sub={'Subscription'} dat={'18 sept 2023'} />
      <Historycom nam={'Rafat'} amt={'2240'} imgg={require('../assets/young.jpg')} sub={'Subscription'} dat={'12 nov 2023'} />
      <Historycom nam={'Prashant (Tester)'} amt={'540.90'} imgg={require('../assets/younggirl.jpg')} sub={'Subscription'} dat={'11 jul 2023'} /> */}
      </ScrollView>}


      <InternetAvl isConnected={isConnected} setIsConnected={setIsConnected} />


    </View>
  )
}

const styles=StyleSheet.create({
  RecentButton:{
    backgroundColor:'#E8F1EE',
    elevation: 5, // for Android shadow
    shadowColor: "#000", // for iOS shadow
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.23,
    shadowRadius: 2.62,
    marginVertical:4,
    paddingVertical:4,
    width:'96%',
    alignSelf:'center'
  },
})

export default Home