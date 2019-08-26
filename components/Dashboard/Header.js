import React, {Component} from 'react';
import {
  Text,
  View,
  StyleSheet
} from 'react-native';
import { vw } from 'react-native-expo-viewport-units';


export default class Header extends Component {
  render() {
    return (
      <View style={styles.header}>
        <Text style={styles.text}>Header</Text>
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
    color: '#ffffff'
  }
})