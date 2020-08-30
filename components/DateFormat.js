import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

const dayNames = [
  'Sunday','Monday','Tuesday','Wednesday', 'Thursday', 'Friday','Saturday'
]

const monthNames = [
  'January','February','March','April','May','June','July',
  'August','September','October','November','December'
]

export const DateFormat = ( props ) => {
  const formatDate = (tstamp) => {
    let dateObj = new Date(parseInt(tstamp))
    // get the number of the day
    const day = dayNames[ dateObj.getDay() ]
    // get the date number
    const date = dateObj.getDate()
    // get the month number
    const month = monthNames[ dateObj.getMonth() ]
    // get the year number
    const year = dateObj.getFullYear()
    // get the minute
    const minute = dateObj.getMinutes()
    // get the hour
    const hour = dateObj.getHours()
    // return the date string
    let str = `${day} ${date} ${month} ${year} ${hour}:${minute}`
    
    return str
  }

  return (
    <Text style={{fontSize: props.size, color: props.color }}>
      {formatDate(props.date)}
    </Text>
  )
}