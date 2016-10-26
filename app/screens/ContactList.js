import React, { Component } from 'react';
import { TextInput, View, AsyncStorage, ListView, Text, TouchableHighlight, DatePickerIOS, ScrollView } from 'react-native';
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
      lastName: '',
      birthdayDate: new Date(),
      currentDate: new Date()
    };
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

  // renderContactRow(contact) {
  //   return (
  //     <TouchableHighlight>
  //       <Text>{contact.firstName}</Text>}
  //     </TouchableHighlight>
  //   );
  // },

  render () {
    return (
      <View style={styles.contactList}>
        <ScrollView>
          <SearchContacts />
          <ListView
            dataSource={this.state.contactInfo}
            renderRow={(rowData) => <Text>{rowData}</Text>}
          />
          <View style={styles.firstNameInput}>
            <TextInput
              style={styles.inputFields}
              placeholder="First Name"
              onChangeText={firstName => this.setState({firstName})}
              value={this.state.firstName}
            />
          </View>
          <View style={styles.lastNameInput}>
            <TextInput
              style={styles.inputFields}
              placeholder="Last Name"
              onChangeText={lastName => this.setState({lastName})}
              value={this.state.lastName}
            />
          </View>
          {/* <View style={styles.inputFields}>
              <Text>{this.state.currentDate}</Text>
          </View> */}
          <DatePickerIOS
            date={this.state.birthdayDate}
            mode="date"
            onDateChange={birthdayDate => this.setState({birthdayDate})}
          />
          <Button onPress={this.onPress} title="Save" />
        </ScrollView>
      </View>
    );
  }
});

export default ContactList;
