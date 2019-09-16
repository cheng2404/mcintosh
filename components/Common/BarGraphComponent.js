import React, {Component} from 'react';
import { View, Text, Dimensions } from 'react-native';
import { BarChart } from 'react-native-chart-kit';

export default class BarGraphComponent extends Component {
  render() {
    return (
      <View>
        <BarChart
          data={{
            labels: this.props.label,
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