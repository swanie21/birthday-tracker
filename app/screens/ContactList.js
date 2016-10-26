import React, { Component } from 'react';
import { TextInput, View, AsyncStorage, ListView, Text, TouchableHighlight } from 'react-native';
import SearchContacts from '../components/SearchContacts';
import Button from '../components/Button';
import styles from '../styles/main';

const ContactList = React.createClass({
  getInitialState () {
    var contactInfo = new ListView.DataSource({rowHasChanged: (row1, row2) => row1 !== row2});
    var contacts = [];
    this.getStorage().then((contacts) => this.setItems(contacts));
    return {
      contacts,
      contactInfo: contactInfo.cloneWithRows(contacts),
      firstName: '',
      lastName: ''
    };
  },

  updateFirstName(e) {
    this.setState({firstName: e.nativeEvent.text});
  },

  updateLastName(e) {
    this.setState({lastName: e.nativeEvent.text});
  },

  onPress () {
    if (this.state.firstName) {
      this.state.contacts.push(this.state.firstName);
      this.setItems(this.state.contacts);
      this.setState({firstName: ''});
      this.updateStorage();
    }
    if (this.state.lastName) {
      this.state.contacts.push(this.state.lastName);
      this.setItems(this.state.contacts);
      this.setState({lastName: ''});
      this.updateStorage();
    }
  },

  getStorage () {
    return AsyncStorage
      .getItem('contacts')
      .then((contacts) => JSON.parse(contacts));
  },

  updateStorage () {
    return AsyncStorage.setItem('contacts', JSON.stringify(this.state.contacts));
  },

  setItems (contacts) {
    var contactInfo = this.state.contactInfo.cloneWithRows(contacts);
    this.setState({contacts, contactInfo});
  },

  render () {
    return (
      <View style={styles.contactList}>
        <SearchContacts />
        <ListView
          dataSource={this.state.contactInfo}
          renderRow={(rowData) => <Text>{rowData}</Text>}
        />
        <View style={styles.firstNameInput}>
          <TextInput
            style={styles.inputFields}
            placeholder="First Name"
            onChange={this.updateFirstName}
            value={this.state.firstName}
          />
        </View>
        <View style={styles.lastNameInput}>
          <TextInput
            style={styles.inputFields}
            placeholder="Last Name"
            onChange={this.updateLastName}
            value={this.state.lastName}
          />
        </View>
        <Button onPress={this.onPress} title="Save" />
      </View>
    );
  }
});

export default ContactList;
