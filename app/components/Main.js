import React, { Component } from 'react';
import styles from '../styles/main';
import { View, Text, Image } from 'react-native';

export default class Main extends Component {

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>Saves the Day</Text>
        <Image source={require('./img/present.svg')} style={styles.logo}/>
      </View>
    );
  }
}
