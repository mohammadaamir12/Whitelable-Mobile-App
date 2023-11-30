import React from 'react'
import {HomeScreen} from '../'
import Payout from '../Screens/Payout'
import Verificationsuit from '../Screens/Verificationsuit'
import ReoprtDetails from '../Screens/ReoprtDetails'
import RequestFund from '../Screens/RequestFund'
import TopUp from '../Screens/TopUp'
import PayoutMoneytrans from '../Screens/PayoutMoneytrans'
import BankBeneficiery from '../Screens/BankBeneficiery'
import CreditCardBeneficiery from '../Screens/CreditCardBeneficiery'
export default function(Stack){
    return(
        <>
        <Stack.Screen name="HomeScreen" component={HomeScreen} />
        <Stack.Screen name="Payout" component={Payout} />
        <Stack.Screen name="Verificationsuit" component={Verificationsuit} />
        <Stack.Screen name="ReportDetails" component={ReoprtDetails} />
        <Stack.Screen name="RequestFund" component={RequestFund} />
        <Stack.Screen name="TopUp" component={TopUp} />
        <Stack.Screen name="PayoutMoneytrans" component={PayoutMoneytrans} />
        <Stack.Screen name="BankBeneficiery" component={BankBeneficiery} />
        <Stack.Screen name="CreditCardBeneficiery" component={CreditCardBeneficiery} />
        
        

        </>
    )
}