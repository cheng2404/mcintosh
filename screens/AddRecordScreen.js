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


       
        


        <Text style={styles.TitleWords}>Record of your Saving or Spending </Text>

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
              source = {require('../assets/images/spending.png')}
            />

          </TouchableOpacity>

          <TouchableOpacity onPress={() => this.props.navigation.push('Home')} style = {styles.Boxclose} >
            <Image
              style = {styles.Iamgeclose}
              source = {require('../assets/images/closing.png')}
            />
          
          </TouchableOpacity>


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

  TitleWords: {
    fontSize: 35,
    fontWeight: 'bold',
    fontFamily: 'Futura',
    textAlign: 'left',
    marginTop: 40,
  },
  
  Box: {
    height: vw(100),
    width: vw(90),
    marginTop: 170,
    position: 'absolute',
  },

  SSTitle:{
    fontFamily: 'Futura',
    fontSize: 25,
    textAlign: 'center',
    marginTop: 20,
    fontWeight: 'bold',
    color: 'white'
  },

  SavingB: {
    backgroundColor: '#2ECC71',
    width: vw(90),
    height :190,
    borderRadius: 10,
  },

 
  ImageSaving: {
    width: vw(26),
    resizeMode: 'contain',
    alignItems: 'center',
    marginLeft: vw(30),
    marginRight: vw(44),
    marginTop: -320,
  },

  SpendingB: {
    backgroundColor: '#D35400',
    width: vw(90),
    height :190,
    borderRadius: 10,
    marginTop: 20,
  },

  ImageSpending: {
    width: vw(30),
    resizeMode: 'contain',
    alignItems: 'center',
    marginLeft: vw(28),
    marginRight: vw(42),
    marginTop: -165,
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