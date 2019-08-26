import React, {Component} from 'react';
import {
  Text,
  View,
  StyleSheet,
  Hr,
} from 'react-native';

import Header from '../components/Dashboard/Header'
import { vw } from 'react-native-expo-viewport-units';
import { BorderlessButton } from 'react-native-gesture-handler';

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
          <View style={styles.history_header}>
              <Text style={styles.headerText}>Saving History</Text>
              <Text style={styles.tempLink}>View more</Text>
          </View>
          <View style = {styles.lineStyle} />
          <View style={styles.history_area}>
            <View style={styles.history_section}> 
              <Text style={styles.plusNum}>+$5000</Text>
              <Text style={styles.plusText}>Salary</Text>
            </View>
            <View style={styles.history_section}>
              <Text style={styles.minusNum}>-$2000</Text>
              <Text style={styles.minusText}>Shopping</Text>
            </View>
            <View style={styles.history_section}>
              <Text style={styles.plusNum}>+$60</Text>
              <Text style={styles.plusText}>Sell</Text>
            </View>
            <View style={styles.history_section}>
              <Text style={styles.plusNum}>+$5000</Text>
              <Text style={styles.plusText}>Salary</Text>
            </View>
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
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#2f225b',
    margin: 16,
    width: vw(100) - 32,
    borderRadius: 20,
  },

  history_header: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    marginLeft: 16,
    marginRight: 16,
    marginTop: 10,
    width: vw(100) - 50,
  },

  history_area: {
    flex: 6,
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'center',
    width: vw(100)- 40,
    marginTop: 5,
  },

  history_section: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: vw(100)- 50,
    paddingLeft: 20,
    paddingRight: 20,
    borderWidth: 2,
    borderColor: '#2f225b',
    borderRadius: 20,
    backgroundColor: '#fff',
    marginBottom: 2,
  },

  headerText: {
    fontSize: 22,
    fontWeight: "bold",
    color: "#fff",
  },

  tempLink: {
    fontSize: 12,
    textDecorationLine: "underline",
    marginLeft: 100,
    lineHeight: 35,
    color: "#fff",
  },

  plusNum: {
    color: "#00f",
    fontSize: 18,
    fontWeight: "bold",
  },

  plusText: {
    color: "#00f",
    fontSize: 18,
    fontWeight: "bold",
    marginLeft: vw(100)- 250,
  },

  minusNum: {
    color: "#f00",
    fontSize: 18,
    fontWeight: "bold",
  },

  minusText: {
    color: "#f00",
    fontSize: 18,
    fontWeight: "bold",
    marginLeft: vw(100)- 250,
  },

  lineStyle:{
    backgroundColor: '#fff',
    height: 8,
    width: vw(100)- 50,
    margin: 2,
  }
})