import React, {Component} from 'react';
import {
  Text,
  View,
  StyleSheet,
  Image,
  TextInput,
} from 'react-native';

import { vw } from 'react-native-expo-viewport-units';

import { Button } from 'react-native-material-ui'

export default class RegisterScreen extends Component {

  constructor(props) {
    super(props);
    this.state = {email: '', pass: ''};
  }

  // Move to HOME Screen
  moveToSetSaving() {
    this.props.navigation.push('SetSaving')
  }

  // TODO: Add contents on the REGISTER Screen.
  render() {
    return (
      <View style={styles.container}>
        <Image
          style = {styles.i}
          source = {require('../assets/images/logo.png')}
         />
        {/* Message area */}
        <View style={styles.register_message}>
          <Text style={styles.register_header}>Let's begin your journey</Text>
          <Text style={styles.register_header}>To save money</Text>
        </View>
        {/* Register Form area */}
        <View style={styles.register_form}>
          <Text style={styles.create_header}>Create Your Account</Text>
          <TextInput
            style={styles.register_input}
            placeholder="Email address: "
            onChangeText={(email) => this.setState({email})}
            value={this.state.email}
          />
          <View style = {styles.blackLine} />
          <TextInput
            style={styles.register_input}
            secureTextEntry={true}
            placeholder="Password: "
            onChangeText={(pass) => this.setState({pass})}
            value={this.state.pass}
          />
          <View style = {styles.grayLine} />
        </View>
        <View style={styles.submit_area}>
          <Text style={styles.privacy_message}>By signing up</Text>
          <Text style={styles.privacy_message}>Check our &nbsp;
          <Text style={styles.privacy_link}>Terms of Service</Text>
          &nbsp; and &nbsp;
          <Text style={styles.privacy_link}>Privacy Policy</Text>
          .</Text>
          <Button primary raised={true} upperCase={false} text="Next"
          style={styles.nextButton}
          onPress={() => this.moveToSetSaving()}/> 
        </View>
      </View>   
      );
  }
}

// TODO: Add styles on the REGISTER Screen
const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'flex-start',
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
    flex: 2,
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    backgroundColor: '#fff',
  },

  create_header : {
    color: '#000',
    fontSize: 24,
    fontWeight: 'bold',
    marginRight: vw(30),
    marginBottom: 10,
  },

  register_input : {
    height: 40,
    width: vw(100)-30,
  },

  submit_area : {
    flex: 3,
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: '#fff',
  },

  privacy_message : {
    marginBottom: 10,
  },

  privacy_link: {
    color: "#00a3cc",
    textDecorationLine: "underline",
    marginBottom: 10,
  },

  nextButton: {
    marginTop: 10,
  },

  blackLine:{
    backgroundColor: '#000',
    height: 2,
    width: vw(100)- 50,
    margin: 2,
  },

  grayLine:{
    backgroundColor: '#e0e0eb',
    height: 2,
    width: vw(100)- 50,
    margin: 2,
  }
  
})