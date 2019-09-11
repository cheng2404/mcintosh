import React, {Component} from 'react';
import {
  Text,
  View,
  StyleSheet,
} from 'react-native';

import Header from '../components/Dashboard/Header'
import LineChart from '../components/Common/LineChart'
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

        {/* Heaer Component */}
        <Header/>

        {/* Goal */}
        <View style={styles.goal_container}>

          {/* Goal Container Header */}
          <Text style={styles.goal_container_header_sub}>You've already saved: </Text>
          <View style={styles.goal_container_header}>
            <Text style={styles.goal_container_header_doller}>$</Text>
            <Text style={styles.goal_container_header_main}>10,060</Text>
          </View>

          {/* Goal Container Main */}
          <View style={styles.goal_container_main}>

            {/* Progress Bar */}
            <View style={styles.progressbar_view}>
              <Text style={styles.progressbar_text}></Text>
            </View>

            {/* Current State */}
            <View style={styles.current_state_view}>
              <Text style={styles.current_state_text}>$ 10,060</Text>
              <Text style={styles.current_state_text}>$ 300,000</Text>
            </View>
          </View>
        </View>

        {/* Saving History */}
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

  // Goal Container
  goal_container: {
    // flex: 1,
    flexDirection: 'column',
    width: vw(100)- 32,
    height: 180,
    marginLeft: 16,
    marginRight: 16,
    marginTop: 20,
    borderRadius: 20,
    padding: 10,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
    backgroundColor: '#ffffff'
  },

  // Goal Container Header
  goal_container_header_sub: {
    color: '#9c9c9c',
    fontSize: 16
  },

  goal_container_header: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'flex-end',
    height: 80,
  },

  goal_container_header_doller: {
    fontSize: 30,
    fontWeight: 'bold',
    color: '#2f225b',
    marginBottom: 10
  },

  goal_container_header_main: {
    fontSize: 60,
    fontFamily: 'Futura',
  },

  // Goal Container Main
  goal_container_main: {
    flex: 1,
    width: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 20
  },

  // Progress Bar
  progressbar_view: {
    width: '100%',
    height: 20,
    backgroundColor: '#e9e9e9',
    borderRadius: 20,
    overflow: 'hidden'
  },

  progressbar_text: {
    width: '30%',
    height: 20,
    backgroundColor: '#43964e'
  },

  // Current State
  current_state_view: {
    width: '100%',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 5
  },

  current_state_text: {
    fontSize: 16
  },

  // History Container
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
    color: "#43964e",
    fontSize: 18,
    fontWeight: "bold",
  },

  plusText: {
    color: "#43964e",
    fontSize: 18,
    fontWeight: "bold",
    marginLeft: vw(100)- 250,
  },

  minusNum: {
    color: "#b54044",
    fontSize: 18,
    fontWeight: "bold",
  },

  minusText: {
    color: "#b54044",
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