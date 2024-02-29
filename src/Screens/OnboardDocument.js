import { View, Text, TouchableOpacity, TextInput, ScrollView, Image, Modal, ActivityIndicator } from 'react-native'
import React, { useEffect, useState } from 'react'
import Icon from 'react-native-vector-icons/Feather'
import Icons from 'react-native-vector-icons/Ionicons'
import { COLORS } from '../Colors/Colors'
import { launchCamera, launchImageLibrary } from 'react-native-image-picker';
import { useNavigation, } from '@react-navigation/native';
import { Base_Url, UserProfile, updateUserDocuments } from '../Config/config'
import axios from "axios";
import Toast from 'react-native-tiny-toast'
import AsyncStorage from '@react-native-async-storage/async-storage';



const OnboardDocument = () => {
    const [imageuri, setImageuri] = useState('');
    const [imageuri2, setImageuri2] = useState('');
    const [imageuri3, setImageuri3] = useState('');
    const [imageuri4, setImageuri4] = useState('');
    const [imageuri5, setImageuri5] = useState('');
    const [imageurists, setImageurists] = useState('');
    const [imageuri2sts, setImageuri2sts] = useState('');
    const [imageuri3sts, setImageuri3sts] = useState('');
    const [imageuri4sts, setImageuri4sts] = useState('');
    const [imageuri5sts, setImageuri5sts] = useState('');
    const [modalVisible, setmodalVisible] = useState(false);
    
    const [track, settrack] = useState(false)
    const navigation = useNavigation();
    useEffect(() => {
        userget()
    }, [])
    const imglib = () => {
        let options = {
            storageOptions: {
                path: 'image',
            },
        };
        launchImageLibrary(options, response => {
            if (response.didCancel) {
                console.log('User cancelled image picker');
              }
              else if (response.error) {
                console.log('ImagePicker Error: ', response.error);
              }
              else {
                setImageuri(response.assets[0].uri)
                
              }
            
        })
    }
    const imglib2 = () => {
        let options = {
            storageOptions: {
                path: 'image',
            },
        };
        launchImageLibrary(options, response => {
            if (response.didCancel) {
                console.log('User cancelled image picker');
              }
              else if (response.error) {
                console.log('ImagePicker Error: ', response.error);
              }
              else {
                
                setImageuri2(response.assets[0].uri)  
              }
            

        })
    }
    const imglib3 = () => {
        let options = {
            storageOptions: {
                path: 'image',
            },
        };
        launchImageLibrary(options, response => {
            if (response.didCancel) {
                console.log('User cancelled image picker');
              }
              else if (response.error) {
                console.log('ImagePicker Error: ', response.error);
              }
              else {
                
                setImageuri3(response.assets[0].uri) 
              }
            
            

        })
    }
    const imglib4 = () => {
        let options = {
            storageOptions: {
                path: 'image',
            },
        };
        launchImageLibrary(options, response => {
            if (response.didCancel) {
                console.log('User cancelled image picker');
              }
              else if (response.error) {
                console.log('ImagePicker Error: ', response.error);
              }
              else {
                setImageuri4(response.assets[0].uri) 
              }
            

        })
    }
    const imglib5 = () => {
        let options = {
            storageOptions: {
                path: 'image',
            },
        };
        launchImageLibrary(options, response => {
            if (response.didCancel) {
                console.log('User cancelled image picker');
              }
              else if (response.error) {
                console.log('ImagePicker Error: ', response.error);
              }
              else {
                setImageuri5(response.assets[0].uri)
              }
           

        })
    }
    const userget = async () => {
        const token = await AsyncStorage.getItem('cus_token');
        const id = await AsyncStorage.getItem('cus_id');
        axios.get(Base_Url + UserProfile, {
            headers: {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*',
                'token': token,
                'cus_id': id
            }
        })
            .then(function (response) {

                if (response.data.status == 'SUCCESS') {
                    // console.log('datta', response.data.userData);
                    setImageuri(response.data.userData.cus_documents.cus_photo_image)
                    setImageuri2(response.data.userData.cus_documents.cus_address_image)
                    setImageuri3(response.data.userData.cus_documents.cus_signature_image)
                    setImageuri4(response.data.userData.cus_documents.cus_pancard_image)
                    setImageuri5(response.data.userData.cus_documents.shop_photo)
                    setImageurists(response.data.userData.document_approve.cus_photo)
                    setImageuri2sts(response.data.userData.document_approve.cus_address)
                    setImageuri3sts(response.data.userData.document_approve.cus_signature)
                    setImageuri4sts(response.data.userData.document_approve.cus_pancard);
                    setImageuri5sts(response.data.userData.document_approve.cus_shop);
                    set();


                }
                else if (response.data.status == 'FAIL') {
                    Toast.showSuccess('Failed')

                }

            }).catch(function (error) {
                Toast.showSuccess('Server Error')

            })

    }
    const set=()=>{
        if(bank!='' && bankacc!='' && ifsc_code!='' && panno!=''){
          settrack(true)
        }
      }

    const submit= async()=>{
         
        // console.log('heloo');
        const token = await AsyncStorage.getItem('cus_token');
        const id = await AsyncStorage.getItem('cus_id');
        if(imageuri!='' && imageuri2!='' && imageuri3!='' && imageuri4!='' && imageuri5!=''){
            const data = new FormData();
            data.append('photo',{ uri: imageuri, type: 'image/png', name: 'photo.jpg' });
            data.append('address_proof',{ uri: imageuri2, type: 'image/jpg', name: 'address_proof.png' });
            data.append('signature',{ uri: imageuri3, type: 'image/jpg', name: 'signature.png' });
            data.append('pancard',  { uri: imageuri4, type: 'image/jpg', name: 'pancard.png' });
            data.append('shop_photo', { uri: imageuri5, type: 'image/jpg', name: 'shop_photo.png' });
           console.log(data);
            axios({
                method: 'post',
                url: Base_Url+updateUserDocuments, 
                data: data,
                headers: {
                  'Content-Type': 'multipart/form-data',
                  'token': token,
                  'cus_id': id
                },
              })
              .then(response => {
                // console.log('Upload success:', response.data);
                settrack(true)
                setmodalVisible(false)
                Toast.showSuccess('Submitted')
              })
              .catch(error => {
                console.error('Upload error:', error.response ? error.response : error);
                // console.log(error.response.data)
              });
            
        }
        else{
            Toast.show('Upload all images')
        }
        
      }

      const next = () => {
    if (track == true && (imageuri!='' && imageuri2!='' && imageuri3!='' && imageuri4!='' && imageuri5!='') ) {
        navigation.reset({
            index: 0,
            routes: [{ name: 'HomeScreen'
        }],
        });
        
    }
  }


    return (
        <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={{ paddingBottom: '175%', backgroundColor: '#fff' }}>
            <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
      >
        <View style={{
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: 'rgba(0,0,0,0.5)',
          marginTop: 0
        }}>
          <ActivityIndicator size="large" color="#fff" />
        </View>
      </Modal>
     
            <View style={{ flex: 1, backgroundColor: COLORS.white }}>

                <View style={{ width: '100%', alignItems: 'center', justifyContent: 'center', flexDirection: 'row' }}>
                    
                    <Text style={{ fontSize: 26, fontWeight: '700', color: COLORS.main }}>Document Details</Text>
                </View>
                <View style={{ flex: 1, width: '90%', alignSelf: 'center', }}>
                    {imageurists==0 && imageuri!=''?<View style={{ height: '50%', marginTop: 10 }}>
                        {imageuri != '' ? <Image style={{ height: '55%', width: '40%', alignSelf: 'center', borderRadius: 8 }} source={{ uri: imageuri }} /> : null}
                        <TouchableOpacity onPress={() => imglib()} activeOpacity={0.7} style={{ backgroundColor: imageuri == '' ? COLORS.main : 'grey', borderRadius: 8, width: '100%', height: '25%', alignSelf: 'center', marginTop: 10, alignItems: 'center', justifyContent: 'center', elevation: 2, flexDirection: 'row' }}>
                            {imageuri == '' ? <Icon name='download-cloud' size={25} color={COLORS.white} /> : <Icons name='cloud-done-outline' size={25} color={COLORS.white} />}
                            <Text style={{ fontSize: 18, fontWeight: '500', color: COLORS.white, marginLeft: 20 }}>Customer Photo</Text>
                        </TouchableOpacity>
                    </View> :imageurists==0 && imageuri==''?<View style={{ height: '50%', marginTop: 10 }}>
                        <TouchableOpacity onPress={() => imglib()} activeOpacity={0.7} style={{ backgroundColor: imageuri == '' ? COLORS.main : 'grey', borderRadius: 8, width: '100%', height: '25%', alignSelf: 'center', marginTop: 10, alignItems: 'center', justifyContent: 'center', elevation: 2, flexDirection: 'row' }}>
                            {imageuri == '' ? <Icon name='download-cloud' size={25} color={COLORS.white} /> : <Icons name='cloud-done-outline' size={25} color={COLORS.white} />}
                            <Text style={{ fontSize: 18, fontWeight: '500', color: COLORS.white, marginLeft: 20 }}>Customer Photo</Text>
                        </TouchableOpacity>
                    </View>:null} 
                    {imageuri2sts==0 && imageuri2?<View style={{ height: '50%', marginTop: 10, }}>
                        {imageuri2 != '' ? <Image style={{ height: '55%', width: '40%', alignSelf: 'center', borderRadius: 8 }} source={{ uri: imageuri2 }} /> : null}
                        <TouchableOpacity activeOpacity={0.7} onPress={() => imglib2()} style={{ backgroundColor: imageuri2 == '' ? COLORS.main : 'grey', borderRadius: 8, width: '100%', height: '25%', alignSelf: 'center', marginTop: 10, alignItems: 'center', justifyContent: 'center', elevation: 2, flexDirection: 'row' }}>
                            {imageuri2 == '' ? <Icon name='download-cloud' size={25} color={COLORS.white} /> : <Icons name='cloud-done-outline' size={25} color={COLORS.white} />}
                            <Text style={{ fontSize: 18, fontWeight: '500', color: COLORS.white, marginLeft: 20 }}>Customer Address</Text>
                        </TouchableOpacity>
                    </View>:imageuri2sts==0 && imageuri2==''?<View style={{ height: '50%', marginTop: 10 }}>
                        <TouchableOpacity onPress={() => imglib2()} activeOpacity={0.7} style={{ backgroundColor: imageuri2 == '' ? COLORS.main : 'grey', borderRadius: 8, width: '100%', height: '25%', alignSelf: 'center', marginTop: 10, alignItems: 'center', justifyContent: 'center', elevation: 2, flexDirection: 'row' }}>
                            {imageuri2 == '' ? <Icon name='download-cloud' size={25} color={COLORS.white} /> : <Icons name='cloud-done-outline' size={25} color={COLORS.white} />}
                            <Text style={{ fontSize: 18, fontWeight: '500', color: COLORS.white, marginLeft: 20 }}>Customer Photo</Text>
                        </TouchableOpacity>
                    </View>:null} 
                  {imageuri3sts==0 && imageuri3?<View style={{ height: '50%', marginTop: 10 }}>
                        {imageuri3 != '' ? <Image style={{ height: '55%', width: '40%', alignSelf: 'center', borderRadius: 8 }} source={{ uri: imageuri3 }} /> : null}
                        <TouchableOpacity activeOpacity={0.7} onPress={() => imglib3()} style={{ backgroundColor: imageuri3 == '' ? COLORS.main : 'grey', borderRadius: 8, width: '100%', height: '25%', alignSelf: 'center', marginTop: 10, alignItems: 'center', justifyContent: 'center', elevation: 2, flexDirection: 'row' }}>
                            {imageuri3 == '' ? <Icon name='download-cloud' size={25} color={COLORS.white} /> : <Icons name='cloud-done-outline' size={25} color={COLORS.white} />}
                            <Text style={{ fontSize: 18, fontWeight: '500', color: COLORS.white, marginLeft: 20 }}>Customer Signature</Text>
                        </TouchableOpacity>
                    </View>:imageuri3sts==0 && imageuri3==''?<View style={{ height: '50%', marginTop: 10 }}>
                        <TouchableOpacity onPress={() => imglib3()} activeOpacity={0.7} style={{ backgroundColor: imageuri3 == '' ? COLORS.main : 'grey', borderRadius: 8, width: '100%', height: '25%', alignSelf: 'center', marginTop: 10, alignItems: 'center', justifyContent: 'center', elevation: 2, flexDirection: 'row' }}>
                            {imageuri3 == '' ? <Icon name='download-cloud' size={25} color={COLORS.white} /> : <Icons name='cloud-done-outline' size={25} color={COLORS.white} />}
                            <Text style={{ fontSize: 18, fontWeight: '500', color: COLORS.white, marginLeft: 20 }}>Customer Photo</Text>
                        </TouchableOpacity>
                    </View>:null}  
                   {imageuri4sts==0 && imageuri4!=''?<View style={{ height: '50%', marginTop: 10 }}>
                        {imageuri4 != '' ? <Image style={{ height: '55%', width: '40%', alignSelf: 'center', borderRadius: 8, }} source={{ uri: imageuri4 }} /> : null}
                        <TouchableOpacity activeOpacity={0.7} onPress={() => imglib4()} style={{ backgroundColor: imageuri4 == '' ? COLORS.main : 'grey', borderRadius: 8, width: '100%', height: '25%', alignSelf: 'center', marginTop: 10, alignItems: 'center', justifyContent: 'center', elevation: 2, flexDirection: 'row' }}>
                            {imageuri4 == '' ? <Icon name='download-cloud' size={25} color={COLORS.white} /> : <Icons name='cloud-done-outline' size={25} color={COLORS.white} />}
                            <Text style={{ fontSize: 18, fontWeight: '500', color: COLORS.white, marginLeft: 20 }}>Customer Pan Card</Text>
                        </TouchableOpacity>
                    </View>:imageuri4sts==0 && imageuri4==''?<View style={{ height: '50%', marginTop: 10 }}>
                        <TouchableOpacity onPress={() => imglib4()} activeOpacity={0.7} style={{ backgroundColor: imageuri4 == '' ? COLORS.main : 'grey', borderRadius: 8, width: '100%', height: '25%', alignSelf: 'center', marginTop: 10, alignItems: 'center', justifyContent: 'center', elevation: 2, flexDirection: 'row' }}>
                            {imageuri4 == '' ? <Icon name='download-cloud' size={25} color={COLORS.white} /> : <Icons name='cloud-done-outline' size={25} color={COLORS.white} />}
                            <Text style={{ fontSize: 18, fontWeight: '500', color: COLORS.white, marginLeft: 20 }}>Customer Photo</Text>
                        </TouchableOpacity>
                    </View>:null}  
                 {imageuri5sts==0 && imageuri5!=''? <View style={{ height: '50%', marginTop: 10 }}>
                        {imageuri5 != '' ? <Image style={{ height: '55%', width: '40%', alignSelf: 'center', borderRadius: 8, }} source={{ uri: imageuri5 }} /> : null}
                        <TouchableOpacity activeOpacity={0.7} onPress={() => imglib5()} style={{ backgroundColor: imageuri5 == '' ? COLORS.main : 'grey', borderRadius: 8, width: '100%', height: '25%', alignSelf: 'center', marginTop: 10, alignItems: 'center', justifyContent: 'center', elevation: 2, flexDirection: 'row' }}>
                            {imageuri5 == '' ? <Icon name='download-cloud' size={25} color={COLORS.white} /> : <Icons name='cloud-done-outline' size={25} color={COLORS.white} />}
                            <Text style={{ fontSize: 18, fontWeight: '500', color: COLORS.white, marginLeft: 20 }}>Customer Shop Photo</Text>
                        </TouchableOpacity>
                    </View> :imageuri5sts==0 && imageuri5==''?<View style={{ height: '50%', marginTop: 10 }}>
                        <TouchableOpacity onPress={() => imglib5()} activeOpacity={0.7} style={{ backgroundColor: imageuri5 == '' ? COLORS.main : 'grey', borderRadius: 8, width: '100%', height: '25%', alignSelf: 'center', marginTop: 10, alignItems: 'center', justifyContent: 'center', elevation: 2, flexDirection: 'row' }}>
                            {imageuri5 == '' ? <Icon name='download-cloud' size={25} color={COLORS.white} /> : <Icons name='cloud-done-outline' size={25} color={COLORS.white} />}
                            <Text style={{ fontSize: 18, fontWeight: '500', color: COLORS.white, marginLeft: 20 }}>Customer Photo</Text>
                        </TouchableOpacity>
                    </View>:null}  

                    {/* <Image style={{height:200,width:200,alignSelf:'center',marginTop:20}} source={{uri:imageuri5}}  /> */}
                    <View style={{ flexDirection: 'row', width: '90%', alignSelf: 'center', justifyContent: 'space-between', marginTop: 40 }}>
                        <TouchableOpacity onPress={submit} style={{ backgroundColor: COLORS.main, width: '45%', alignItems: 'center', paddingVertical: 10, borderRadius: 8 }}>
                            <Text style={{ fontSize: 16, fontWeight: '500', color: '#fff' }}>Submit</Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            onPress={next}
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