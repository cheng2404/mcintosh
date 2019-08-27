import React, {Component} from 'react';
import {
  Text,
  View,
  StyleSheet,
  Button,
  Image
} from 'react-native';

export default class LoginScreen extends Component {


  // Move to LOGIN Screen
  moveToRegister() {
    this.props.navigation.push('Register')
  }

  

  // TODO: Add contents on the LOGIN Screen.
  render() {
    return (
      <View>
          <Image
          style = {styles.i}
          source = {require('/Users/apple/Desktop/deco3801-mcintosh/assets/images/logo.png')}
          />
          <View style={styles.container}>
            <Text style = {styles.text}>Username</Text>
            <View style={styles.pass}>
              <Text style = {styles.text}>***********</Text>
              <Text style = {styles.forgot}>Forgot Password?</Text>
            </View>
          </View>

        <View style={styles.login}>
          <Button
            color = 'green'
            onPress ={() => this.props.navigation.push('Home')} 
            title = 'Login'

        />
        </View>
        
        <View style={styles.google}>
          <Image
          style = {styles.photo}
          source = {require('/Users/apple/Desktop/deco3801-mcintosh/assets/images/google.png')}
          />
          <Text style = {styles.google_text}>Google</Text>
        </View>

        <View style={styles.facebook}>
          <Image
          style = {styles.photo}
          source = {require('/Users/apple/Desktop/deco3801-mcintosh/assets/images/facebook.png')}
          />
          <Text style = {styles.facebook_text}>Facebook</Text>
          <Text style = {styles.q_text}>Doesn't have an account?</Text>          
          <Text style = {styles.c_text}>Creat now!</Text>
          </View>
        </View>



      

    )
  }
}

// TODO: Add styles on the LOGIN Screen
const styles = StyleSheet.create({
 

  i: {
    width: 150,
    height: 150,
    marginLeft: 100,
    marginTop: 20,
  },

  container: {

    flexDirection: 'column',
    width: 200,
    height: 40,
    marginLeft: 80,
    marginTop: 30,
    borderWidth: 0.5,
    borderColor: 'grey',
    borderRadius: 5,
    
  },

  pass: {
    flexDirection: 'column',
    width: 200,
    height: 40,
    marginLeft: 0,
    marginTop: 30,
    borderWidth: 0.5,
    borderColor: 'grey',
    borderRadius: 5,
  },
  forgot: {
    marginTop: 15,
    fontSize: 12,
    marginLeft: 100,
    color: 'lightblue',
  },

  text: {
    fontSize: 12,
    marginLeft: 70,
    marginTop:10,
  },

  login: {
    flexDirection: 'column',
    width: 200,
    height: 40,
    marginLeft: 80,
    marginTop: 100,
    borderWidth: 0,
    borderColor: 'white',
    borderRadius: 5,
    
  },

  google: {
    flexDirection: 'column',
    width: 200,
    height: 40,
    marginLeft: 80,
    marginTop: 10,
    borderWidth: 0.5,
    borderColor: 'grey',
    borderRadius: 5,
  },

  google_text: {
    fontSize: 12,
    marginLeft: 80,
    marginTop:-18,
  },

  facebook: {
    flexDirection: 'column',
    width: 200,
    height: 40,
    marginLeft: 80,
    marginTop: 10,
    borderWidth: 0.5,
    borderColor: 'grey',
    borderRadius: 5,
  },

  facebook_text: {
    fontSize: 12,
    marginLeft: 80,
    marginTop:-18,
  },

  q_text: {
    fontSize: 12,
    marginLeft: 36,
    marginTop:20,
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
    marginLeft: 40,
    marginTop:10,
  },
})