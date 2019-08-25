import React, {Component} from 'react';
import {
  Text,
  View,
  StyleSheet,
  Button
} from 'react-native';

export default class LoginScreen extends Component {


  // Move to LOGIN Screen
  moveToRegister() {
    this.props.navigation.push('Register')
  }

  // TODO: Add contents on the LOGIN Screen.
  render() {
    return (
      <View style={styles.container}>
        <Text>Login Screen</Text>
        <Button
         onPress={() => this.moveToRegister()}
         title='Move to Register Screen'
        />
      </View>
    )
  }
}

// TODO: Add styles on the LOGIN Screen
const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
})