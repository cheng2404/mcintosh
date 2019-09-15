import React, {Component} from 'react';
import {
  Text,
  View,
  StyleSheet,
  Image,
  TouchableOpacity,
} from 'react-native';

import { vw } from 'react-native-expo-viewport-units';
import Charts from '../components/SavingHistory/Charts';
import Logs from '../components/SavingHistory/Logs';

export default class SavingHistoryScreen extends Component {

  // To hide the NavigationBar from Home Screen
  static navigationOptions = {
    header: null
  };

  state = {
    mode: 'all'
  }

  changeMode(mode) {
    this.setState(previousState => ({
      mode: mode
    }))
  }

  render() {

    // The window shows the charts
    if (this.state.mode == 'all') {
      return (
        <View style={styles.container}>
          {/* Header */}
          <View style={styles.header}>
            <TouchableOpacity onPress={() => this.props.navigation.navigate('Home')}>
              <Image style={styles.header_back_icon} source={require("../assets/images/arrow_back_white.png")}></Image>
            </TouchableOpacity>
            <Text style={styles.header_title}>Saving History</Text>
            <Text style={styles.header_right_space}></Text>
          </View>
  
          {/* Sub Header */}
          <View style={styles.subheader}>
            <Text style={styles.subheader_active}>All</Text>
            <Text style={styles.subheader_text}> | </Text>
            <TouchableOpacity onPress={() => this.changeMode('logs')}>
              <Text style={styles.subheader_text}>Logs</Text>
            </TouchableOpacity>
          </View>
  
          {/* Main */}
          <View style={styles.main}>
            <Charts />
          </View>
      </View> 
      )
    }

    // The window shows the logs
    else {
      return (
        <View style={styles.container}>
          {/* Header */}
          <View style={styles.header}>
            <TouchableOpacity onPress={() => this.props.navigation.navigate('Home')}>
              <Image style={styles.header_back_icon} source={require("../assets/images/arrow_back_white.png")}></Image>
            </TouchableOpacity>
            <Text style={styles.header_title}>Saving History</Text>
            <Text style={styles.header_right_space}></Text>
          </View>
  
          {/* Sub Header */}
          <View style={styles.subheader}>
            <TouchableOpacity onPress={() => this.changeMode('all')}>
              <Text style={styles.subheader_text}>All</Text>
            </TouchableOpacity>
            <Text style={styles.subheader_text}> | </Text>
            <Text style={styles.subheader_active}>Logs</Text>
          </View>
  
          {/* Main */}
          <View style={styles.main}>
            <Logs />
          </View>
      </View> 
      )
    }
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

  // Header
  header: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row',
    width: vw(100),
    height: 70,
    marginTop: 50,
    backgroundColor: '#2f225b',
  },

  header_back_icon: {
    width: 30,
    height: 30,
    marginLeft: 10
  },

  header_title: {
    color: '#ffffff',
    fontFamily: 'Futura',
    fontSize: 30,
  },

  header_right_space: {
    width: 30,
    height: 30,
    marginRight: 10
  },

  // Sub Header
  subheader: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    width: vw(100),
    height: 50,
    backgroundColor: '#f6f5ff'
  },

  subheader_text: {
    fontSize: 18,
    color: 'rgba(66, 66, 66, 0.25)'
  },

  subheader_active: {
    fontSize: 20,
    color: 'rgba(66, 66, 66, 1.0)'
  },

  main: {
    flex: 1,
    width: vw(100),
  }
})