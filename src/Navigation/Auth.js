import React from 'react'
import {Login,Split,Onboarding,Otppage} from '../'
import OnboardProfile from '../Screens/OnboardProfile'
import OnboardBank from '../Screens/OnboardBank'
import OnboardLocation from '../Screens/OnboardLocation'
import OnboardDocument from '../Screens/OnboardDocument'
export default function(Stack){
    return(
        <>
        <Stack.Screen name="Split" component={Split} />
        <Stack.Screen name="Onboarding" component={Onboarding} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Otppage" component={Otppage} />
        <Stack.Screen name="OnboardProfile" component={OnboardProfile} />
        <Stack.Screen name="OnboardBank" component={OnboardBank} />
        <Stack.Screen name="OnboardLocation" component={OnboardLocation} />
        <Stack.Screen name="OnboardDocument" component={OnboardDocument} />
        
        </>
    )
}