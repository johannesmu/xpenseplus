import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

const dayNames = [
  'Monday','Tuesday','Wednesday', 'Thursday', 'Friday',
]

const monthNames = [
  'January','February','March','April','May','June','July',
  'August','September','October','November','December'
]

export const DateFormat = ( props ) => {
  const formatDate = (tstamp) => {
    const dateObj = new Date(tstamp)
    // get the number of the day
    const day = dayNames[ dateObj.getDay() ]
    // get the date number
    const date = dateObj.getDate()
    // get the month number
    const month = monthNames[ dateObj.getMonth() ]
    // get the year number
    const year = dateObj.getFullYear()
    // return the date string
    return `${day} ${date} ${month} ${year}`
  }

  return (
    <Text style={{fontSize: props.size, color: props.color }}>
      {formatDate(props.date)}
    </Text>
  )
}