import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

import { DateFormat } from './DateFormat'

export const ListItem = ( props ) => {
  
  return (
    <TouchableOpacity 
      style={itemStyles.item} 
      onPress={()=>{props.handler(props.item)}}
    >
      <View style={itemStyles.row}>
        <Text>
          {props.item.category} 
        </Text>
        <Text>
          $ {props.item.amount}
        </Text>
      </View>
    </TouchableOpacity>
  )
}

const itemStyles = StyleSheet.create({
  item : {
    paddingVertical: 15,
    borderBottomColor: '#cccccc',
    borderBottomWidth: 1,
  },
  row: {
    flexDirection: 'row',
    justifyContent:'space-between',
  },
})

