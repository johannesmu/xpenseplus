import React, { useState } from 'react';
import { StyleSheet, Text, View, FlatList, TouchableOpacity, Button } from 'react-native';
import { useNavigation, useLinkProps } from '@react-navigation/native';

import {ListItem} from './ListItem'

export const HomePage = (props) => {
  const [ data, setData ] = useState(props.data)
  const navigation = useNavigation()

  const handleClick = (item) => {
    navigation.navigate("Detail",item)
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



const homeStyles = StyleSheet.create({
  view: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: 'lightblue',
  },
})