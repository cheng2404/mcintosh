import React, {Component} from 'react';
import {
  Text,
  View,
  StyleSheet,
  Button
} from 'react-native';

export default class RegisterScreen extends Component {

  // Move to HOME Screen
  moveToHome() {
    this.props.navigation.push('Home')
  }

  // TODO: Add contents on the REGISTER Screen.
  render() {
    return (
      <View style={styles.container}>
        <Text>Register Screen</Text>
        <Button
         onPress={() => this.moveToHome()}
         title='Move to Register Screen'
        />
      </View>
    )
  }
}

// TODO: Add styles on the REGISTER Screen
const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
})