import React, {Component} from 'react';
import {
  Text,
  View,
  StyleSheet,
  Image,
  TextInput,
} from 'react-native';
import Button from '@material-ui/core/Button';

import { vw } from 'react-native-expo-viewport-units';

export default class SetSavingScreen extends Component {

  constructor(props) {
    super(props);
    this.state = {sa: '', sp: ''};
  }

  // Move to HOME Screen
  moveToHome() {
    this.props.navigation.push('Home')
  }

  // TODO: Add contents on the REGISTER Screen.
  render() {
    return (
      <View style={styles.container}>
        <Image
          style = {styles.i}
          source = {require('../assets/images/logo.png')}
         />
        <View style={styles.register_message}>
        <Text style={styles.register_header}>Let's begin your journey</Text>
          <Text style={styles.register_header}>To save money</Text>
        </View>
        <View style={styles.saving_form}>
          <Text style={styles.create_header}>Set your saving goal</Text>
          <TextInput
            style={styles.register_input}
            placeholder="Saving Amount:"
            onChangeText={(sa) => this.setState({sa})}
            value={this.state.sa}
          />
          <View style = {styles.blackLine} />
          <TextInput
            style={styles.register_input}
            placeholder="Saving Period:"
            onChangeText={(sp) => this.setState({sp})}
            value={this.state.sp}
          />
          <View style = {styles.grayLine} />
        </View>
        <View style={styles.submit_area}>
          <Text style={styles.saving_message}>Savings required in one month:</Text>
          <Text style={styles.saving_message}>$</Text>
          <Button
          style={styles.signup_button}
          onPress={() => this.moveToHome()}
          title='Sign up'
          /> 
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

  saving_form : {
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
    marginBottom: 5,
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