import React, { Component } from 'react';
import styles from './styles/main';
import Main from './components/Main';
import ContactList from './components/ContactList';
import ContactListContainer from './components/ContactListContainer';
import ViewContainer from './components/ViewContainer';
import { View, StyleSheet, Text, NavigatorIOS, TouchableHighlight } from 'react-native';
// import firebase from 'firebase';

export default class birthdayTracker extends Component {
  render() {
  return (
        // <ViewContainer />
         <NavigatorIOS
          style={styles.container}
          initialRoute={{
            title: 'Saves the Day',
            component: Main
          }}
        />
      );
    }
  }
