import { View, Text } from 'react-native'
import React,{useState} from 'react'
import { SelectList } from 'react-native-dropdown-select-list'


const DropdownSelect = ({sty,nam,dropdown,showContent,dropselect,setDropselect}) => {
    
  return (
    <View style={{marginTop:10}}>
      <Text style={{color:'grey'}}>{nam}</Text>
      <SelectList 
        save={dropselect}
        setSelected={(val) => setDropselect(val)} 
        data={dropdown} 
        search={false}
        inputStyles={{fontSize:17,color:'#000'}}
        boxStyles={{marginTop:sty}}
        placeholder={dropselect==null?showContent:dropselect}
    />
    </View>
  )
}

export default DropdownSelect