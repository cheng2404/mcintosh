import React, {Component} from 'react';
import {
  Text,
  View,
  StyleSheet,
  TextInput,
} from 'react-native';
import { vw, vh } from 'react-native-expo-viewport-units';
import { Button } from 'react-native-material-ui';
// import Divider from 'react-native-divider';


export default class PlanEdit extends Component {

	static navigationOptions = {
    	header: null
	  };
	  
	constructor(props) {
		super(props);
		this.state = { tsg: '$10k', cp: '10/09/2019', ht: 'Apartment', r:'Toowong' };
	};

	render(){
		return (
			<View style = {styles.nothing}>

				{/* Header */}
				<View style = {styles.Topic}>
					<Text style = {styles.back}
						onPress ={() => this.props.navigation.push('Plan')}>Cancel</Text>
					<Text style = {styles.plan}>Plan</Text>
				</View>

				<View style = {styles.column}>

					{/* Total Saving Goal */}
					<Text style = {styles.attribute}>Total Saving Goal</Text>
					{/* <Divider/> */}
					<View style = {styles.attribute}>
						<TextInput
							style={styles.input}
							onChangeText={(tsg) => this.setState({tsg})}
							value={this.state.tsg}
						/>
					</View>

					<View style={styles.line}></View>

					{/* Completion Period */}
					<Text style = {styles.attribute}>Completion Period</Text>
					
					<View style = {styles.attribute}>
						<TextInput
							style={styles.input}
							onChangeText={(cp) => this.setState({cp})}
							value={this.state.cp}
						/>
					</View>

					<View style={styles.line}></View>
					
					{/* House Types */}
					<Text style = {styles.attribute}>House Type</Text>
					
					<View style = {styles.attribute}>
						<TextInput
							style={styles.input}
							onChangeText={(ht) => this.setState({ht})}
							value={this.state.ht}
						/>
					</View>

					<View style={styles.line}></View>

					{/* Region */}
					<Text style = {styles.attribute}>Region</Text>

					<View style = {styles.attribute}>
						<TextInput
							style={styles.input}
							onChangeText={(r) => this.setState({r})}
							value={this.state.r}
						/>
					</View>

					<View style={styles.line}></View>

				</View>
				
				<View style = {styles.save}>
					<Button primary raised upperCase={false} color="#36AC4A" text="Save"
						onPress ={() => this.props.navigation.push('Plan')} 
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
		marginBottom: vh(1),
	
		// paddingTop: 15,
    	// color: 'black',
	},
	grey: {
		flex: 1,
		flexDirection: 'column',
		backgroundColor: 'grey',
		height: 1,
	},
	save: {
		flex: 1,
		flexDirection: 'column',
		width: 200,
		height: 40,
		borderWidth: 0,
		borderColor: 'white',
		borderRadius: 5,
		marginTop: vh(12),
		marginLeft: vw(23),
		color: '#8A2586',
	},
	nothing: {
		flex: 1,
    	flexDirection: 'column',
    	justifyContent: 'space-between',
    	alignItems: 'flex-start',
    	backgroundColor: '#fff',
	},

	input: {
		// height: 40, 
		// borderColor: 'lightgray', 
		// borderBottomWidth: 1,
		width: 100,
		height: 40,
		marginTop: vh(-4.5),
		// marginBottom: vh(-),
		marginLeft: vw(50),
		textAlign: 'right',
		color: 'gray',
	},
	
	underline: {
		// height: 40, 
		borderColor: 'gray', 
		
	},

	line: {
		// marginTop: vh(10),
		width: 290,
		height: 1,
		backgroundColor: 'lightgray',
		// borderRadius: 0,
		// borderColor:'lightgray',
		overflow: 'hidden',
		marginLeft: vw(10),
		marginTop: vh(-1),
		marginBottom: vh(5),
	},
})