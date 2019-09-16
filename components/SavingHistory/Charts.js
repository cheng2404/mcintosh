import React, {Component} from 'react';
import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity
} from 'react-native';
import LineGraphComponent from '../Common/LineGraphComponent'
import BarGraphComponent from '../Common/BarGraphComponent'

import { AsyncStorage } from 'react-native';

export default class Charts extends Component {

  state = {
    selectedTerm: 'week',
    lineGraphData: [],
    lineGraphLabel: [],
    barGraphData: [],
    barGraphLabel: [],
  }

  viewStyleManager(term) {
    var classes = []
    if (term == this.state.selectedTerm) {
      classes.push(styles.active)
    }
    switch(term) {
      case 'week':
        classes.push(styles.week_view)
        return classes
      case 'month':
        classes.push(styles.month_view)
        return classes
      case 'year':
        classes.push(styles.year_view)
        return classes
    }
  }

  textStyleManager(term) {
    if (term == this.state.selectedTerm) {
      return styles.activeText
    }
    else {
      return styles.unactiveText
    }
  }

  async changeTerm(term) {
    await this.setState(previousState => ({selectedTerm: term}))
    await this.getLineGraphDataSet()
    this.getBarGraphDataSet()
  }

  async getLineGraphDataSet() {
    var data = ''
    var label = ''
    switch(this.state.selectedTerm) {
      case 'week':
        data = await AsyncStorage.getItem('weeklyData')
        label = await AsyncStorage.getItem('weeklyLabel')
        break

      case 'month':
        data = await AsyncStorage.getItem('monthlyData')
        label = await AsyncStorage.getItem('monthlyLabel')
        break
      
      case 'year':
        data = await AsyncStorage.getItem('yearlyData')
        label = await AsyncStorage.getItem('yearlyLabel')
        break
    }

    data = JSON.parse(data)
    label = JSON.parse(label)

    this.setState(previousState => ({
      lineGraphData: data,
      lineGraphLabel: label
    }))
  }

  getBarGraphDataSet() {
    var dataSet = []
    var total = 0

    this.state.lineGraphData.forEach(data => {
      total += data;
      dataSet.push(total);
    })

    const label = this.state.lineGraphLabel
    
    this.setState(previousState => ({
      barGraphData: dataSet,
      barGraphLabel: label
    }))
  }

  async componentDidMount() {
    await this.getLineGraphDataSet()
    this.getBarGraphDataSet()
  }

  render() {
    return (
      <View style={styles.container}>
        
        {/* Select Term */}
        <View style={styles.terms}>
          <TouchableOpacity onPress={() => this.changeTerm('week')}>
            <View style={this.viewStyleManager('week')}>
              <Text style={this.textStyleManager('week')}>Week</Text>
            </View>
          </TouchableOpacity>
          
          <TouchableOpacity onPress={() => this.changeTerm('month')}>
            <View style={this.viewStyleManager('month')}>
              <Text style={this.textStyleManager('month')}>Month</Text>
            </View>
          </TouchableOpacity>
          
          <TouchableOpacity onPress={() => this.changeTerm('year')}>
            <View style={this.viewStyleManager('year')}>
              <Text style={this.textStyleManager('year')}>Year</Text>
            </View>
          </TouchableOpacity>
        </View>

        {/* Line Graph */}
        <View>
          <Text style={styles.graph_title}>Saving History</Text>
          <LineGraphComponent data={this.state.lineGraphData} label={this.state.lineGraphLabel} />
        </View>
        

        {/* Bar Graph */}
        <View>
          <Text style={styles.graph_title}>Total Saving</Text>
          <BarGraphComponent data={this.state.barGraphData} label={this.state.barGraphLabel}></BarGraphComponent>
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

  terms: {
    display: 'flex',
    flexDirection: 'row',
    height: 30,
    backgroundColor: '#f6f5ff',
    marginTop: 10,
    borderRadius: 20,
    borderWidth: 2,
    borderColor: '#2f225b',
    overflow: 'hidden'
  },

  week_view: {
    display: 'flex',
    height: 26,
    width: 100,
    justifyContent: 'center',
    alignItems: 'center',
    borderRightWidth: 2,
    borderRightColor: '#fff'
  },

  month_view: {
    display: 'flex',
    height: 26,
    width: 100,
    justifyContent: 'center',
    alignItems: 'center',
    borderRightWidth: 2,
    borderRightColor: '#fff'
  },

  year_view: {
    display: 'flex',
    height: 26,
    width: 100,
    justifyContent: 'center',
    alignItems: 'center',
  },

  active: {
    backgroundColor: '#2f225b'
  },

  activeText: {
    color: '#fff'
  },

  unactiveText: {
    color: '#2f225b'
  },

  graph_title: {
    color: '#9c9c9c',
    fontSize: 20,
    marginBottom: 10
  }
})
