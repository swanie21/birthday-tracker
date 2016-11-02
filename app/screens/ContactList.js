import React, { Component } from 'react';
import { View, ListView } from 'react-native';
import styles from '../styles/main';
import SearchBar from '../components/SearchBar';
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
      contacts = split(contacts).map(contact => Object.assign({ id: contact.key }, contact.value));
      this.setState({
        dataSource: this.state.dataSource.cloneWithRows(contacts),
        contacts
      });
    });
  }

  filterContacts(e) {
    let textInput = e.nativeEvent.text.toLowerCase();
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

  deleteContact(id) {
    contactsRef.child(id).remove();
    Actions.contactList();
  }

  render() {
    return (
      <View style={styles.contactList}>
        <SearchBar
          onChange={this.filterContacts.bind(this)}
        />
        <ListView
          enableEmptySections
          dataSource={this.state.dataSource}
          renderRow={(contacts) =>
            <ContactCard
              {...contacts}
              onPress={this.deleteContact.bind(this)}
              value={this.state.notes}
              onChangeText={notes => this.setState({notes})}
            />}
        />
      </View>
    );
  }
}
