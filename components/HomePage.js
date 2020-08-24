import React, { useState } from 'react';
import { StyleSheet, Text, View, FlatList, TouchableOpacity, Button } from 'react-native';
import { useNavigation, useLinkProps } from '@react-navigation/native';


export const HomePage = (props) => {
  const [ data, setData ] = useState(props.data)
  const navigation = useNavigation()

  const handleClick = (item) => {
    navigation.navigate("Detail",item)
    console.log(item)
  }

  const renderList = ({item}) =>  (
    <ListItem id={item.id} amount={item.amount} item={item} handler={handleClick} />
  )

  return (
    <View style={{paddingHorizontal: 10}}>
      <Text>{props.text}</Text>
      {/* <Button title="go to details" onPress={()=>navigation.navigate("Detail",{name: 'bro'})} /> */}
      <FlatList 
        data = {props.data}
        renderItem = {renderList}
        keyExtractor = {item => item.id}
      />
    </View>
  )
}

const ListItem = (props) => {
  return (
    <TouchableOpacity onPress={()=>{props.handler(props.item)}}>
      <View style={homeStyles.item}>
        <Text>
          {props.id} 
        </Text>
        <Text>
          $ {props.amount}
        </Text>
      </View>
    </TouchableOpacity>
  )
}

const homeStyles = StyleSheet.create({
  view: {
    flex: 1,
    justifyContent: 'center',
  },
  item: {
    paddingVertical: 10,
    borderBottomColor: '#cccccc',
    flexDirection:'row',
    justifyContent:'space-between',
  },
})