import React, {Component} from 'react';
import {
  Text,
  View,
  StyleSheet,
  Image,
  TextInput
} from 'react-native';
import { vw } from 'react-native-expo-viewport-units';
import { vh } from 'react-native-expo-viewport-units';
import Header from '../components/Dashboard/Header';
import { Button } from 'react-native-material-ui';

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
					<Image
          			style = {styles.i}
          			source = {require('../assets/images/profile_photo.png')}
          			/>
					<Text style = {styles.plan}>Complete plan: 50%</Text>
				</View>
				<View style={styles.progressbar_view}>
              		<Text style={styles.progressbar_text}></Text>
            	</View>
            	<View style={styles.grey}>
            	</View>
				<View style = {styles.section}>
					<Text style = {styles.attribute}
				 	onPress ={() => this.props.navigation.push('Plan')} >My Plan</Text>
				 	<Image
          			style = {styles.i1}
          			source = {require('../assets/images/button.png')}
          			onPress ={() => this.props.navigation.push('Plan')} 
          			/>
					
				</View>

				<View style={styles.line}>
            	</View>

            	<Text style = {styles.favourite}
				onPress ={() => this.props.navigation.push('ProfileCollection')} >My Favourites</Text>
            	<Image
          			style = {styles.i1}
          			source = {require('../assets/images/button.png')}
          			onPress ={() => this.props.navigation.push('ProfileCollection')} 
          			/>
            	<View style={styles.grey0}>
            	</View>

				<View style = {styles.container}>
					<View style = {styles.logout}>
						<Button
            			primary raised upperCase={false} text="Log out"
            			onPress ={() => this.props.navigation.push('Login')} 
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
		marginTop: vh(3),
    	fontSize: 30,
    	marginLeft: 10,
    	color: 'black',
    	fontWeight: 'bold',
	},
	name: {
		marginTop: vh(3),
    	fontSize: 25,
    	marginLeft: 10,
    	color: 'black',
    	fontWeight: 'bold',
	},
	plan: {
		marginTop: vh(1),
    	fontSize: 15,
    	marginLeft: 10,
    	color: 'grey',
	},
	attribute: {
		marginTop: vh(1),
    	fontSize: 25,
    	marginLeft: 10,
    	color: 'black'
	},
	section: {

	},
	logout: {
		flexDirection: 'column',
    	width: 300,
    	height: 40,
    	borderWidth: 0,
    	borderColor: 'white',
    	marginTop: vh(40),
    	marginLeft: vw(15),
	},
	 progressbar_view: {
	 	marginLeft:10,
    	width: '60%',
   		height: 10,
    	backgroundColor: '#e9e9e9',
    	borderRadius: 20,
    	overflow: 'hidden'
  	},
    progressbar_text: {
    	width: '50%',
    	height: 10,
    	backgroundColor: '#43964e'
  	},
  	grey: {
  		marginTop: vh(5),
    	width: '100%',
   		height: 25,
    	backgroundColor: '#e9e9e9',
    	borderRadius: 0,
    	overflow: 'hidden'
  	},
  	grey0: {
  		marginTop: vh(1),
    	width: '100%',
   		height: 25,
    	backgroundColor: '#e9e9e9',
    	borderRadius: 0,
    	overflow: 'hidden'
  	},
  	line: {
  		marginTop: vh(1),
  		width: '100%',
   		height: 3,
    	backgroundColor: '#e9e9e9',
    	borderRadius: 0,
    	overflow: 'hidden'
  	},
  	favourite: {
  		marginTop: vh(1),
  		fontSize: 25,
    	marginLeft: 10,
    	color: 'black'
  	},
  	i: {
    	width: 100,
    	height: 100,
    	marginLeft: vw(70),
    	marginTop: vh(-10)
  	},
  	i1: {
  		width: 35,
    	height: 35,
  		marginLeft: vw(85),
    	marginTop: vh(-3.5)
  	}


})