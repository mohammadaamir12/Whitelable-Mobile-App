import { View, Text, StyleSheet, TextInput, Image, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { COLORS, Sizes } from '../Colors/Colors'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';




const Login = ({ navigation }) => {
    const [secure, setSecure] = useState(true);
    const [showpass, setShowPass] = useState(true);
    const [pass, setPass] = useState('');
    const [phone, setPhone] = useState('');
    const [phoneerr, setPhoneErr] = useState(false);
    const [passErr, setPassErr] = useState(false);

    const passwordShow = () => {
        if (secure === true) {
            setSecure(false)
            setShowPass(false)  
        }
        else{
            setSecure(true)
            setShowPass(true)
        }
       

    }

    const submit = () => {
        if (!phone) {
            setPhoneErr(true)
        }
        if (!pass) {
            setPassErr(true)
        }
        if (phone) {
            setPhoneErr(false)
        }
        if (pass) {
            setPassErr(false)
        }
        if (phone && pass) {
            navigation.navigate('HomeScreen')
        }

    }
    return (
        <View style={{ flex: 1, alignItems: 'center', backgroundColor: COLORS.white }}>
            <View style={{ width: Sizes.width * 0.90, marginTop: Sizes.height * 0.10 }}>
                <View>
                    <Text style={styles.maintxt}>Hello there,</Text>
                    <Text style={styles.maintxt2}>Welcome to Whitelable</Text>
                    <Text style={styles.signtxt}>Signin to continue</Text>
                </View>

                <View style={{ marginTop: hp('5%') }}>
                    <Text style={{ color: 'grey', fontSize: hp('2%') }}>Email Address/Phone Number</Text>
                    <View style={{ flexDirection: 'row', alignItems: 'center', }}>
                        <TextInput value={phone} onChangeText={setPhone} style={{ borderBottomColor: 'grey', borderBottomWidth: 1, width: '100%', fontSize: 17, color: COLORS.black }} />
                    </View>
                    {phoneerr == true ? <Text style={{ marginTop: 5, color: 'red', fontSize: 14, fontWeight: 'bold' }}>Please enter Email/Number !</Text> : null}
                </View>
                <View style={{ marginTop: hp('5%') }}>
                    <Text style={{ color: 'grey', fontSize: hp('2%') }}>Password</Text>
                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                        <TextInput value={pass} onChangeText={setPass} secureTextEntry={showpass} style={{ borderBottomColor: 'grey', borderBottomWidth: 1, width: '100%', fontSize: 17,color:COLORS.black }} placeholderTextColor={COLORS.black} />
                        <TouchableOpacity activeOpacity={0.5} onPress={() => passwordShow()}>
                            {secure == true ? <Image source={require('../assets/icons8-eye-48.png')} style={{ height: hp('4.5%'), width: wp('8%'), right: 35 }} /> : <Image source={require('../assets/eye-close.png')} style={{ height: hp('4%'), width: wp('8%'), right: 35 }} />}
                        </TouchableOpacity>
                    </View>
                    {passErr == true ? <Text style={{ marginTop: 5, color: 'red', fontSize: 14, fontWeight: 'bold' }}>Please enter Password !</Text> : null}
                </View>
                <TouchableOpacity onPress={() => submit()} style={{ backgroundColor: COLORS.main, height: hp('7%'), alignItems: 'center', justifyContent: 'center', borderRadius: 30, marginTop: hp('16%') }}>
                    <Text style={{ color: COLORS.white, fontSize: 22, fontWeight: 'bold' }}>Sign in</Text>
                </TouchableOpacity>

            </View>

        </View>
    )
}

const styles = StyleSheet.create({
    maintxt: {
        fontSize: hp('4%'),
        fontWeight: 'bold',
        color: COLORS.main
    },
    maintxt2: {
        fontSize: hp('4%'),
        fontWeight: 'bold',
        color: COLORS.main,
        width: '100%',
        flexWrap:'nowrap'
    },
    signtxt: {
        fontSize: hp('2.5%'),
        color: COLORS.black,
        marginTop: hp('3%')
    },
})

export default Login