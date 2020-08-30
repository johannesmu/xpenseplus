import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export const DetailPage = (props) => {
  return (
    <View style={detailStyles.detail}>
      <Text style={detailStyles.amount}>$ {props.route.params.amount}</Text>
      <Text style={detailStyles.text}>{props.route.params.note}</Text>
      <Text>id: {props.route.params.id}</Text>
      
      <Text>category: {props.route.params.category}</Text>
      
    </View>
  )
}

const detailStyles = StyleSheet.create({
  detail: {
    flex: 1,
    backgroundColor: 'lightblue',
    paddingHorizontal: 15,
    paddingVertical: 10,
  },
  amount: {
    fontSize: 32,
  },
  text: {
    fontSize: 24,
  },
})