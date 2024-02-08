import { ActivityIndicator, View, Text, StyleSheet, TextInput, Image, TouchableOpacity } from 'react-native'
import React, { useEffect, useState, } from 'react'
import { COLORS, Sizes } from '../Colors/Colors'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import axios from "axios";
import Toast from 'react-native-tiny-toast'
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Base_Url, login } from '../Config/config';



const Login = ({ navigation }) => {
    const [secure, setSecure] = useState(true);
    const [showpass, setShowPass] = useState(true);
    const [pass, setPass] = useState('');
    const [phone, setPhone] = useState('');
    const [phoneerr, setPhoneErr] = useState(false);
    const [passErr, setPassErr] = useState(false);
    const [loading, isLoading] = useState(false);
    const [userData, setUserData] = useState(null);
    

    // useEffect(() => {
    //     console.log('sdddd', userData); // Log the updated state
    //     // Perform other actions if needed
    //   }, [userData]);
    const loginprofile = async () => {
        const value = await AsyncStorage.getItem('profile');
        // console.log(value);
        isLoading(false)
        if (value == '1') {


            Toast.showSuccess('Success')
            navigation.reset({
                index: 0,
                routes: [{ name: 'HomeScreen' }],
            });

        }
        else {
            // isLoading(false)
            Toast.showSuccess('Success')
            navigation.reset({
                index: 0,
                routes: [{ name: 'OnboardProfile'
            }],
            });
            
           
        }
    }
    const signin = async () => {
        isLoading(true)
        // console.log(`${Base_Url}/user/${userId}`);
        axios.post(Base_Url + login, {
            username: phone,
            password: pass,
        })
            .then(function (response) {

                if (response.data.status == 'SUCCESS') {
                    setUserData(response.data.status)
                    AsyncStorage.setItem('mess', response.data.status)
                    AsyncStorage.setItem('profile', response.data.userData.profile_flag)
                    AsyncStorage.setItem('cus_id', response.data.userData.cus_id)
                    AsyncStorage.setItem('cus_token', response.data.userData.cus_token)
                    
                    // console.log('sdddd',userData);
                    // console.log("response",response);
                    loginprofile();

                }
                else if (response.data.status == 'FAIL') {
                    Toast.showSuccess('Failed')
                    isLoading(false)
                    setPhone('')
                    setPass('')
                }

            }).catch(function (error) {
                Toast.showSuccess('Server Error')
                isLoading(false)
                setPhone('')
                setPass('')
            })



    }

    const passwordShow = () => {
        if (secure === true) {
            setSecure(false)
            setShowPass(false)
        }
        else {
            setSecure(true)
            setShowPass(true)
        }


    }

    const submit = () => {
        var format = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+/;
        if (!phone) {
            setPhoneErr(true)
        }
        if (!pass) {
            setPassErr(true)
        }
        if (phone && format.test(phone)) {
            setPhoneErr(false)
        }
        if (pass) {
            setPassErr(false)
        }
        if (phone && pass) {
            signin();
        }

    }
    
    return (
        <View style={{ flex: 1, alignItems: 'center', backgroundColor: COLORS.white }}>
            {loading == true ? <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: '#fff' }} >
                <ActivityIndicator size="large" color={COLORS.main} />
            </View> : <View style={{ width: Sizes.width * 0.90, marginTop: Sizes.height * 0.10 }}>
                <View>
                    <Text style={styles.maintxt}>Hello there,</Text>
                    <Text style={styles.maintxt2}>Welcome to Whitelable</Text>
                    <Text style={styles.signtxt}>Signin to continue</Text>
                </View>
                {/* {console.log('inside render',userData)} */}
                <View style={{ marginTop: hp('5%') }}>
                    <Text style={{ color: 'grey', fontSize: hp('2%') }}>Phone Number</Text>
                    <View style={{ flexDirection: 'row', alignItems: 'center', }}>
                        <TextInput value={phone} onChangeText={setPhone} style={{ borderBottomColor: 'grey', borderBottomWidth: 1, width: '100%', fontSize: 17, color: COLORS.black }} maxLength={10} keyboardType='numeric' />
                    </View>
                    {phoneerr == true ? <Text style={{ marginTop: 5, color: 'red', fontSize: 14, fontWeight: 'bold' }}>Please enter Email/Number !</Text> : null}
                </View>
                <View style={{ marginTop: hp('5%') }}>
                    <Text style={{ color: 'grey', fontSize: hp('2%') }}>Password</Text>
                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                        <TextInput value={pass} onChangeText={setPass} secureTextEntry={showpass} style={{ borderBottomColor: 'grey', borderBottomWidth: 1, width: '100%', fontSize: 17, color: COLORS.black }} placeholderTextColor={COLORS.black} />
                        <TouchableOpacity activeOpacity={0.5} onPress={() => passwordShow()}>
                            {secure == true ? <Image source={require('../assets/icons8-eye-48.png')} style={{ height: hp('4.5%'), width: wp('8%'), right: 35 }} /> : <Image source={require('../assets/eye-close.png')} style={{ height: hp('4%'), width: wp('8%'), right: 35 }} />}
                        </TouchableOpacity>
                    </View>
                    {passErr == true ? <Text style={{ marginTop: 5, color: 'red', fontSize: 14, fontWeight: 'bold' }}>Please enter Password !</Text> : null}
                </View>
                <TouchableOpacity onPress={() => submit()} style={{ backgroundColor: COLORS.main, height: hp('7%'), alignItems: 'center', justifyContent: 'center', borderRadius: 30, marginTop: hp('16%') }}>
                    <Text style={{ color: COLORS.white, fontSize: 22, fontWeight: 'bold' }}>Sign in</Text>
                </TouchableOpacity>

            </View>}
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
        flexWrap: 'nowrap'
    },
    signtxt: {
        fontSize: hp('2.5%'),
        color: COLORS.black,
        marginTop: hp('3%')
    },
})

export default Login