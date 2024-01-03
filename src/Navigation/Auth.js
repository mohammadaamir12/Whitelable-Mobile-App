import React from 'react'
import {Login,Split,Onboarding,Otppage,} from '../'
import OnboardProfile from '../Screens/OnboardProfile'
import OnboardBank from '../Screens/OnboardBank'
import OnboardLocation from '../Screens/OnboardLocation'
import OnboardDocument from '../Screens/OnboardDocument'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Main from './Main'
const Stack = createNativeStackNavigator();
// export default function(Stack){
//     return(
//         <>
       
        
//         </>
//     )
// }

const Auth = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown:false,
        animationTypeForReplace: 'push',
        animation:'slide_from_right'
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
        
            </Stack.Navigator>
  )
}

export default Auth