import React, { Component } from 'react';
import styles from '../styles/main';
import { View, Text } from 'react-native';
import ContactList from './ContactList';
import SearchContacts from './SearchContacts';
//add contact and sort contact features available here

export default class ContactListContainer extends Component {
  render() {
    var dataSource = this.dataSource.cloneWithRows(this.props.contacts);
    return (
      <View>
        <SearchContacts />
        <ContactList />
      </View>
    );
  }
}
