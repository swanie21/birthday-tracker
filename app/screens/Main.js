import React, { Component } from 'react';
import styles from '../styles/main';
import ContactList from './ContactList';
import { View, Text, Image, TouchableHighlight } from 'react-native';
// import firebase from 'firebase';

export default class Main extends Component {
  goToContactList() {
    this.props.navigator.push({
      title: 'Contacts',
      component: ContactList
    });
  }

  render() {
    return (
      <View style={styles.loginScreen}>
        <Text style={styles.appTitle}>Saves the Day</Text>
        <Image source={require('../img/present.png')} />
        <TouchableHighlight style={styles.loginButton} onPress={() => this.goToContactList()} underlayColor='#7ac4ba'>
          <Text style={styles.loginButtonText}>View Contacts</Text>
        </TouchableHighlight>
      </View>
    );
  }
}
