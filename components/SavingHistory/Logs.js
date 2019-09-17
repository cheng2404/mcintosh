import React, {Component} from 'react';
import {
  Text,
  View,
  StyleSheet,
  ScrollView
} from 'react-native';

export default class Logs extends Component {

  state = {
    logs: []
  }

  createSampleLogs() {
    var count = 0;
    var logs = []

    while(count < 10) {
      var log = [
        {title: 'Salary', amount: 5000},
        {title: 'Shopping', amount: - Math.floor(Math.random() * 500)},
        {title: 'Sale', amount: Math.floor(Math.random() * 100)},
      ]

      logs = logs.concat(log)
      count++;
    }

    this.setState(() => ({
      logs: logs
    }))
  }

  showLogs() {
    var logs = []

    this.state.logs.map((log, key) => {

      if(log.amount >= 0) {
        logs.push(
          <View key={key} style={styles.log_view}>
            <Text style={styles.log_title}>{log.title}</Text>
            <Text style={styles.plus}>${log.amount}</Text>
          </View>
        )
      }
      else {
        logs.push(
          <View key={key} style={styles.log_view}>
            <Text style={styles.log_title}>{log.title}</Text>
            <Text style={styles.minus}>${log.amount}</Text>
          </View>
        )
      }
    })
    
    return logs
  }

  componentDidMount() {
    this.createSampleLogs()
  }

  render() {
    return (
      <ScrollView>
        {this.showLogs()}
      </ScrollView>
    )
  }
}

const styles = StyleSheet.create({
  log_view: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 10,
    marginHorizontal: 20
  },

  log_title: {
    fontSize: 18
  },

  plus: {
    color: "#43964e",
    fontWeight: "bold",
    fontSize: 18
  },

  minus: {
    color: "#b54044",
    fontSize: 18,
    fontWeight: "bold",
  }
})