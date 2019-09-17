import React, {Component} from 'react';
import {
  Text,
  View,
  StyleSheet,
  Image,
  TextInput
} from 'react-native';
// import { vw } from 'react-native-expo-viewport-units';

import { Button } from 'react-native-material-ui';
import { vw, vh } from 'react-native-expo-viewport-units';

export default class LoginScreen extends Component {


  // Move to LOGIN Screen
  moveToRegister() {
    this.props.navigation.push('Register')
  }

  

  // TODO: Add contents on the LOGIN Screen.
  render() {
    return (
      <View style={styles.container}>
          <Image
          style = {styles.i}
          source = {require('../assets/images/logo.png')}
          />
          <View style={styles.loginContainer}>
            <TextInput
            style={styles.register_input}
            placeholder="UserName: "
            />

          </View>
          <View style={styles.loginContainer}>
            <TextInput
            style={styles.register_input}
            placeholder="Password: "
            />
            <Text style = {styles.forgot}>Forgot Password?</Text>
          </View>
          

        <View style={styles.login}>
          <Button primary raised upperCase={false} text="Log in"
            color = 'green'
            onPress ={() => this.props.navigation.push('Home')} 
        />
        </View>
        
        <View style={styles.google}>
          <Image
          style = {styles.photo}
          source = {require('../assets/images/google.png')}
          />
          <Text style = {styles.google_text}>Google</Text>
        </View>

        <View style={styles.facebook}>
          <Image
          style = {styles.photo}
          source = {require('../assets/images/facebook.png')}
          />
          <Text style = {styles.facebook_text}>Facebook</Text>
          <Text style = {styles.q_text}>Doesn't have an account?</Text>          
          {/*<Text style = {styles.c_text}>Create now!</Text> */}
          <Button
            primary raised upperCase={false} text="Create now"
            onPress ={() => this.props.navigation.push('Register')} 
          />
          </View>
        </View>



      

    )
  }
}

// TODO: Add styles on the LOGIN Screen
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
    marginBottom: 10, 
  },

  loginContainer: {

    flexDirection: 'column',
    width: 310,
    height: 56,
    borderWidth: 0.5,
    borderColor: 'grey',
    borderRadius: 10,
    marginTop: vh(-2),
  },

  pass: {
    flexDirection: 'column',
    width: 310,
    height: 56,
    marginLeft: 0,
    marginTop: 30,
    borderWidth: 0.5,
    borderColor: 'grey',
    borderRadius: 10,
  },

  forgot: {
    marginTop: vh(2),
    fontSize: 16,
    marginLeft: vw(46),
    color: 'lightblue',
  },

  text: {
    fontSize: 12,
    marginLeft: 70,
    marginTop:10,
  },

  login: {
    flexDirection: 'column',
    width: 310,
    height: 56,
    borderWidth: 0,
    borderColor: 'white',
    borderRadius: 10,
    marginTop: 10,
    marginBottom: -25
  },

  google: {
    flexDirection: 'column',
    width: 310,
    height: 56,
    borderWidth: 0.5,
    borderColor: 'grey',
    borderRadius: 10,
  },

  google_text: {
    fontSize: 12,
    marginLeft: vw(40),
    marginTop: -17,

  },

  facebook: {
    flexDirection: 'column',
    width: 310,
    height: 56,
    borderWidth: 0.5,
    borderColor: 'grey',
    borderRadius: 10,
    marginBottom: 150,
    marginTop: -17,
  },

  facebook_text: {
    fontSize: 12,
    marginLeft: vw(40),
    marginTop:-17,
  },

  q_text: {
    fontSize: 12,
    marginLeft:vw(24),
    marginTop:30,
    marginBottom:10,
  },

  c_text: {
    marginTop: 10,
    fontSize: 12,
    marginLeft: 80,
    color: 'lightblue',
  },

  photo: {
    width: 20,
    height: 20,
    marginLeft: vw(30),
    marginTop:17,
  },
  register_input : {
    height: 40,
    // width: vw(10),
    marginTop:8,
    marginLeft: vw(32),
  },
  // Button:{
  //   height: 56,
  //   width:310,
  // }
})
