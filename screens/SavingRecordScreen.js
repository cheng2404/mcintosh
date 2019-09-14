import React, {Component} from 'react';
import {
  Text,
  View,
  StyleSheet,
  Image,
  TextInput,
} from 'react-native';

import Header from '../components/Dashboard/Header'
import { vw, vmax } from 'react-native-expo-viewport-units';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { vh } from 'react-native-expo-viewport-units';
import { Button } from 'react-native-material-ui';
export default class SavingRecordScreen extends Component {

    constructor(props) {
        super(props);
        this.state = {sa: '', de: ''};
      }


  // To hide the NavigationBar from Home Screen
  static navigationOptions = {
    header: null
  };

  // TODO: Add contents on the HOME Screen.
  render() {
    return (
      <View style={styles.container}>

            {/* Heaer Component */}

            <TouchableOpacity onPress={() => this.props.navigation.push('Home')} style = {styles.Boxclose} >
            <Image
              style = {styles.Imageback}
              source = {require('../assets/images/back.png')}
            />
          
          </TouchableOpacity>

          <View style={styles.saving_form}>
          <Text style={styles.create_header}>SAVING</Text>
          <TextInput
            style={styles.saving_input}
            placeholder="Saving Amount:"
            keyboardType = "numeric"
            onChangeText={(sa) => this.setState({sa})}
            value={this.state.sa}
          />
          <View style = {styles.blackLine} />
          <TextInput
            style={styles.saving_input}
            placeholder="Description:"
            onChangeText={(de) => this.setState({de})}
            value={this.state.de}
          />
          <View style = {styles.grayLine} />

          <View style = {styles.SubB}>
						<Button color="red"
            			primary raised upperCase={false} text="Submit"
            			onPress ={() => this.props.navigation.push('AddRecord')} 
        				/>
        	</View>


        </View>
          
       
  
       
      </View>
    )
  }
}


// TODO: Add styles on the HOME Screen
const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#fff',
  },

  Imageback:{
      width:vw(4),
      resizeMode: 'contain',
      marginRight: vw(91),
      marginLeft: vw(5),
      height: 70,
      marginTop: 5,
  },

  //lll
  saving_form : {
    flex: 2,
    marginTop: 30,
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    backgroundColor: '#fff',
  },


  create_header : {
    color: '#000',
    fontSize: 35,
    fontWeight: 'bold',
    marginRight: vw(30),
  },

  saving_input : {
    height: 40,
    width: vw(100)-30,
    marginTop: 20,
    
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


  SubB: {
    flexDirection: 'column',
    width: 300,
    height: 30,
    borderWidth: 0,
    borderColor: 'white',
    marginTop: vh(10),
    marginLeft: 28,
},
  
})