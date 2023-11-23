import { View, Text, Image,ScrollView,TouchableOpacity } from 'react-native'
import React from 'react'
import Icon from 'react-native-vector-icons/Ionicons';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { COLORS, Sizes } from '../Colors/Colors';
import HomeCartView from '../Components/HomeCartView';
import SendandReceivebtn from '../Components/SendandReceivebtn';




const Home = ({navigation}) => {
  return (
    <View style={{ flex: 1, backgroundColor: '#fff' }}>
      <View style={{ justifyContent: 'space-between', flexDirection: 'row', margin: 16, alignItems: 'center' }}>
        <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
          <TouchableOpacity activeOpacity={0.9} onPress={()=>{navigation.openDrawer()}}>
          <Image style={{ height: hp('7%'), width: wp('16%') }} source={require('../assets/man.png')} />
          </TouchableOpacity>
          <View style={{ marginStart: 10 }}>
            <Text style={{ color: COLORS.main, fontSize: hp('2.5%'), fontWeight: '300' }}>Welcome</Text>
            <Text style={{ color: '#000', fontSize: hp('2.5%'), fontWeight: '600' }}>Abhishek Jajoria</Text>
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
      <HomeCartView name={'Pending balance'} img={require('../assets/main1.png')} balance={'1000.80'}/>
      </ScrollView>
      </View>
      <Text style={{
        margin:16,
        fontSize: 20,
        fontWeight: '500',
        color: '#000'
      }}>
        Activity
      </Text>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
      <SendandReceivebtn color={'#F7F1FF'} text={'Pos'} name={'arrow-up-right'} iconColor={'#A699F8'} />
      <SendandReceivebtn color={'#FFF3F0'} text={'Payout'} name={'arrow-down-left'} iconColor={'#EF8B6E'} />
      <SendandReceivebtn color={'#FAF0F5'} text={'Request'} name={'archive'} iconColor={'#F497C9'}/>
      <SendandReceivebtn color={'#E8F1EE'} text={'Airtime'} name={'briefcase'} iconColor={'#056348'}/>
      </ScrollView>
    </View>
  )
}

export default Home