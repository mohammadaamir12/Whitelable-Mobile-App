import { View, Text, ImageBackground } from 'react-native'
import React from 'react'
import { COLORS, Sizes } from '../Colors/Colors'
import Icon from 'react-native-vector-icons/Ionicons';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';



const HomeCartView = ({
    img,
    name,
    balance,
    cusName
}) => {
    return (
        <View
            style={{
                justifyContent: 'space-evenly',
                flexDirection: 'row',
                marginTop: hp('2%'),
                marginStart: 8,
                marginEnd: 5,
                flex: 1,

            }}>
            <ImageBackground
                style={{
                    backgroundColor: '#8DC1B3',
                    height: hp('23%'),
                    width: wp('80%'),
                    borderRadius: 18,
                    elevation: 5, // for Android shadow
                    shadowColor: "#000", // for iOS shadow
                    shadowOffset: {
                        width: 0,
                        height: 2,
                    },
                    shadowOpacity: 0.23,
                    shadowRadius: 2.62,
                }}
                source={img}
                imageStyle={{ borderRadius: 20 }}>
                <View style={{ margin: 30 }}>
                    <View>
                        <Text
                            style={{
                                color: '#fff',
                                fontSize: 12,
                                fontWeight: '500'
                            }}>
                            {name}
                        </Text>
                        <Text
                            style={{
                                color: '#fff',
                                fontSize: 24,
                                fontWeight: '700'
                            }}>
                            {balance || '0'}
                        </Text>
                        <Text
                            style={{
                                color: '#fff',
                                fontSize: 14,
                                fontWeight: '500'
                            }}>
                            {cusName}
                        </Text>
                    </View>
                </View>

            </ImageBackground>
        </View>
    )
}

export default HomeCartView