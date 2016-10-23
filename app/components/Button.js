import React, { Component } from 'react';
import styles from '../styles/main';
import { Text, TouchableHighlight } from 'react-native';

export default class Button extends Component {
  render() {
    return (
      <TouchableHighlight>
        <Text>Button</Text>
      </TouchableHighlight>
    );
  }
}
