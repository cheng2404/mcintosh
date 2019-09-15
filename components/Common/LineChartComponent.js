import React, {Component} from 'react';
import { View, Text, Dimensions } from 'react-native';
import { LineChart } from 'react-native-chart-kit';

export default class LineChartComponent extends Component {
  render() {
    return (
      <View>
        <LineChart
          data={{
            labels: ['January', 'February', 'March', 'April', 'May', 'June'],
            datasets: [{
              data: this.props.data
            }]
          }}
          width={Dimensions.get('window').width - 32} // from react-native
          height={220}
          yAxisLabel={'$'}
          chartConfig={{
            backgroundColor: '#ffffff',
            backgroundGradientFrom: '#ffffff',
            backgroundGradientTo: '#ffffff',
            decimalPlaces: 2, // optional, defaults to 2dp
            color: (opacity = 1) => `rgba(47,34,91, ${opacity})`,
            style: {
              borderRadius: 16
            }
          }}
          bezier
          style={{
            borderRadius: 20
          }}
        />
      </View>
    )
  }
}