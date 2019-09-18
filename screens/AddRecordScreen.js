import React, {Component} from 'react';
import {
  Text,
  View,
  StyleSheet,
  Image,
} from 'react-native';

import Header from '../components/Dashboard/Header'
import { vw, vmax } from 'react-native-expo-viewport-units';
import { TouchableOpacity } from 'react-native-gesture-handler';

export default class AddRecordScreen extends Component {

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


       
        


        <Text style={styles.TitleWords}>Add Your Record </Text>

        <View style={styles.Box}>
          <TouchableOpacity style = {styles.SavingB} onPress={() => this.props.navigation.push('SavingRecord')}>
            <Text style={styles. SSTitle}>Saving</Text>
            <Image
              style = {styles.ImageSaving}
              source = {require('../assets/images/saving.png')}
            />
          
          </TouchableOpacity>

          <TouchableOpacity style = {styles.SpendingB} onPress={() => this.props.navigation.push('SpendingRecord')}>
            <Text style={styles. SSTitle}>Spending</Text>
            <Image
              style = {styles.ImageSpending}
              source = {require('../assets/images/spending1.png')}
            />

          </TouchableOpacity>


{/*
          <TouchableOpacity onPress={() => this.props.navigation.push('Home')} style = {styles.Boxclose} >
            <Image
              style = {styles.Iamgeclose}
              source = {require('../assets/images/closing.png')}
            />
          
          </TouchableOpacity>
*/}

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
    marginTop: -50,
},


  TitleWords: {
    fontSize: 35,
   // fontWeight: 'bold',
   // fontFamily: 'Futura',
    textAlign: 'center',
    marginBottom: 650,
  },
  
  Box: {
    height: vw(100),
    width: vw(90),
    marginTop: 290,
    position: 'absolute',
  },

  SSTitle:{
   // fontFamily: 'Futura',
    fontSize: 25,
    textAlign: 'center',
    marginTop: 20,
  //  fontWeight: 'bold',
    color: 'white'
  },

  SavingB: {
    backgroundColor: '#43964e',
    height :150,
    width: vw(90)- 32,
    borderRadius: 20,
    borderColor: 'white',
    borderWidth: 1,
    shadowColor: "#000",
    marginLeft: 16,
    marginBottom: 10,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.15,
    shadowRadius: 3.84,

    elevation: 5,

  },

 
  ImageSaving: {
    width: vw(18),
    resizeMode: 'contain',
    alignItems: 'center',
    marginLeft: vw(30),
    marginRight: vw(44),
    marginTop: -340,
  },

  SpendingB: {
    backgroundColor: '#808080',
    width: vw(90)- 32,
    height :150,
    borderRadius: 20,
    borderColor: 'white',
    borderWidth: 1,
    marginTop: 20,
    marginLeft: 16,
    marginBottom: 10,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.15,
    shadowRadius: 3.84,

    elevation: 5,
  },

  ImageSpending: {
    width: vw(21),
    resizeMode: 'contain',
    alignItems: 'center',
    marginLeft: vw(28),
    marginRight: vw(42),
    marginTop: -185,
  },

  Boxclose: {
    marginTop: vw(20),
    alignItems: 'center',
    
  },

  Iamgeclose: {
    width:50,
    resizeMode: 'contain',
    height :50,
  },


  
})