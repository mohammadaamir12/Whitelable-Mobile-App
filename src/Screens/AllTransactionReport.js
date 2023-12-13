import { View, Text, TouchableOpacity, ScrollView } from 'react-native'
import React from 'react'
import { COLORS } from '../Colors/Colors'
import Icon from 'react-native-vector-icons/Feather'
import Historycom from '../Components/Historycom'
import Inputtext from '../Components/Inputtext'

const AllTransactionReport = ({ navigation }) => {
  return (
    <View style={{ flex: 1, backgroundColor: COLORS.white }}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={{ width: '90%', alignItems: 'center', justifyContent: 'center', backgroundColor: COLORS.white, marginTop: 10, flexDirection: 'row' }}>
          <TouchableOpacity style={{ backgroundColor: COLORS.white, width: '10%', right: 10 }} onPress={() => navigation.goBack()}>
            <Icon name='arrow-left' size={30} color={COLORS.black} />
          </TouchableOpacity>
          <Text style={{ fontSize: 26, fontWeight: '700', color: COLORS.main }}>All Transaction Report</Text>
        </View>
        <View style={{ flex: 1, width: '90%', alignSelf: 'center', marginVertical: 15 }}>
          <Text style={{ marginTop: 10, fontSize: 24, color: '#000', fontWeight: '600' }}>Filter</Text>
          <Inputtext name={'From'} place={'DD/MM/YY'} />
          <Inputtext name={'To'} place={'DD/MM/YY'} />
          <Inputtext name={'Order ID'} place={'Enter Order ID'} />
          <Inputtext name={'TXN Type'} place={'Enter Type'} />

          <View style={{ width: '95%', flexDirection: 'row', justifyContent: 'space-between', alignSelf: 'center', marginTop: 20 }}>
            <TouchableOpacity style={{ backgroundColor: '#F7F1FF', width: '40%', height: 40, borderRadius: 8, alignItems: 'center', justifyContent: 'center', elevation: 2 }}>
              <Text style={{ fontSize: 16, fontWeight: '700', color: '#A699F8' }}>Filter</Text>
            </TouchableOpacity>
            <TouchableOpacity style={{ backgroundColor: '#F7F1FF', width: '40%', height: 40, borderRadius: 8, alignItems: 'center', justifyContent: 'center', elevation: 2 }}>
              <Text style={{ fontSize: 16, fontWeight: '700', color: '#A699F8' }}>Clear Filter</Text>
            </TouchableOpacity>
          </View>

        </View>
        <View>

          <Historycom nam={'Aamir'} amt={'140.30'} imgg={require('../assets/handsome.jpg')} sub={'Subscription'} dat={'18 sept 2023'} />
          <Historycom nam={'Rafat'} amt={'2240'} imgg={require('../assets/young.jpg')} sub={'Subscription'} dat={'12 nov 2023'} />
          <Historycom nam={'Prashant (Tester)'} amt={'540.90'} imgg={require('../assets/younggirl.jpg')} sub={'Subscription'} dat={'11 jul 2023'} />
          <Historycom nam={'Aamir'} amt={'140.30'} imgg={require('../assets/handsome.jpg')} sub={'Subscription'} dat={'18 sept 2023'} />
          <Historycom nam={'Rafat'} amt={'2240'} imgg={require('../assets/young.jpg')} sub={'Subscription'} dat={'12 nov 2023'} />
          <Historycom nam={'Prashant (Tester)'} amt={'540.90'} imgg={require('../assets/younggirl.jpg')} sub={'Subscription'} dat={'11 jul 2023'} />
          <Historycom nam={'Aamir'} amt={'140.30'} imgg={require('../assets/handsome.jpg')} sub={'Subscription'} dat={'18 sept 2023'} />
          <Historycom nam={'Rafat'} amt={'2240'} imgg={require('../assets/young.jpg')} sub={'Subscription'} dat={'12 nov 2023'} />
          <Historycom nam={'Prashant (Tester)'} amt={'540.90'} imgg={require('../assets/younggirl.jpg')} sub={'Subscription'} dat={'11 jul 2023'} />
          <Historycom nam={'Aamir'} amt={'140.30'} imgg={require('../assets/handsome.jpg')} sub={'Subscription'} dat={'18 sept 2023'} />
          <Historycom nam={'Rafat'} amt={'2240'} imgg={require('../assets/young.jpg')} sub={'Subscription'} dat={'12 nov 2023'} />
          <Historycom nam={'Prashant (Tester)'} amt={'540.90'} imgg={require('../assets/younggirl.jpg')} sub={'Subscription'} dat={'11 jul 2023'} />
          <Historycom nam={'Aamir'} amt={'140.30'} imgg={require('../assets/handsome.jpg')} sub={'Subscription'} dat={'18 sept 2023'} />
          <Historycom nam={'Rafat'} amt={'2240'} imgg={require('../assets/young.jpg')} sub={'Subscription'} dat={'12 nov 2023'} />
          <Historycom nam={'Prashant (Tester)'} amt={'540.90'} imgg={require('../assets/younggirl.jpg')} sub={'Subscription'} dat={'11 jul 2023'} />

        </View>
      </ScrollView>
    </View>
  )
}

export default AllTransactionReport