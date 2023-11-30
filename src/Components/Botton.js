import { View, Text } from 'react-native'
import React from 'react'
import Icon from 'react-native-vector-icons/FontAwesome5'
import { COLORS } from '../Colors/Colors'
import Icons from 'react-native-vector-icons/MaterialIcons'
import Iconss from 'react-native-vector-icons/MaterialCommunityIcons'
import Iconsss from 'react-native-vector-icons/FontAwesome6'



const Botton = ({
  name,
  icname
}) => {
  return (
    <View style={{ flexDirection: 'row', alignItems: 'center', height: '12%' }}>
      <View style={{ backgroundColor: '#E8F1EE', borderRadius: 40, height: '60%', width: '15%', alignItems: 'center', justifyContent: 'center' }}>
      
        {
        icname == 'add-card' ? <Icons name={icname} size={28} color={COLORS.main} />:
        icname == 'arrows-turn-right' ? <Iconsss name={icname} size={28} color={COLORS.main} /> :
          icname == 'qrcode-scan' ? <Iconss name={icname} size={28} color={COLORS.main} /> :
            icname == 'auto-graph' ? <Icons name={icname} size={28} color={COLORS.main} /> :
              <Icon name={icname} size={28} color={COLORS.main} />}
      </View>
      <Text style={{ flex: 1, fontSize: 15, fontWeight: '400', left: 15,color:COLORS.black }}>{name}</Text>
      <Icon name='chevron-right' size={20} color={'#979797'} />
    </View>
  )
}

export default Botton