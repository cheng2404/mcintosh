import React, {Component} from 'react';
import {
  Text,
  View,
  StyleSheet,
  Button,
  Image,
  TextInput
} from 'react-native';
import { vw, vh } from 'react-native-expo-viewport-units';
import Header from '../components/Dashboard/Header'

export default class PlanScreen extends Component {

	static navigationOptions = {
    	header: null
  	};

	render(){
		return (
			<View style = {styles.nothing}>
				<View style = {styles.Topic}>


					<Text style = {styles.back}
						onPress ={() => this.props.navigation.push('Profile')}>Back</Text>
					<Text style = {styles.plan}>Plan</Text>

				</View>

				{/* <View style = {styles.column}> */}
					<Text style = {styles.attribute}>Total Saving Goal</Text>
				
					<Text style = {styles.attribute}>Completion Period</Text>
				
					<Text style = {styles.attribute}>House Type</Text>
				
					<Text style = {styles.attribute}>Region</Text>
				
				{/* </View> */}
				<View style = {styles.edit}>
					<Button
            		color = 'purple'
            		onPress ={() => this.props.navigation.push('Home')} 
            		title = 'Edit'
        			/>
        		</View>
        	</View>

		)
	}
}

const styles = StyleSheet.create({
	Topic: {
		flex: 1,
    	flexDirection: 'column',
    	// justifyContent: 'space-between',
    	alignItems: 'flex-start',
    	backgroundColor: '#fff',
	},
	back: {
		// marginTop: 20,
    	fontSize: 30,
		marginLeft: vw(5),
		marginTop: vh(6),
    	color: 'green',
	},
	plan: {
		// marginTop: 10,
    	fontSize: 30,
		marginLeft: vw(6),
		marginTop: vh(2),
    	color: 'black',
    	fontWeight: 'bold',
	},
	column: {
		flex: 1,
    	flexDirection: 'column',
    	// justifyContent: 'space-between',
    	alignItems: 'flex-start',
		backgroundColor: '#fff',

		
	},
	attribute: {
		fontSize: 15,
		marginLeft: vw(10),
		marginBottom: vh(5),
		// paddingTop: 15,
    	color: 'black',
	},
	grey: {
		flex: 1,
		flexDirection: 'column',
		backgroundColor: 'grey',
		height: 1,
	},
	edit: {
		flex: 1,
		alignItems: 'flex-end'
	},
	nothing: {
		flex: 1,
    	flexDirection: 'column',
    	justifyContent: 'space-between',
    	alignItems: 'flex-start',
    	backgroundColor: '#fff',
	}



})