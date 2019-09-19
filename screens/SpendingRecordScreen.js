import React, {Component} from 'react';
import {
  Text,
  View,
  StyleSheet,
  Image,
  TextInput,
} from 'react-native';

import { vw } from 'react-native-expo-viewport-units';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { vh } from 'react-native-expo-viewport-units';
import { Button } from 'react-native-material-ui';
import { AsyncStorage } from 'react-native';

export default class SpendingRecordScreen extends Component {

    constructor(props) {
      super(props);
      this.state = {
        spa: '',
        de: ''
      };
    }

  // To hide the NavigationBar from Home Screen
  static navigationOptions = {
    header: null
  };

  async addRecord() {
    var records = await AsyncStorage.getItem('records')
    if (!records) {
      records = []
    }
    else {
      records = JSON.parse(records)
    }

    const record = {
      title: this.state.de,
      amount: -parseInt(this.state.spa)
    }

    records.unshift(record)
    await AsyncStorage.setItem('records', JSON.stringify(records))

    this.props.navigation.push('Home')
  }

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
          <Text style={styles.create_header}>SPENDING</Text>
          <TextInput
            style={styles.saving_input}
            placeholder="Spending Amount:"
            keyboardType = "numeric"
            onChangeText={(spa) => this.setState({spa})}
            value={this.state.spa}
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
          		onPress ={() => this.addRecord()} 
      			/>
        	</View>
        </View>
      </View>
    )
  }
}

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
    marginTop: 30,
  },

  //lll
  saving_form : {
    flex: 2,
    marginTop: 130,
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