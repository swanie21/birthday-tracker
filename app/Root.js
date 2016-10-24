import React, { Component } from 'react';
import styles from './styles/main';
import Main from './screens/Main';
import ContactList from './screens/ContactList';
import { NavigatorIOS } from 'react-native';

export default class birthdayTracker extends Component {
  render() {
    return (
       <NavigatorIOS
        ref="navigator"
        style={styles.container}
        initialRoute={{
          component: Main,
          title: 'Home' }}
      />
    );
  }
}
