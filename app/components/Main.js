import React, { Component } from 'react';
import styles from '../styles/main';
import { View, Text, Image } from 'react-native';

export default class Main extends Component {
  render() {
    return (
      <View style={styles.loginScreen}>
        <Text style={styles.appTitle}>Saves the Day</Text>
        <Image source={require('./present.png')} />
      </View>
    );
  }
}
