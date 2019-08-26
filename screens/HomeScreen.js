import React, {Component} from 'react';
import {
  Text,
  View,
  StyleSheet
} from 'react-native';

import Header from '../components/Dashboard/Header'

export default class HomeScreen extends Component {

  // To hide the NavigationBar from Home Screen
  static navigationOptions = {
    header: null
  };

  // TODO: Add contents on the HOME Screen.
  render() {
    return (
      <View style={styles.container}>
        <Header />
        <Text>Home Screen</Text>
      </View>
    )
  }
}


// TODO: Add styles on the HOME Screen
const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
})