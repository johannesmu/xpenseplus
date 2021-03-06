import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, TextInput, Button } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import * as firebase from 'firebase'


export const AuthPage = (props) => {
  const [login,setLogin] = useState(false)
  const [validEmail,setValidEmail] = useState(false)
  const [validPassword,setValidPassword] = useState(false)

  const [email,setEmail] = useState(null)
  const [password,setPassword] = useState(null)

  const navigation = useNavigation()

  firebase.auth().onAuthStateChanged((user) => {
    if(user) {
      navigation.reset({index:0,routes: [ {name: "Home"} ]})
    }
    else {
      console.log('not logged in')
    }
  })

  const validateEmail = (email) => {
    if( email.indexOf('@') > 0 && email.indexOf('.') > 0 ) {
      setValidEmail(true)
      setEmail(email)
    }
    else {
      setValidEmail(false)
    }
  }

  const validatePassword = (password) => {
    if( password.length >= 8 ) {
      setValidPassword(true) 
      setPassword(password)
    }
    else {
      setValidPassword(false)
    }
  }


  if(login == false ) {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>Register</Text>
        <TextInput 
          style={styles.input} 
          placeholder="you@email.com" 
          onChangeText={ (email)=>{
            validateEmail(email)
          }}
        />
        <TextInput 
          style={styles.input} 
          placeholder="minimum 8 characters" 
          secureTextEntry={true} 
          onChangeText={ (password) => {
            validatePassword(password)
          }}
        />
        <TouchableOpacity 
          style={ !validPassword || !validEmail ? styles.buttonDisabled : styles.button }
          disabled={ !validEmail || !validPassword ? true : false }
          onPress={ () => { props.register("register", {email: email, password: password }) }}
        >
          <Text style={styles.buttonText}>Register</Text>
        </TouchableOpacity>
        <Text style={styles.alternateText}>Already have an account?</Text>
        <TouchableOpacity 
          onPress={ () =>  {
            setLogin(true) 
            navigation.setOptions({title: 'Login'})
          }}
        >
          <Text style={styles.alternateLink}>Login</Text>
        </TouchableOpacity>
      </View>
    )
  }
  else {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>Login</Text>
        <TextInput 
          style={styles.input} 
          placeholder="you@email.com"
          onChangeText={ (email) => { setEmail(email)}}
        />
        <TextInput 
          style={styles.input} 
          placeholder="your password" 
          secureTextEntry={true} 
          onChangeText={ (password) => { setPassword(password) } }
        />
        <TouchableOpacity 
        style={styles.button}
        onPress={ () => { props.register("login", {email: email, password: password }) }}
        >
          <Text style={styles.buttonText}>Login</Text>
        </TouchableOpacity>
        <Text style={styles.alternateText}>Don't have an account?</Text>
        <TouchableOpacity 
          onPress={ () =>  {
            setLogin(false) 
            navigation.setOptions({title: 'Register'})
          }}
        >
          <Text style={styles.alternateLink}>Register</Text>
        </TouchableOpacity>
      </View>
    )
  }
  
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 15,
  },
  title: {
    marginVertical: 30,
  },
  input: {
    paddingHorizontal: 15,
    paddingVertical: 10,
    marginBottom: 15,
    borderColor: '#666666',
    borderWidth: 1,
  },
  button: {
    backgroundColor: '#333333',
    padding: 10,
  },
  buttonText: {
    color: '#eeeeee',
    textAlign: 'center',
  },
  buttonDisabled: {
    opacity: 0.5,
    backgroundColor: '#888888',
    padding: 10,
  },
  alternateText: {
    marginTop: 20,
    textAlign:'center',
  },
  alternateLink: {
    marginTop: 10,
    textAlign:'center',
    padding: 5,
    color: 'darkblue',
  },
})