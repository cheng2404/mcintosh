import React, {Component} from 'react';
import {
  Text,
  View,
  StyleSheet,
  Button,
  Image,
  TextInput
} from 'react-native';
import { vw } from 'react-native-expo-viewport-units';
import Header from '../components/Dashboard/Header'

export default class ProfileScreen extends Component {

	static navigationOptions = {
    	header: null
  	};

	render(){
		return (
			<View style = {styles.nothing}>
				<View style = {styles.Topic}>
					<Text style = {styles.profile}>Profile</Text>
					<Text style = {styles.name}>Jianhao ZHAO</Text>
					<Text style = {styles.plan}>Complete plan: 50%</Text>
				</View>
				<View style = {styles.section}>
					<Text style = {styles.attribute}
				 	onPress ={() => this.props.navigation.push('Plan')} >My Plan</Text>
					<Text style = {styles.attribute}>My Favourites</Text>
				</View>

				<View style = {styles.container}>
					<View style = {styles.logout}>
						<Button
            			color = 'purple'
            			onPress ={() => this.props.navigation.push('Home')} 
            			title = 'Log Out'
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
	nothing: {
		flex: 1,
    	flexDirection: 'column',
    	justifyContent: 'space-between',
    	alignItems: 'flex-start',
    	backgroundColor: '#fff',
	},
	Topic: {
		flexDirection: 'column',
    
	},
	profile: {
		marginTop: 25,
    	fontSize: 30,
    	marginLeft: 10,
    	color: 'black',
    	fontWeight: 'bold',
	},
	name: {
		marginTop: 10,
    	fontSize: 25,
    	marginLeft: 10,
    	color: 'black',
    	fontWeight: 'bold',
	},
	plan: {
		marginTop: 10,
    	fontSize: 15,
    	marginLeft: 10,
    	color: 'grey',
	},
	attribute: {
		marginTop: 25,
    	fontSize: 20,
    	marginLeft: 10,
    	color: 'black'
	},
	grey: {
		flex: 1,
		flexDirection: 'column',
		backgroundColor: 'grey'
	},
	section: {

	},
	logout: {
		flexDirection: 'column',
    	width: 300,
    	height: 20,
    	borderWidth: 0,
    	borderColor: 'white',
    	marginTop: 250,
    	marginLeft: 28
	},

})