import { View, Text, ImageBackground } from 'react-native'
import React from 'react'
import { COLORS, Sizes } from '../Colors/Colors'
import Icon from 'react-native-vector-icons/Ionicons';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';



const HomeCartView = ({
    img,
    name,
    balance
}) => {
    return (
        <View
            style={{
                justifyContent: 'space-evenly',
                flexDirection: 'row',
                marginTop: hp('2%'),
                marginStart: 8,
                marginEnd: 5,
                flex: 1
            }}>
            <ImageBackground
                style={{
                    backgroundColor: '#8DC1B3',
                    height: hp('23%'),
                    width: wp('80%'),
                    borderRadius: 18,
                    shadowColor: "#000",
                    shadowOffset: { width: 0, height: 1 },
                    shadowOpacity: 10,
                    shadowRadius: 7,
                    elevation: 4
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
                            {balance}
                        </Text>
                        <Text
                            style={{
                                color: '#fff',
                                fontSize: 14,
                                fontWeight: '500'
                            }}>
                            Abhishek Jajoria
                        </Text>
                    </View>
                </View>

            </ImageBackground>
        </View>
    )
}

export default HomeCartView