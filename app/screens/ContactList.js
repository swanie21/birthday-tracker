import React, { Component } from 'react';
import { TextInput, View, AsyncStorage, ListView, Text, TouchableHighlight, DatePickerIOS, ScrollView } from 'react-native';
import SearchContacts from '../components/SearchContacts';
import Button from '../components/Button';
import ContactCard from '../components/ContactCard';
import styles from '../styles/main';
import { Actions } from 'react-native-router-flux';

// export default class ContactList extends Component {
//   constructor() {
//     super();
//     this.state = {
//       firstName: '',
//       lastName: '',
//       birthdayDate: new Date()
//     };
//   }

const ContactList = React.createClass({
  getInitialState () {
    const contactInfo = new ListView.DataSource({rowHasChanged: (row1, row2) => row1 !== row2});
    const contacts = [];
    this.getStorage().then((contacts) => this.setItems(contacts));
    return {
      contacts,
      contactInfo: contactInfo.cloneWithRows(contacts),
      firstName: '',
      lastName: '',
      birthdayDate: new Date(),
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
    const contactInfo = this.state.contactInfo.cloneWithRows(contacts);
    this.setState({contacts, contactInfo});
  },

  createContact () {
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

  // removeStorage() {
  //   return AsyncStorage.removeItem('contacts');
  // },

  render () {
    return (
      <View style={styles.contactList}>
        <ScrollView>
          <SearchContacts />
          <ListView
            dataSource={this.state.contactInfo}
            renderRow={(contacts) => <Text style={{borderWidth: 0.9, borderColor: 'green'}} onPress={() => Actions.contactInfo()}>{contacts}</Text>}
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
          <DatePickerIOS
            date={this.state.birthdayDate}
            mode="date"
            onDateChange={birthdayDate => this.setState({birthdayDate})}
          />
          <Button onPress={this.createContact} title="Save" />
          <Button onPress={() => Actions.contactInfo()} title="test route" />
        </ScrollView>
      </View>
    );
  }
});

export default ContactList;
