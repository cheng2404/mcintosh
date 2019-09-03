import React, {Component} from 'react';
import {
  Text,
  View,
  StyleSheet,
  Button,
  Image,
  TextInput,
} from 'react-native';

import { vw } from 'react-native-expo-viewport-units';

export default class RegisterScreen extends Component {

  // Move to HOME Screen
  moveToHome() {
    this.props.navigation.push('Home')
  }

  // TODO: Add contents on the REGISTER Screen.
  render() {
    return (
      <View style={styles.container}>
        {/*<View style={styles.container}>
          <Text>Register Screen</Text>
          <Button
          onPress={() => this.moveToHome()}
          title='Move to Home Screen'
          />
        </View>*/}
        <Image
          style = {styles.i}
          source = {require('../assets/images/logo.png')}
         />
        <View style={styles.register_message}>
          <Text style={styles.register_header}>Let's begin your journey</Text>
          <Text style={styles.register_header}>To save money</Text>
        </View>
        <View style={styles.register_form}>
          <Text style={styles.create_header}>Create Your Account</Text>

          <View style = {styles.lineStyle} />
        </View>
      </View>   
      )
  }
}

// TODO: Add styles on the REGISTER Screen
const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#fff',
  },

  i: {
    width: 200,
    height: 150,
    marginTop: 100,
  },

  register_message : {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: '#fff',
    marginTop: 20,
  },

  register_header : {
    color: '#43964e',
    fontStyle: 'italic',
    fontSize: 20,
    fontWeight: 'bold',
  },

  register_header : {
    color: '#43964e',
    fontStyle: 'italic',
    fontSize: 20,
    fontWeight: 'bold',
  },

  register_form : {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: '#fff',
  },

  create_header : {
    color: '#000',
    fontSize: 24,
    fontWeight: 'bold',
    marginRight: vw(30),
  },

  lineStyle:{
    backgroundColor: '#000',
    height: 2,
    width: vw(100)- 50,
    margin: 2,
  }
  
})