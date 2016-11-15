'use strict';
import React, { Component } from 'react';
import styles from '../styles/main';
import { View, Text, TouchableHighlight } from 'react-native';

const Button = ({ onPress, title, disabled={false} }) => {
  return (
    <View>
      {disabled === true ?
      <TouchableHighlight
        style={styles.disabledButton}
        underlayColor={'#eff1a1'}>
        <Text style={styles.buttonText}>{title}</Text>
      </TouchableHighlight> :
      <TouchableHighlight
        style={styles.button}
        underlayColor={'#F7E74A'}
        onPress={onPress}>
        <Text style={styles.buttonText}>{title}</Text>
      </TouchableHighlight>
    }
    </View>
  );
}

export default Button;
