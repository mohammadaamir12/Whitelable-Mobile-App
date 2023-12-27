import { View, Text, TouchableOpacity, TextInput, ScrollView } from 'react-native'
import React from 'react'
import Icon from 'react-native-vector-icons/Feather'
import { COLORS } from '../Colors/Colors'


const OnboardDocument = ({ navigation }) => {
    return (
        <ScrollView contentContainerStyle={{ flex: 1, paddingBottom: 40, backgroundColor: '#fff' }}>
            <View style={{ flex: 1, backgroundColor: COLORS.white }}>
                <View style={{ width: '90%', alignItems: 'center', justifyContent: 'center', flexDirection: 'row' }}>
                    <TouchableOpacity style={{ width: '10%', right: 30 }} onPress={() => navigation.goBack()}>
                        <Icon name='arrow-left' size={30} color={COLORS.black} />
                    </TouchableOpacity>
                    <Text style={{ fontSize: 26, fontWeight: '700', color: COLORS.main }}>Document Details</Text>
                </View>
                <View style={{ flex: 1, width: '90%', alignSelf: 'center', marginTop: 20 }}>

                    <TouchableOpacity activeOpacity={0.7} style={{ backgroundColor: COLORS.main, borderRadius: 8, width: '100%', height: '6%', alignSelf: 'center', marginTop: 30, alignItems: 'center', justifyContent: 'center', elevation: 2, flexDirection: 'row' }}>
                        <Icon name='download-cloud' size={25} color={COLORS.white} />
                        <Text style={{ fontSize: 18, fontWeight: '500', color: COLORS.white, marginLeft: 20 }}>Customer Photo</Text>
                    </TouchableOpacity>
                    <TouchableOpacity activeOpacity={0.7} style={{ backgroundColor: COLORS.main, borderRadius: 8, width: '100%', height: '6%', alignSelf: 'center', marginTop: 30, alignItems: 'center', justifyContent: 'center', elevation: 2, flexDirection: 'row' }}>
                        <Icon name='download-cloud' size={25} color={COLORS.white} />
                        <Text style={{ fontSize: 18, fontWeight: '500', color: COLORS.white, marginLeft: 20 }}>Customer Address</Text>
                    </TouchableOpacity>
                    <TouchableOpacity activeOpacity={0.7} style={{ backgroundColor: COLORS.main, borderRadius: 8, width: '100%', height: '6%', alignSelf: 'center', marginTop: 30, alignItems: 'center', justifyContent: 'center', elevation: 2, flexDirection: 'row' }}>
                        <Icon name='download-cloud' size={25} color={COLORS.white} />
                        <Text style={{ fontSize: 18, fontWeight: '500', color: COLORS.white, marginLeft: 20 }}>Customer Signature</Text>
                    </TouchableOpacity>
                    <TouchableOpacity activeOpacity={0.7} style={{ backgroundColor: COLORS.main, borderRadius: 8, width: '100%', height: '6%', alignSelf: 'center', marginTop: 30, alignItems: 'center', justifyContent: 'center', elevation: 2, flexDirection: 'row' }}>
                        <Icon name='download-cloud' size={25} color={COLORS.white} />
                        <Text style={{ fontSize: 18, fontWeight: '500', color: COLORS.white, marginLeft: 20 }}>Customer Pan Card</Text>
                    </TouchableOpacity>

                    <TouchableOpacity activeOpacity={0.7} style={{ backgroundColor: COLORS.main, borderRadius: 8, width: '100%', height: '6%', alignSelf: 'center', marginTop: 30, alignItems: 'center', justifyContent: 'center', elevation: 2, flexDirection: 'row' }}>
                        <Icon name='download-cloud' size={25} color={COLORS.white} />
                        <Text style={{ fontSize: 18, fontWeight: '500', color: COLORS.white, marginLeft: 20 }}>Customer Shop Photo</Text>
                    </TouchableOpacity>
                    <View style={{ flexDirection: 'row', width: '90%', alignSelf: 'center', justifyContent: 'space-between', marginTop: 40 }}>
                        <TouchableOpacity style={{ backgroundColor: COLORS.main, width: '45%', alignItems: 'center', paddingVertical: 10, borderRadius: 8 }}>
                            <Text style={{ fontSize: 16, fontWeight: '500', color: '#fff' }}>Submit</Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => navigation.navigate('HomeScreen')} style={{ backgroundColor: COLORS.main, width: '45%', alignItems: 'center', paddingVertical: 10, borderRadius: 8 }}>
                            <Text style={{ fontSize: 16, fontWeight: '500', color: '#fff' }}>Next</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        </ScrollView>
    )
}

export default OnboardDocument