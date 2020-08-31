import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, FlatList } from 'react-native';
import { useNavigation, useLinkProps } from '@react-navigation/native';

import {ListItem} from './ListItem'

export const ListPage = (props) => {
  const renderList = ({item}) =>  (
    <ListItem item={item} handler={handleClick} />
  )

  return (
    <View>
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