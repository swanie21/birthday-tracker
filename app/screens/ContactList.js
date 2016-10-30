import React, { Component } from 'react';
import { TextInput, View, AsyncStorage, ListView, Text, TouchableHighlight, DatePickerIOS, ScrollView, TouchableWithoutFeedback, StyleSheet } from 'react-native';
import styles from '../styles/main';
import SearchContacts from '../components/SearchContacts';
import Button from '../components/Button';
import ContactCard from '../components/ContactCard';
import moment from 'moment';
import firebase, { contactsRef, provider } from '../firebase';
import split from 'split-object';

export default class ContactList extends Component {
  constructor(props) {
  super(props);
    this.state = {
      dataSource: new ListView.DataSource({rowHasChanged: (row1, row2) => row1 !== row2}),
      contacts: []
    };
  }

  componentDidMount() {
    contactsRef.on('value', (snapshot) => {
      let contacts = snapshot.val();
      if(!contacts) { return this.setState({ contacts: [] }); }
      contacts = split(contacts).map(contact => ({ key: contact.key }, contact.value));
      this.setState({
        dataSource: this.state.dataSource.cloneWithRows(contacts),
        contacts
      });
    });
  }

  render() {
    return (
      <View style={styles.contactList}>
        <ListView
          enableEmptySections
          dataSource={this.state.dataSource}
          renderRow={(contacts) => <Text>{contacts.firstName} {contacts.lastName}</Text>}
        />
      </View>
    );
  }
}
