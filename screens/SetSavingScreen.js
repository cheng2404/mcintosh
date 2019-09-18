import React, {Component} from 'react';
import {
  Text,
  View,
  StyleSheet,
  Image,
  TextInput,
  Modal,
  TouchableHighlight,
  Picker,
  TouchableOpacity,
} from 'react-native';

import { vw,vh } from 'react-native-expo-viewport-units';

import ReactNativePickerModule from 'react-native-picker-module';

import { Button } from 'react-native-material-ui';



export default class SetSavingScreen extends Component {

  constructor(props) {
    super(props);
    this.state = {sa: '',
                  sp: '', 
                  re: 0,
                  month: '',
                  selectedValue: null,
                  data: [
                    "3 Months",
                    "6 Months",
                    "12 Months",
                    "18 Months",
                    "24 Months",
                    "30 Months",
                    "36 Months"
                  ],
                  word: 'Select Saving Period',
                  mon: [3,6,12,18,24,30,36],
    };
  }

  

  calculateSave = () => {
    const { sa, sp,re} = this.state;

    switch(this.state.word){
      case "3 Months":
        this.setState({
          re: Number(sa) / Number(this.state.mon[0])
        });
      break;
      case "6 Months":
        this.setState({
          re: Number(sa) / Number(this.state.mon[1])
        });
      break;
      case "12 Months":
        this.setState({
          re: Number(sa) / Number(this.state.mon[2])
        });
      break;
      case "18 Months":
        this.setState({
          re: Number(sa) / Number(this.state.mon[3])
        });
      break;
      case "24 Months":
        this.setState({
          re: Number(sa) / Number(this.state.mon[4])
        });
      break;
      case "30 Months":
        this.setState({
          re: Number(sa) / Number(this.state.mon[5])
        });
      break;
      case "36 Months":
        this.setState({
          re: Number(sa) / Number(this.state.mon[6])
        });
      break;
    }




    
  }

 


  // Move to HOME Screen
  moveToHome() {
    this.props.navigation.push('Home')
  }

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
        {/* Set Form area */}
        <View style={styles.saving_form}>
          <Text style={styles.create_header}>Set your saving goal</Text>
          <TextInput
            style={styles.register_input}
            placeholder="Saving Amount:"
            onChangeText={(sa) => this.setState({sa})}
            value={this.state.sa}
            onEndEditing={() => this.calculateSave()}
          />
          <View style = {styles.blackLine} />
            
            <TouchableOpacity 
            onPress={() => {this.pickerRef.show()}}
            style={styles.register_input}>
              <Text
              style={styles.x}>{this.state.word}</Text>
            </TouchableOpacity>

            <ReactNativePickerModule
              pickerRef={e => this.pickerRef = e}
              value={this.state.selectedValue}
              title={"Select a saving period"}
              items={this.state.data}
              onValueChange={(index) => {this.setState({word: index})}}
            />
          <View style = {styles.grayLine} />
        </View>
        <View style={styles.submit_area}>
          <Text style={styles.saving_message}
            onPress={() => this.calculateSave()}>Savings required in one month:</Text>
          <Text>${`${this.state.re}`}</Text>
          {/*<Button
          style={styles.signup_button}
          onPress={() => this.moveToHome()}
          title='Sign up'
          /> */}
          {/* Material UI Test */}
          <Button primary raised upperCase={false} text="Sign up"
          
          onPress={() => this.moveToHome()}
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
    
  },

  x: {
    marginTop: vh(1)
  }

  
})