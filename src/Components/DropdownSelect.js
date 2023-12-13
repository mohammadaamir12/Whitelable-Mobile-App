import { View, Text } from 'react-native'
import React,{useState} from 'react'
import { SelectList } from 'react-native-dropdown-select-list'

const data = [
    {key:'1', value:'Mobiles'},
    {key:'2', value:'Appliances'},
    {key:'3', value:'Cameras'},
    {key:'4', value:'Computers'},
    {key:'5', value:'Vegetables'},
    {key:'6', value:'Diary Products'},
    {key:'7', value:'Drinks'},
]
const DropdownSelect = ({sty,nam}) => {
    const [selected, setSelected] = useState('')
  return (
    <View style={{marginTop:10}}>
      <Text>{nam}</Text>
      <SelectList 
        setSelected={(val) => setSelected(val)} 
        data={data} 
        search={false}
        inputStyles={{fontSize:17,}}
        boxStyles={{marginTop:sty}}
        placeholder='Select Bank'
    />
    </View>
  )
}

export default DropdownSelect