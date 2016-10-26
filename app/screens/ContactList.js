import React, { Component } from 'react';
import styles from '../styles/main';
import { ListView, Text, View } from 'react-native';
import SearchContacts from '../components/SearchContacts';
import { actions } from 'react-native-router-flux';

const contacts = [
  {firstName: "Kirsten", lastName: "Swanson", birthday: "🎈 February 16th"},
  {firstName: "Mitch", lastName: "Davis", birthday: "🎈 June 20th"}
];

export default class ContactList extends Component {
  constructor(props) {
    super(props);
      const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
      this.state = {
      dataSource: ds.cloneWithRows(contacts)
    };
  }

  render() {
    return (
      <View style={styles.contactList}>
        <SearchContacts />
        <ListView
          dataSource={this.state.dataSource}
          renderRow={(contacts) => <Text>{contacts.firstName} {contacts.lastName} {contacts.birthday}</Text>}
          // renderRow={(contacts) => <Text>{contacts.birthday}</Text>}
        />
      </View>
    );
  }
}
