import { View, Text, TouchableOpacity, TextInput, ScrollView,Image } from 'react-native'
import React, { useState } from 'react'
import Icon from 'react-native-vector-icons/Feather'
import Icons from 'react-native-vector-icons/Ionicons'
import { COLORS } from '../Colors/Colors'
import { launchCamera, launchImageLibrary } from 'react-native-image-picker';
import { useNavigation,} from '@react-navigation/native';


const OnboardDocument = () => {
    const [imageuri, setImageuri] = useState('');
    const [imageuri2, setImageuri2] = useState('');
    const [imageuri3, setImageuri3] = useState('');
    const [imageuri4, setImageuri4] = useState('');
    const [imageuri5, setImageuri5] = useState('');
    const navigation=useNavigation();
    const imglib = () => {
        let options = {
            storageOptions: {
                path: 'image',
            },
        };
        launchImageLibrary(options, response => {
            setImageuri(response.assets[0].uri)
            console.log(imageuri);
        })
    }
    const imglib2 = () => {
        let options = {
            storageOptions: {
                path: 'image',
            },
        };
        launchImageLibrary(options, response => {
            setImageuri2(response.assets[0].uri)
            console.log(imageuri);
        })
    }
    const imglib3 = () => {
        let options = {
            storageOptions: {
                path: 'image',
            },
        };
        launchImageLibrary(options, response => {
            setImageuri3(response.assets[0].uri)
            console.log(imageuri);
        })
    }
    const imglib4 = () => {
        let options = {
            storageOptions: {
                path: 'image',
            },
        };
        launchImageLibrary(options, response => {
            setImageuri4(response.assets[0].uri)
            console.log(imageuri);
        })
    }
    const imglib5 = () => {
        let options = {
            storageOptions: {
                path: 'image',
            },
        };
        launchImageLibrary(options, response => {
            setImageuri5(response.assets[0].uri)
            console.log(imageuri);
        })
    }

    return (
        <ScrollView contentContainerStyle={{ flex: 1, paddingBottom: 40, backgroundColor: '#fff' }}>
            <View style={{ flex: 1, backgroundColor: COLORS.white }}>
                <View style={{ width: '90%', alignItems: 'center', justifyContent: 'center', flexDirection: 'row' }}>
                    <TouchableOpacity
                        style={{ width: '10%', right: 30 }} onPress={() => navigation.goBack()}>
                        <Icon name='arrow-left' size={30} color={COLORS.black} />
                    </TouchableOpacity>
                    <Text style={{ fontSize: 26, fontWeight: '700', color: COLORS.main }}>Document Details</Text>
                </View>
                <View style={{ flex: 1, width: '90%', alignSelf: 'center', marginTop: 20 }}>

                    <TouchableOpacity onPress={() => imglib()} activeOpacity={0.7} style={{ backgroundColor: imageuri == '' ? COLORS.main : COLORS.main2, borderRadius: 8, width: '100%', height: '6%', alignSelf: 'center', marginTop: 30, alignItems: 'center', justifyContent: 'center', elevation: 2, flexDirection: 'row' }}>
                        {imageuri == '' ? <Icon name='download-cloud' size={25} color={COLORS.white} /> : <Icons name='cloud-done-outline' size={25} color={COLORS.white} />}
                        <Text style={{ fontSize: 18, fontWeight: '500', color: COLORS.white, marginLeft: 20 }}>Customer Photo</Text>
                    </TouchableOpacity>
                    <TouchableOpacity activeOpacity={0.7} onPress={() => imglib2()} style={{ backgroundColor: imageuri2 == '' ? COLORS.main : COLORS.main2, borderRadius: 8, width: '100%', height: '6%', alignSelf: 'center', marginTop: 30, alignItems: 'center', justifyContent: 'center', elevation: 2, flexDirection: 'row' }}>
                        {imageuri2 == '' ? <Icon name='download-cloud' size={25} color={COLORS.white} /> : <Icons name='cloud-done-outline' size={25} color={COLORS.white} />}
                        <Text style={{ fontSize: 18, fontWeight: '500', color: COLORS.white, marginLeft: 20 }}>Customer Address</Text>
                    </TouchableOpacity>
                    <TouchableOpacity activeOpacity={0.7} onPress={() => imglib3()} style={{ backgroundColor: imageuri3 == '' ? COLORS.main : COLORS.main2, borderRadius: 8, width: '100%', height: '6%', alignSelf: 'center', marginTop: 30, alignItems: 'center', justifyContent: 'center', elevation: 2, flexDirection: 'row' }}>
                        {imageuri3 == '' ? <Icon name='download-cloud' size={25} color={COLORS.white} /> : <Icons name='cloud-done-outline' size={25} color={COLORS.white} />}
                        <Text style={{ fontSize: 18, fontWeight: '500', color: COLORS.white, marginLeft: 20 }}>Customer Signature</Text>
                    </TouchableOpacity>
                    <TouchableOpacity activeOpacity={0.7} onPress={() => imglib4()} style={{ backgroundColor: imageuri4 == '' ? COLORS.main : COLORS.main2, borderRadius: 8, width: '100%', height: '6%', alignSelf: 'center', marginTop: 30, alignItems: 'center', justifyContent: 'center', elevation: 2, flexDirection: 'row' }}>
                        {imageuri4 == '' ? <Icon name='download-cloud' size={25} color={COLORS.white} /> : <Icons name='cloud-done-outline' size={25} color={COLORS.white} />}
                        <Text style={{ fontSize: 18, fontWeight: '500', color: COLORS.white, marginLeft: 20 }}>Customer Pan Card</Text>
                    </TouchableOpacity>
                    <TouchableOpacity activeOpacity={0.7} onPress={() => imglib5()} style={{ backgroundColor: imageuri5 == '' ? COLORS.main : COLORS.main2, borderRadius: 8, width: '100%', height: '6%', alignSelf: 'center', marginTop: 30, alignItems: 'center', justifyContent: 'center', elevation: 2, flexDirection: 'row' }}>
                        {imageuri5 == '' ? <Icon name='download-cloud' size={25} color={COLORS.white} /> : <Icons name='cloud-done-outline' size={25} color={COLORS.white} />}
                        <Text style={{ fontSize: 18, fontWeight: '500', color: COLORS.white, marginLeft: 20 }}>Customer Shop Photo</Text>
                    </TouchableOpacity>
                    {/* <Image style={{height:200,width:200,alignSelf:'center',marginTop:20}} source={{uri:imageuri5}}  /> */}
                    <View style={{ flexDirection: 'row', width: '90%', alignSelf: 'center', justifyContent: 'space-between', marginTop: 40 }}>
                        <TouchableOpacity style={{ backgroundColor: COLORS.main, width: '45%', alignItems: 'center', paddingVertical: 10, borderRadius: 8 }}>
                            <Text style={{ fontSize: 16, fontWeight: '500', color: '#fff' }}>Submit</Text>
                        </TouchableOpacity>
                        <TouchableOpacity 
                         onPress={()=>navigation.navigate('HomeScreen')}
                        style={{ backgroundColor: COLORS.main, width: '45%', alignItems: 'center', paddingVertical: 10, borderRadius: 8 }}>
                            <Text style={{ fontSize: 16, fontWeight: '500', color: '#fff' }}>Next</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        </ScrollView>
    )
}

export default OnboardDocument