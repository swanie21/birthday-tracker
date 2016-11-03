'use strict';
import React, { Component } from 'react';
import styles from '../styles/main';
import { View, Text, TouchableHighlight, Image } from 'react-native';
import { Actions } from 'react-native-router-flux';

const ContactCard = ({ firstName, lastName, birthdayDate, id, onPress, avatar }) => {
  console.log(avatar);
  return (
    <TouchableHighlight
      style={styles.contactCard}
      onPress={() => Actions.contactInfo({firstName, lastName, birthdayDate, id, onPress, avatar })}>
      <View style={styles.row}>
        <View>
          { !avatar ? <Image style={styles.listAvatar} source={require('../img/list-avatar.png')} /> :
            <Image style={styles.listAvatar} source={{uri: avatar.uri}} />
          }
        </View>
        <View style={styles.card}>
          <Text style={styles.nameText}>{`${firstName} ${lastName}`}</Text>
          <Text style={styles.birthdayText}>🎈{birthdayDate}</Text>
        </View>
      </View>
    </TouchableHighlight>
  );
}

export default ContactCard;
