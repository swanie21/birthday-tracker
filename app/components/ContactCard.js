'use strict';
import React, { Component } from 'react';
import styles from '../styles/main';
import { View, Text, TouchableHighlight } from 'react-native';

const ContactCard = ({ firstName, lastName, birthdayDate }) => {
  return (
    <TouchableHighlight style={styles.contactCard}>
      <View>
        <Text>{firstName}</Text>
        <Text>{lastName}</Text>
        <Text>{birthdayDate}</Text>
      </View>
    </TouchableHighlight>
  );
}

export default ContactCard;
