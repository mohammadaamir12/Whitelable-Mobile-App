import React from 'react'
import {HomeScreen} from '../'
export default function(Stack){
    return(
        <>
        <Stack.Screen name="HomeScreen" component={HomeScreen} />
        </>
    )
}