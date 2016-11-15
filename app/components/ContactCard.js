'use strict';
import React, { Component } from 'react';
import styles from '../styles/main';
import { View, Text, TouchableHighlight, Image, Dimensions } from 'react-native';
import { Actions } from 'react-native-router-flux';
import defaultAvatar from '../img/list-avatar.png';
const width = Dimensions.get('window').width;

const ContactCard = ({ firstName, lastName, birthdayDate, id, onPress, avatar, notesInput }) => {
  return (
    <View style={{width: width*0.9}}>
      <TouchableHighlight
        style={styles.contactCard}
        underlayColor={'#73c8bc'}
        onPress={() => Actions.contactInfo({firstName, lastName, birthdayDate, id, onPress, avatar, notesInput })}>
        <View style={styles.row}>
          <Image style={styles.listAvatar} source={avatar ? {uri: avatar.uri} : defaultAvatar } />
          <View style={styles.card}>
            <Text style={styles.nameText}>{`${firstName} ${lastName}`}</Text>
            <Text style={styles.birthdayText}>🎈{birthdayDate}</Text>
          </View>
        </View>
      </TouchableHighlight>
    </View>
  );
}

export default ContactCard;
