import React, {Component} from 'react';
import {
  Text,
  View,
  Image,
  StyleSheet,
  TouchableOpacity 
} from 'react-native';
import { vw } from 'react-native-expo-viewport-units';




export default class Header extends Component {
  render() {
    return (
      <View style={styles.header}>
        <Text style={styles.text}>seed</Text>
        <TouchableOpacity>
        <Image
          style = {styles.add_b}
          source = {require('../../assets/images/add_button.png')}
        />
        </TouchableOpacity>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  header: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: vw(100),
    height: 70,
    marginTop: 50,
    backgroundColor: '#2f225b',
  },

  text: {
    color: '#ffffff',
    fontFamily: 'Futura',
    fontSize: 30,
  },

  add_b: {
    width: 30,
    height: 30,
    marginLeft : 345,
    marginRight: 5,
    marginTop: -34,
    resizeMode: 'contain',
  },
})