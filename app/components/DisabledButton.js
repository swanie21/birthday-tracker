'use strict';
import React, { Component } from 'react';
import styles from '../styles/main';
import { Text, TouchableHighlight } from 'react-native';

const DisabledButton = ({ title }) => {
  return (
    <TouchableHighlight
      style={styles.disabledButton}
      underlayColor={'#eff1a1'}>
      <Text style={styles.buttonText}>{title}</Text>
    </TouchableHighlight>
  );
}

export default DisabledButton;
