import React, {Component} from 'react';
import {
  Text,
  View,
  StyleSheet
} from 'react-native';

import Header from '../components/Dashboard/Header'
import { vw } from 'react-native-expo-viewport-units';

export default class HomeScreen extends Component {

  // To hide the NavigationBar from Home Screen
  static navigationOptions = {
    header: null
  };

  // TODO: Add contents on the HOME Screen.
  render() {
    return (
      <View style={styles.container}>
        <Header/>
        <View style={styles.goal_container}>
          <Text>Component 1</Text>
        </View>
        <View style={styles.history_container}>
          <Text>Component 2</Text>
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

  goal_container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    width: vw(100)- 32,
    marginLeft: 16,
    marginRight: 16,
    marginTop: 20,
    borderWidth: 5,
    borderColor: '#2f225b',
    borderRadius: 20
  },

  history_container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#2f225b',
    margin: 16,
    width: vw(100) - 32,
    borderRadius: 20
  }
})