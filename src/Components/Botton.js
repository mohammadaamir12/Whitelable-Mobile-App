import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import Icon from 'react-native-vector-icons/FontAwesome5'
import { COLORS } from '../Colors/Colors'
import Icons from 'react-native-vector-icons/MaterialIcons'
import Iconss from 'react-native-vector-icons/MaterialCommunityIcons'
import Iconsss from 'react-native-vector-icons/FontAwesome6'
import { useNavigation } from '@react-navigation/native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';




const Botton = ({
  name,
  icname,
}) => {
  const navigation = useNavigation();

  return (
    <TouchableOpacity onPress={() => icname == "arrows-turn-right" ? navigation.navigate('PayoutReoprt') :
      icname == "add-card" ? navigation.navigate('TopUpReport') :
        icname == "business-time" ? navigation.navigate('FundRequestReport') :
          icname == "chart-line" ? navigation.navigate('AllTransactionReport') :
            icname == 'credit-card' ? navigation.navigate('VerifyCard') :
              icname == 'id-card-alt' ? navigation.navigate('VerifyPan') :
                icname == 'address-card' ? navigation.navigate('VerifyAdhar') :
                  icname == 'home' ? navigation.navigate('VerifyAccount') :
                    icname == 'money-bill' ? navigation.navigate('VerifyGST') :
                        icname == 'auto-graph' ? navigation.navigate('VerificationReport') : null}
      activeOpacity={0.7} style={{ marginTop: 15, backgroundColor: '#E8F1EE', flexDirection: 'row', alignItems: 'center', height: hp('9%'), borderRadius: 8,elevation: 5, // for Android shadow
      shadowColor: "#000", // for iOS shadow
      shadowOffset: {
        width: 0,
        height: 2,
      },
      shadowOpacity: 0.23,
      shadowRadius: 2.62, }}>

      <View style={{ borderRadius: 40, height: hp('60%'), width: wp('15%'), alignItems: 'center', justifyContent: 'center' }}>

        {
          icname == 'add-card' ? <Icons name={icname} size={26} color={COLORS.main} /> :
            icname == 'arrows-turn-right' ? <Iconsss name={icname} size={26} color={COLORS.main} /> :
              icname == 'qrcode-scan' ? <Iconss name={icname} size={26} color={COLORS.main} /> :
                icname == 'auto-graph' ? <Icons name={icname} size={26} color={COLORS.main} /> :
                  <Icon name={icname} size={26} color={COLORS.main} />}
      </View>
      <Text style={{ flex: 1, fontSize: 15, fontWeight: '400', left: 15, color: COLORS.black }}>{name}</Text>
      <Icon style={{ right: 10 }} name='chevron-right' size={20} color={'#979797'} />


    </TouchableOpacity>
  )
}

export default Botton