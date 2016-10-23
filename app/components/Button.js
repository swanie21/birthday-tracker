import React, { Component } from 'react';
import styles from '../styles/main';
import { View, Text, TouchableHighlight, StyleSheet } from 'react-native';

export default class Button extends Component {
  render() {
    return (
      <View>
        <TouchableHighlight>
          <Text>Button</Text>
        </TouchableHighlight>
      </View>
    );
  }
}
