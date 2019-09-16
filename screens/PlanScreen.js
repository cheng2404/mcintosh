import React, {Component} from 'react';
import {
  Text,
  View,
  StyleSheet,
  Image,
  TextInput,
} from 'react-native';
import { vw, vh } from 'react-native-expo-viewport-units';
import Header from '../components/Dashboard/Header';
import { Button } from 'react-native-material-ui';
// import Divider from 'react-native-divider';

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

				<View style = {styles.column}>
					<Text style = {styles.attribute}>Total Saving Goal</Text>
					{/* <Divider/> */}
					<Text style = {styles.attribute}>Completion Period</Text>
					{/* <Divider/> */}
					<Text style = {styles.attribute}>House Type</Text>
					{/* <Divider/> */}
					<Text style = {styles.attribute}>Region</Text>
				
				</View>
				<View style = {styles.edit}>
					<Button primary raised upperCase={false} color="#8A2586" text="Edit"
					onPress ={() => this.props.navigation.push('PlanEdit')} 
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
    	// alignItems: 'flex-start',
		backgroundColor: '#fff',
		marginTop: vh(-15),
		
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
		flexDirection: 'column',
		width: 200,
		height: 40,
		borderWidth: 0,
		borderColor: 'white',
		borderRadius: 5,
		marginTop: vh(-10),
		marginLeft: vw(25),
		color: '#8A2586',
	},
	nothing: {
		flex: 1,
    	flexDirection: 'column',
    	justifyContent: 'space-between',
    	alignItems: 'flex-start',
    	backgroundColor: '#fff',
	},
	
	// line: {
	// 	marginTop: vh(1),
	// 	width: '100%',
	// 	 height: 3,
	//   backgroundColor: '#e9e9e9',
	//   borderRadius: 0,
	//   overflow: 'hidden'
	// },



})