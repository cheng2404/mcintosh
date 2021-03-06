import React, {Component} from 'react';
import {
  Text,
  View,
  StyleSheet,
  Image,
  TextInput
} from 'react-native';

import { Button } from 'react-native-material-ui';
import { vw, vh } from 'react-native-expo-viewport-units';

export default class LoginScreen extends Component {

  render() {
    return (
      <View style={styles.container}>
        <Image
          style = {styles.i}
          source = {require('../assets/images/logo_large.png')}
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
          <Button primary raised={true} upperCase={false} text="Log in"
            color = 'green'
            onPress ={() => this.props.navigation.push('Home')} 
          />
        </View>

        <View style={styles.create}>
          <Button primary raised={true} upperCase={false} text="Sign up"
            onPress ={() => this.props.navigation.push('Register')} 
          />
        </View>  

        <View style={styles.google}>
        <Image
          style = {styles.photo}
          source = {require('../assets/images/google.jpg')}
        />
        {/* <Text style = {styles.google_text}>Google</Text> */}
        </View>

        <View style={styles.facebook}>
          <Image
            style = {styles.photo}
            source = {require('../assets/images/facebook.png')}
          />
          {/* <Text style = {styles.facebook_text}>Facebook</Text> */}
          <Text style = {styles.q_text}>Doesn't have an account?</Text>          
          {/*<Text style = {styles.c_text}>Create now!</Text> */}
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
 
  container: {
    flex: 1,
    flexDirection: 'column',
    // justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#fff',
  },

  i: {
    width: 240,
    height: 150,
    marginTop: 100,
    marginBottom: 30, 
  },

  loginContainer: {

    flexDirection: 'column',
    width: 310,
    height: 50,
    borderWidth: 0.5,
    borderColor: 'grey',
    borderRadius: 10,
    marginTop: vh(2),
  },

  pass: {
    flexDirection: 'column',
    width: 310,
    height: 50,
    marginLeft: 0,
    marginTop: 30,
    borderWidth: 0.5,
    borderColor: 'grey',
    borderRadius: 10,
  },

  forgot: {
    marginTop: vh(1),
    fontSize: 16,
    marginLeft: vw(46),
    color:  "#00a3cc",
  },

  text: {
    fontSize: 12,
    marginLeft: 70,
    marginTop:10,
  },

  login: {
    flexDirection: 'column',
    width: 200,
    height: 50,
    borderWidth: 0,
    borderColor: 'white',
    borderRadius: 10,
    marginTop: vh(6),
    marginBottom: -25,
  },

  create:{
    // flexDirection: 'column',
    width: 200,
    height: 50,
    borderWidth: 0,
    borderColor: 'white',
    borderRadius: 10,
    marginTop: vh(4),
    marginLeft: vw(-0.5),
  },

  google: {
    flexDirection: 'column',
    width: 50,
    height: 50,
    // borderWidth: 0.5,
    // borderColor: 'grey',
    // borderRadius: 100,
    marginLeft: vh(-12),
    marginTop: vh(1),
  },

  google_text: {
    fontSize: 12,
    marginLeft: vw(40),
    marginTop: -17,
  },

  facebook: {
    flexDirection: 'column',
    width: 50,
    height: 50,
    // borderWidth: 0.5,
    // borderColor: 'grey',
    // borderRadius: 100,
    // marginBottom: 150,
    marginTop: vh(-6.2),
    marginLeft: vw(20),
  },

  facebook_text: {
    fontSize: 12,
    marginLeft: vw(43),
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
    width: 30,
    height: 30,
    marginLeft: vw(4),
    marginTop: vh(2),
  },
  register_input : {
    height: 40,
    // width: vw(10),
    marginTop:6,
    marginLeft: vw(3),
  },
  // Button:{
  //   height: 56,
  //   width:310,
  // }
})
