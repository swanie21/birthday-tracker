import React, { Component } from 'react';
var styles = require('./styles/main.js');
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';

export default class birthdayTracker extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>
          Saves the Day
        </Text>
        <Text style={styles.instructions}>
          To get started, edit index.ios.js
        </Text>
        <Text style={styles.instructions}>
          Press Cmd+R to reload,{'\n'}
          Cmd+D or shake for dev menu
        </Text>
      </View>
    );
  }
}

AppRegistry.registerComponent('birthdayTracker', () => birthdayTracker);
