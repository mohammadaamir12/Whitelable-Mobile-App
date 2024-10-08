
import React, { useEffect, useState } from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { HomeScreen } from '../'
import {Login,Split,Onboarding,Otppage,} from '../'
import OnboardProfile from '../Screens/OnboardProfile'
import OnboardBank from '../Screens/OnboardBank'
import OnboardLocation from '../Screens/OnboardLocation'
import OnboardDocument from '../Screens/OnboardDocument'
import Payout from '../Screens/Payout'
import Verificationsuit from '../Screens/Verificationsuit'
import ReoprtDetails from '../Screens/ReoprtDetails'
import RequestFund from '../Screens/RequestFund'
import TopUp from '../Screens/TopUp'
import PayoutMoneytrans from '../Screens/PayoutMoneytrans'
import BankBeneficiery from '../Screens/BankBeneficiery'
import CreditCardBeneficiery from '../Screens/CreditCardBeneficiery'
import PayoutSendMoney from '../Screens/PayoutSendMoney'
import PayoutReoprt from '../Screens/PayoutReoprt'
import TopUpReport from '../Screens/TopUpReport'
import FundRequestReport from '../Screens/FundRequestReport'
import AllTransactionReport from '../Screens/AllTransactionReport'
import VerifyCard from '../Screens/VerifyCard'
import VerifyPan from '../Screens/VerifyPan'
import VerifyAdhar from '../Screens/VerifyAdhar'
import VerifyAccount from '../Screens/VerifyAccount'
import VerifyGST from '../Screens/VerifyGST'
import VerifyUPI from '../Screens/VerifyUPI'
import VerificationReport from '../Screens/VerificationReport'
import WalletDetails from '../Screens/WalletDetails'
import AccountProfile from '../Screens/AccountProfile'
import AccountBankDetails from '../Screens/AccountBankDetails'
import AccountLocation from '../Screens/AccountLocation'
import AccountDocumentDetails from '../Screens/AccountDocumentDetails'
import AccountChangePassword from '../Screens/AccountChangePassword'
import AccountChangePin from '../Screens/AccountChangePin'
import { StatusBar } from 'react-native';
import Securemood1 from '../Screens/Securemood1';
import Normal1 from '../Screens/Normal1';
import Securekycnotverified from '../Screens/Securekycnotverified';
const Stack = createNativeStackNavigator();
import {isTokenExpired} from './Tokenutil'
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation } from '@react-navigation/native';
import RecentTransactiondetails from '../Screens/RecentTransactiondetails';


const Route = ({navigation}) => {
  const [token, setToken] = useState(null);
  // const navigation = useNavigation();
  // useEffect(()=>{
  //   checkTokenValidity();
    
  //   const tokenCheckInterval = setInterval(() => {
  //     checkTokenValidity();
  //   }, 60000);
  //   return () => clearInterval(tokenCheckInterval);
  // },[])
  const checkTokenValidity = async () => {
    const storedToken = await AsyncStorage.getItem('cus_token');
    console.log('sdfdfd',storedToken)
    if (storedToken) {
      
      if (isTokenExpired(storedToken)) {
        
        navigateToLogin(); 
      } else {
     
        setToken(storedToken);
        console.log('helloo mitaaaa don')
      }
    } else {
      navigateToLogin();
    }
  };
  const navigateToLogin = () => {
    // Navigate to login screen using navigation prop
    // This assumes you are using React Navigation and have access to navigation prop
    navigation.navigate('Login');
  };

  return (
    <NavigationContainer>
      <StatusBar backgroundColor={"#fff"} />
      {/* <Stack.Navigator screenOptions={{headerShown:false,
    animationTypeForReplace: 'push',
    animation:'slide_from_right'
    }}> */}
      {/* {screen==true?Main(Stack):Auth(Stack)} */}
      {/* {screen==true?<Main/>:<Auth/>} */}
      <Stack.Navigator screenOptions={{
        headerShown: false,
        animationTypeForReplace: 'push',
        animation: 'slide_from_right'
      }}
      >
        <Stack.Screen name="Split" component={Split} />
        <Stack.Screen name="Onboarding" component={Onboarding} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Otppage" component={Otppage} />
        <Stack.Screen name="OnboardProfile" component={OnboardProfile} />
        <Stack.Screen name="OnboardBank" component={OnboardBank} />
        <Stack.Screen name="OnboardLocation" component={OnboardLocation} />
        <Stack.Screen name="OnboardDocument" component={OnboardDocument} />
        <Stack.Screen name="HomeScreen" component={HomeScreen} />
        <Stack.Screen name="RecentTransactiondetails" component={RecentTransactiondetails} />
        <Stack.Screen name="Payout" component={Payout} />
        <Stack.Screen name="Verificationsuit" component={Verificationsuit} />
        <Stack.Screen name="ReportDetails" component={ReoprtDetails} />
        <Stack.Screen name="RequestFund" component={RequestFund} />
        <Stack.Screen name="TopUp" component={TopUp} />
        <Stack.Screen name="PayoutMoneytrans" component={PayoutMoneytrans} />
        <Stack.Screen name="Securekycnotverified" component={Securekycnotverified} />
        <Stack.Screen name="BankBeneficiery" component={BankBeneficiery} />
        <Stack.Screen name="CreditCardBeneficiery" component={CreditCardBeneficiery} />
        <Stack.Screen name="PayoutSendMoney" component={PayoutSendMoney} />
        <Stack.Screen name="PayoutReoprt" component={PayoutReoprt} />
        <Stack.Screen name="Securemood1" component={Securemood1} />
        <Stack.Screen name="Normal1" component={Normal1} />
        <Stack.Screen name="TopUpReport" component={TopUpReport} />
        <Stack.Screen name="FundRequestReport" component={FundRequestReport} />
        <Stack.Screen name="AllTransactionReport" component={AllTransactionReport} />
        <Stack.Screen name="VerifyCard" component={VerifyCard} />
        <Stack.Screen name="VerifyPan" component={VerifyPan} />
        <Stack.Screen name="VerifyAdhar" component={VerifyAdhar} />
        <Stack.Screen name="VerifyAccount" component={VerifyAccount} />
        <Stack.Screen name="VerifyGST" component={VerifyGST} />
        <Stack.Screen name="VerifyUPI" component={VerifyUPI} />
        <Stack.Screen name="VerificationReport" component={VerificationReport} />
        <Stack.Screen name="WalletDetails" component={WalletDetails} />
        <Stack.Screen name="AccountProfile" component={AccountProfile} />
        <Stack.Screen name="AccountBankDetails" component={AccountBankDetails} />
        <Stack.Screen name="AccountLocation" component={AccountLocation} />
        <Stack.Screen name="AccountDocumentDetails" component={AccountDocumentDetails} />
        <Stack.Screen name="AccountChangePassword" component={AccountChangePassword} />
        <Stack.Screen name="AccountChangePin" component={AccountChangePin} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default Route