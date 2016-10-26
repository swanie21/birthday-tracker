import React, { Component } from 'react';
import styles from '../styles/main';
import { View, Text, TouchableHighlight } from 'react-native';

export default class Button extends Component {
  render() {
    return (
      <View>
        <TouchableHighlight
          onPress={this.props.onPress}>
          <Text>{this.props.title}</Text>
        </TouchableHighlight>
      </View>
    );
  }
}
