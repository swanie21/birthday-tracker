'use strict';
import React, { Component } from 'react';
import styles from '../styles/main';
import { View, Text, TouchableHighlight } from 'react-native';
import { Actions } from 'react-native-router-flux';

const ContactCard = ({ firstName, lastName, birthdayDate, id, onPress }) => {
  return (
    <TouchableHighlight
      style={styles.contactCard}
      onPress={() => Actions.contactInfo({firstName, lastName, birthdayDate, id, onPress })}>
      <View>
        <Text style={styles.nameText}>{`${firstName} ${lastName}`}</Text>
        <Text style={styles.birthdayText}>🎈{birthdayDate}</Text>
      </View>
    </TouchableHighlight>
  );
}

export default ContactCard;
