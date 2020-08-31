import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

// firebase
import {FirebaseConfig} from './components/FirebaseConfig'
import * as firebase from 'firebase'
// // initialise firebase app
if ( !firebase.app.length ) {
  firebase.initializeApp( FirebaseConfig )
}



// import pages
import {HomePage} from './components/HomePage';
import {DetailPage} from './components/DetailPage';
import {AuthPage} from './components/AuthPage';


const Data = [
{
  "amount": 50,
  "category": "food",
  "id": "1598758753927",
  "note": "buying lunch"
},
{
  "amount": 20,
  "category": "transport",
  "id": "1598758862582",
  "note": "catching train"
},
{
  "amount": 80,
  "category": "groceries",
  "id": "1598758875868",
  "note": "shopping at Coles"
},
{
  "amount": 13,
  "category": "food",
  "id": "1598758889716",
  "note": "snack time"
},
{
  "amount": 35,
  "category": "entertainment",
  "id": "1598758916402",
  "note": "buying Untitled Goose"
},
{
  "amount": 350,
  "category": "rent",
  "id": "1598758904296",
  "note": "weeks rent"
},
{
  "amount": 60,
  "category": "transport",
  "id": "1598758927786",
  "note": "topping up Opal card"
},
{
  "amount": 30,
  "category": "food",
  "id": "1598758937157",
  "note": "buying dinner"
}
]


const Stack = createStackNavigator();

export default function App() {
  const [authState,setAuthState] = useState(false) 
  let listData = Data

  const registerHandler = (user) => {
    firebase.auth().createUserWithEmailAndPassword(user.email,user.password)
    .catch( (error) => {
      console.log(error)
    })
  }

  firebase.auth().onAuthStateChanged((user)=> {
    if(user) {
      console.log('logged in')
    }
    else {
      console.log('not logged in')
    }
  })

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Register">
          { (props) => <AuthPage {...props} register={registerHandler} /> }
        </Stack.Screen>
        <Stack.Screen name="Home" >
          {(props) => <HomePage {...props} text="hello home" data={listData} /> }
        </Stack.Screen>
        <Stack.Screen 
        name="Detail" 
        component={DetailPage} 
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
