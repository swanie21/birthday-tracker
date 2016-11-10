'use strict';
import React, { Component } from 'react';
import styles from '../styles/main';
import { Text, TouchableHighlight } from 'react-native';

const Button = ({ onPress, title }) => {
  return (
    <TouchableHighlight
      style={styles.button}
      underlayColor={'#eff1a1'}
      onPress={onPress}>
      <Text style={styles.buttonText}>{title}</Text>
    </TouchableHighlight>
  );
}

export default Button;
