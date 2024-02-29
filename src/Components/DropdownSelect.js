import { View, Text } from 'react-native'
import React,{useState} from 'react'
import { SelectList } from 'react-native-dropdown-select-list'


const DropdownSelect = ({type,select,sty,nam,dropdown,showContent,dropselect,setDropselect}) => {
   
  return (
    <View style={{marginTop:10}}>
      <Text style={{color:'grey'}}>{nam}</Text>
      <SelectList
        setSelected={setDropselect} 
        data={dropdown} 
        search={type=='type'?true:false}
        onSelect={select}
        inputStyles={{fontSize:17,color:'#000'}}
        boxStyles={{marginTop:sty}}
        placeholder={dropselect==''?showContent:dropselect}
    />
    </View>
  )
}

export default DropdownSelect