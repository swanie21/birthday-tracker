'use strict';
import React, { Component } from 'react';
import styles from '../styles/main';
import { View, Text, TouchableHighlight } from 'react-native';

const Button = ({ onPress, title }) => {
  return (
    <View style={styles.button}>
      <TouchableHighlight
        onPress={onPress}>
        <Text style={styles.buttonText}>{title}</Text>
      </TouchableHighlight>
    </View>
  );
}

export default Button;
