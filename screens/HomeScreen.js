import React, {Component} from 'react';
import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  ScrollView
} from 'react-native';

import Header from '../components/Dashboard/Header'
import LineChartComponent from '../components/Common/LineGraphComponent'
import { vw } from 'react-native-expo-viewport-units';
import { AsyncStorage } from 'react-native';

export default class HomeScreen extends Component {

  // To hide the NavigationBar from Home Screen
  static navigationOptions = {
    header: null
  };

  state = {
    monthlyData: [],
    monthlyLabel: [],
    totalAmount: 0,
    goalAmount: 300000,
    currentMonthAmount: 0,
    currentMonthGoal: 2500
  }

  async componentDidMount() {
    
    if (!(await AsyncStorage.getItem('weeklyData'))) {
      this.generateRandomData()
    }

    const monthlyData = JSON.parse(await AsyncStorage.getItem('monthlyData'))
    const monthlyLabel = JSON.parse(await AsyncStorage.getItem('monthlyLabel'))

    await this.setSampleTotalAmount()

    this.setState(() => ({
      monthlyData: monthlyData,
      monthlyLabel: monthlyLabel,
      currentMonthAmount: monthlyData[monthlyData.length - 1]
    }))
  }

  async setSampleTotalAmount() {
    var totalAmount = 0
    const weeklyData = JSON.parse(await AsyncStorage.getItem('weeklyData'))
    const monthlyData = JSON.parse(await AsyncStorage.getItem('monthlyData'))
    const yearlyData = JSON.parse(await AsyncStorage.getItem('yearlyData')) 

    weeklyData.forEach(element => {
      totalAmount += element
    })

    monthlyData.forEach(element => {
      totalAmount += element
    })

    yearlyData.forEach(element => {
      totalAmount += element
    })

    // Add added records in the total amount
    var records = await AsyncStorage.getItem('records')

    // For Reset the input
    // await AsyncStorage.setItem('records', JSON.stringify([]))

    if(records) {
      records = JSON.parse(records)
      records.forEach(element => {
        totalAmount += parseInt(element.amount)
      })
    }
    this.setState(() => ({
      totalAmount: totalAmount
    }))
  }

  // For the first time
  async generateRandomData() {
    
    // Generate Sample Graph Data Set
    const sampleWeekData = [
      Math.floor(Math.random() * 100),
      Math.floor(Math.random() * 100),
      Math.floor(Math.random() * 100),
      Math.floor(Math.random() * 100),
      Math.floor(Math.random() * 100),
      Math.floor(Math.random() * 100)
    ]

    const sampleMonthData = [
      Math.floor(Math.random() * 2500),
      Math.floor(Math.random() * 2500),
      Math.floor(Math.random() * 2500),
      Math.floor(Math.random() * 2500),
      Math.floor(Math.random() * 2500),
      Math.floor(Math.random() * 2500)
    ]

    const sampleYearData = [
      Math.floor(Math.random() * 10000),
      Math.floor(Math.random() * 10000),
      Math.floor(Math.random() * 10000),
      Math.floor(Math.random() * 10000),
      Math.floor(Math.random() * 10000),
      Math.floor(Math.random() * 10000)
    ]

    await AsyncStorage.setItem('weeklyData', JSON.stringify(sampleWeekData))
    await AsyncStorage.setItem('monthlyData', JSON.stringify(sampleMonthData))
    await AsyncStorage.setItem('yearlyData', JSON.stringify(sampleYearData))

    // Generate Sample Graph Label Data Set
    const sampleWeekLabel = ['18/8', '25/8', '1/9', '8/9', '15/9', '22/9']
    const sampleMonthLabel = ['Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep']
    const sampleYearLabel = ['2014', '2015', '2016', '2017', '2018', '2019']

    await AsyncStorage.setItem('weeklyLabel', JSON.stringify(sampleWeekLabel))
    await AsyncStorage.setItem('monthlyLabel', JSON.stringify(sampleMonthLabel))
    await AsyncStorage.setItem('yearlyLabel', JSON.stringify(sampleYearLabel))
  }

  setFormat(value) {
    return String(value).replace( /(\d)(?=(\d\d\d)+(?!\d))/g, '$1,');
  }

 render() {    
    return (
      <ScrollView>
        <View style={styles.container}>

          {/* Heaer Component */}
          <Header/>

          {/* Goal */}
          <View style={styles.goal_container}>

            {/* Goal Container Header */}
            <Text style={styles.goal_container_header_sub}>You've already saved</Text>
            <View style={styles.goal_container_header}>
              <Text style={styles.goal_container_header_doller}>$</Text>
              <Text style={styles.goal_container_header_main}>{this.setFormat(this.state.totalAmount)}</Text>
            </View>

            {/* Goal Container Main */}
            <View style={styles.goal_container_main}>

              {/* Progress Bar */}
              <View style={styles.progressbar_view}>
                <Text style={[styles.progressbar_text, {width: this.state.totalAmount / this.state.goalAmount * 100 + '%'}]}></Text>
              </View>

              {/* Current State */}
              <View style={styles.current_state_view}>
                <Text style={styles.current_state_text}>$ {this.setFormat(this.state.totalAmount)}</Text>
                <Text style={styles.current_state_text}>$ {this.setFormat(this.state.goalAmount)}</Text>
              </View>
            </View>
          </View>

          {/* Monthly Goal */}
          <View style={styles.monthly_goal}>

            {/* Monthly Goal Header */}
            <Text style={styles.monthly_goal_header_sub}>Monthly Goal (1/9 ~ 30/9)</Text>

            <View style={styles.monthly_goal_container}>
              <Text style={styles.monthly_goal_doller}>$</Text>
              <Text style={styles.monthly_goal_number}>{this.setFormat(this.state.currentMonthAmount)}</Text>
            </View>

            {/* Goal Container Main */}
            <View style={styles.goal_container_main}>

              {/* Progress Bar */}
              <View style={styles.monthly_progressbar_view}>
                <Text style={[styles.monthly_progressbar_text, {width: this.state.currentMonthAmount / this.state.currentMonthGoal * 100 + '%'}]}></Text>
              </View>

              {/* Current State */}
              <View style={styles.monthly_current_state_view}>
                <Text style={styles.monthly_current_state_text}>$ {this.setFormat(this.state.currentMonthAmount)}</Text>
                <Text style={styles.monthly_current_state_text}>$ {this.setFormat(this.state.currentMonthGoal)}</Text>
              </View>
            </View>
          </View>

          {/* Saving History */}
          <View style={styles.history_container}>
            <View style={styles.history_header}>
              <Text style={styles.history_header_title}>Saving History</Text>
              <TouchableOpacity onPress={() => this.props.navigation.push('SavingHistory')} >
                <Text style={styles.history_header_link}>More</Text>
              </TouchableOpacity>
            </View>
            <LineChartComponent data={this.state.monthlyData} label={this.state.monthlyLabel} />
          </View>
        </View>
      </ScrollView>
    )
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    backgroundColor: '#fff',
  },

  // Goal Container
  goal_container: {
    flexDirection: 'column',
    width: vw(100)- 32,
    height: 180,
    marginLeft: 16,
    marginRight: 16,
    marginTop: 20,
    borderRadius: 20,
    padding: 10,
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
    height: 30,
    backgroundColor: '#e9e9e9',
    borderRadius: 20,
    overflow: 'hidden'
  },

  progressbar_text: {
    height: 30,
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

  // Monthly Goal
  monthly_goal: {
    flexDirection: 'column',
    width: vw(100)- 32,
    height: 160,
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
    shadowOpacity: 0.15,
    shadowRadius: 3.84,

    elevation: 5,
    backgroundColor: '#ffffff'
  },

  monthly_goal_header_sub: {
    color: '#9c9c9c',
    fontSize: 16
  },

  monthly_goal_container: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'flex-end',
    height: 50,
    marginTop: 16
  },

  monthly_goal_doller: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#2f225b',
    marginBottom: 6
  },

  monthly_goal_number: {
    fontSize: 40,
    fontFamily: 'Futura',
  },

  // Progress Bar
  monthly_progressbar_view: {
    width: '100%',
    height: 14,
    backgroundColor: '#e9e9e9',
    borderRadius: 20,
    overflow: 'hidden'
  },
  
  monthly_progressbar_text: {
    width: '72%',
    height: 14,
    backgroundColor: '#43964e'
  },
  
  // Current State
  monthly_current_state_view: {
    width: '100%',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 5
  },
  
  monthly_current_state_text: {
    fontSize: 14
  },

  // History Container
  history_container: {
    flexDirection: 'column',
    justifyContent: 'space-between',
    height: 270,
    alignItems: 'center',
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.15,
    shadowRadius: 3.84,

    elevation: 5,
    backgroundColor: '#ffffff',
    margin: 16,
    width: vw(100) - 32,
    borderRadius: 20,
  },

  history_header: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: vw(100) - 32,
    height: 50,
    borderRadius: 10,
    padding: 10
  },

  history_header_title: {
    color: '#9c9c9c',
    fontSize: 16
  },

  history_header_link: {
    color: '#9c9c9c',
    fontSize: 16,
    textDecorationLine: 'underline'
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