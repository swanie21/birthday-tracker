'use strict';
import React, { Component } from 'react';
import styles from '../styles/main';
import { View, Text, TouchableHighlight } from 'react-native';
import { Actions } from 'react-native-router-flux';
import IndividualContact from '../screens/IndividualContact';

const ContactCard = ({ firstName, lastName, birthdayDate }) => {
  return (
    <TouchableHighlight onPress={() => Actions.IndividualContact()} style={styles.contactCard}>
      <View>
        <Text>{firstName} {lastName}</Text>
        <Text>{birthdayDate}</Text>
      </View>
    </TouchableHighlight>
  );
}

export default ContactCard;
