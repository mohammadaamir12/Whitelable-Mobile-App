import React from 'react'
import { HomeScreen, Login } from '../'
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
import PGFundRequestReport from '../Screens/PGFundRequestReport'
import POSFundRequestReport from '../Screens/POSFundRequestReport'
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
import { createNativeStackNavigator } from '@react-navigation/native-stack';
const Stack = createNativeStackNavigator();
// export default function (Stack) {
//     return (
//         <>











//         </>
//     )
// }


const Main = () => {
    return (
        <Stack.Navigator screenOptions={{
            headerShown: false,
            animationTypeForReplace: 'push',
            animation: 'slide_from_right',
           
        }}
        
        >
            <Stack.Screen name="HomeScreen" component={HomeScreen} />
            <Stack.Screen name="Payout" component={Payout} />
            <Stack.Screen name="Verificationsuit" component={Verificationsuit} />
            <Stack.Screen name="ReportDetails" component={ReoprtDetails} />
            <Stack.Screen name="RequestFund" component={RequestFund} />
            <Stack.Screen name="TopUp" component={TopUp} />
            <Stack.Screen name="PayoutMoneytrans" component={PayoutMoneytrans} />
            <Stack.Screen name="BankBeneficiery" component={BankBeneficiery} />
            <Stack.Screen name="CreditCardBeneficiery" component={CreditCardBeneficiery} />
            <Stack.Screen name="PayoutSendMoney" component={PayoutSendMoney} />
            <Stack.Screen name="PayoutReoprt" component={PayoutReoprt} />
            <Stack.Screen name="TopUpReport" component={TopUpReport} />
            <Stack.Screen name="FundRequestReport" component={FundRequestReport} />
            <Stack.Screen name="PGFundRequestReport" component={PGFundRequestReport} />
            <Stack.Screen name="POSFundRequestReport" component={POSFundRequestReport} />
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
    )
}

export default Main