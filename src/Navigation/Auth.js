import React from 'react'
import {Login,Split,Onboarding,Otppage} from '../'
export default function(Stack){
    return(
        <>
        <Stack.Screen name="Split" component={Split} />
        <Stack.Screen name="Onboarding" component={Onboarding} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Otppage" component={Otppage} />
        </>
    )
}