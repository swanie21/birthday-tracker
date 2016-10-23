import React, { Component } from 'react';
import styles from './styles/main';
import Main from './components/Main';
import ContactList from './components/ContactList';
import ContactListContainer from './components/ContactListContainer';
import { View, NavigatorIOS } from 'react-native';
// import firebase from 'firebase';

export default class birthdayTracker extends Component {
  handleNavigation() {
    this.refs.navigator.push({
      component: ContactList,
      title: 'Contacts'
    });
  }

  render() {
  return (
        // <ContactList />
         <NavigatorIOS
          ref="navigator"
          style={styles.container}
          initialRoute={{
            component: Main,
            title: 'Home',
            rightButtonTitle: 'Contact List',
            onRightButtonPress: () => this.handleNavigation()
          }}
        />
      );
    }
  }
