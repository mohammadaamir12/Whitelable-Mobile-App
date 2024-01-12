import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import Icon from 'react-native-vector-icons/Feather'
import Icons from 'react-native-vector-icons/Entypo'
import Iconss from 'react-native-vector-icons/AntDesign'
import Iconsss from 'react-native-vector-icons/MaterialIcons'
import Iconssss from 'react-native-vector-icons/MaterialCommunityIcons'
import { useNavigation } from '@react-navigation/native';
import { COLORS } from '../Colors/Colors'
import AsyncStorage from '@react-native-async-storage/async-storage'



const Menulist = ({ naam, icon }) => {
  const navigation = useNavigation();
  const logout = () => {
    AsyncStorage.removeItem('mess')
    AsyncStorage.removeItem('profile')
    navigation.reset({
      index: 0,
      routes: [{ name: "Login" }]
    })
  }
  return (
    <TouchableOpacity
      style={{
        marginTop: 15,
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#E8F1EE',
        width: '95%',
        alignSelf: 'center',
        borderRadius: 10
      }}
      activeOpacity={0.7}
      onPress={() => {
        icon == 'profile' ? navigation.navigate('AccountProfile') :
        icon == 'bank' ? navigation.navigate('AccountBankDetails') :
          icon == 'location' ? navigation.navigate('AccountLocation') :
            icon == 'text-document' ? navigation.navigate('AccountDocumentDetails') :
              icon == 'published-with-changes' ? navigation.navigate('AccountChangePassword') :
                icon == 'key-change' ? navigation.navigate('AccountChangePin') :
                  icon == 'logout' ? logout() :
                    null
      }}
    >
      <View
        style={{
          alignItems: 'center',
          flexDirection: 'row',
          flex: 1,
          marginStart: 30,
          marginVertical: 20
        }}>
        {icon == 'logout' ? <Iconssss name='logout' color={'grey'} size={22} /> :
          icon == 'key-change' ? <Iconssss name='key-change' color={'grey'} size={22} /> :
            icon == 'published-with-changes' ? <Iconsss name='published-with-changes' color={'grey'} size={22} /> :
              icon == 'text-document' ? <Icons name='text-document' color={'grey'} size={22} /> :
                icon == 'location' ? <Icons name='location' color={'grey'} size={22} /> :
                  icon == 'bank' ? <Iconss name='bank' color={'grey'} size={22} /> :
                    icon == 'profile' ? <Iconss name='profile' color={'grey'} size={22} /> :
                      null}
        <Text
          style={{
            color: COLORS.black,
            fontSize: 14,
            fontWeight: '400',
            marginStart: 20,
          }}>
          {naam}
        </Text>
      </View>
      <Icon style={{ right: 15 }} name='chevron-right' color={COLORS.black} size={25} />
    </TouchableOpacity>



  )
}

export default Menulist