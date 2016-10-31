'use strict';
import React, { Component } from 'react';
import styles from '../styles/main';
import { View, Text, TouchableHighlight } from 'react-native';
import { Actions } from 'react-native-router-flux';
import IndividualContact from '../screens/IndividualContact';

const ContactCard = ({ firstName, lastName, birthdayDate }) => {
  return (
    <TouchableHighlight
      style={styles.contactCard}
      onPress={() => Actions.contactInfo()}>
      <View>
        <Text style={styles.nameText}>{firstName} {lastName}</Text>
        <Text style={styles.birthdayText}>🎈{birthdayDate}</Text>
      </View>
    </TouchableHighlight>
  );
}

export default ContactCard;
