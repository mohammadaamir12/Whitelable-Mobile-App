import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import Icon from 'react-native-vector-icons/FontAwesome5'
import { COLORS } from '../Colors/Colors'
import Icons from 'react-native-vector-icons/MaterialIcons'
import Iconss from 'react-native-vector-icons/MaterialCommunityIcons'
import Iconsss from 'react-native-vector-icons/FontAwesome6'
import { useNavigation } from '@react-navigation/native';



const Botton = ({
  name,
  icname,
  page,
  pg
}) => {
  const navigation = useNavigation();

  return (
    <View style={{ flexDirection: 'row', alignItems: 'center', height: '12%' }}>

      <View style={{ backgroundColor: '#E8F1EE', borderRadius: 40, height: '60%', width: '15%', alignItems: 'center', justifyContent: 'center' }}>

        {
          icname == 'add-card' ? <Icons name={icname} size={28} color={COLORS.main} /> :
            icname == 'arrows-turn-right' ? <Iconsss name={icname} size={28} color={COLORS.main} /> :
              icname == 'qrcode-scan' ? <Iconss name={icname} size={28} color={COLORS.main} /> :
                icname == 'auto-graph' ? <Icons name={icname} size={28} color={COLORS.main} /> :
                  <Icon name={icname} size={28} color={COLORS.main} />}
      </View>
      <Text style={{ flex: 1, fontSize: 15, fontWeight: '400', left: 15, color: COLORS.black }}>{name}</Text>
      <TouchableOpacity onPress={() => icname == "arrows-turn-right" ? navigation.navigate('PayoutReoprt') :
        icname == "add-card" ? navigation.navigate('TopUpReport') :
          icname == "business-time" ? navigation.navigate('FundRequestReport') :
            icname == "house-user" ? navigation.navigate('PGFundRequestReport') :
              icname == "pager" ? navigation.navigate('POSFundRequestReport') :
                icname == "chart-line" ? navigation.navigate('AllTransactionReport') :
                  icname == 'credit-card' ? navigation.navigate('VerifyCard') :
                    icname == 'id-card-alt' ? navigation.navigate('VerifyPan') :
                      icname == 'address-card' ? navigation.navigate('VerifyAdhar') :
                        icname == 'home' ? navigation.navigate('VerifyAccount') :
                          icname == 'money-bill' ? navigation.navigate('VerifyGST') :
                            icname == 'qrcode-scan' ? navigation.navigate('VerifyUPI') :
                              icname == 'auto-graph' ? navigation.navigate('VerificationReport') : null}>
        <Icon name='chevron-right' size={20} color={'#979797'} />
      </TouchableOpacity>

    </View>
  )
}

export default Botton