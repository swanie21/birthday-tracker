import React, { Component } from 'react';
import styles from '../styles/main';
import { ListView, Text } from 'react-native';

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
      <ListView
        style={styles.contactList}
        dataSource={this.state.dataSource}
        renderRow={(contacts) => <Text>{contacts.firstName}{contacts.lastName}</Text>}
      />
    );
  }
}
