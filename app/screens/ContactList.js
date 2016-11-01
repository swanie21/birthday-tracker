import React, { Component } from 'react';
import { View, ListView } from 'react-native';
import styles from '../styles/main';
import SearchContacts from '../components/SearchContacts';
import ContactCard from '../components/ContactCard';
import firebase, { contactsRef } from '../firebase';
import split from 'split-object';
import { Actions } from 'react-native-router-flux';

export default class ContactList extends Component {
  constructor(props) {
  super(props);
    this.state = {
      dataSource: new ListView.DataSource({rowHasChanged: (row1, row2) => row1 !== row2}),
      contacts: [],
      searchInput: '',
    };
  }

  componentDidMount() {
    contactsRef.on('value', (snapshot) => {
      let contacts = snapshot.val();
      if(!contacts) { return this.setState({ contacts: [] }); }
      contacts = split(contacts).map(contact => Object.assign({ key: contact.key }, contact.value));
      this.setState({
        dataSource: this.state.dataSource.cloneWithRows(contacts),
        contacts
      });
    });
  }

  filterContacts(event) {
    let textInput = event.nativeEvent.text.toLowerCase();
    let filter = [];
      this.state.contacts.forEach(contact => {
        if(contact.firstName.toLowerCase().indexOf(textInput) !== -1 ||
          contact.lastName.toLowerCase().indexOf(textInput) !== -1) {
          filter.push(contact);
        }
      });
      this.setState({
        dataSource: this.state.dataSource.cloneWithRows(filter)
    });
  }

  deleteContact(key) {
    const contacts = this.state.contacts;
    contacts.splice(key, 1);
    this.setState({
      dataSource: this.state.dataSource.cloneWithRows(contacts)
    });
    // contactsRef.remove(); => removes all contacts
    // contactsRef.child(key).remove();
    Actions.contactList();
  }

  render() {
    return (
      <View style={styles.contactList}>
        <SearchContacts
          onChange={this.filterContacts.bind(this)}
        />
        <ListView
          enableEmptySections
          dataSource={this.state.dataSource}
          renderRow={(contacts) => <ContactCard {...contacts} onPress={this.deleteContact.bind(this)} value={this.state.notes} onChangeText={notes => this.setState({notes})} />}
        />
      </View>
    );
  }
}
