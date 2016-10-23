import React, { Component } from 'react';
import styles from '../styles/main';
import { View, Text, ListView, TouchableHighlight } from 'react-native';

const contacts = [
  {firstName: "Kirsten", lastName: "Swanson", birthday: "🎈 February 16th"},
  {firstName: "Mitch", lastName: "Davis", birthday: "🎈 June 20th"}
];

export default class ViewContainer extends Component {
  constructor(props) {
    super(props);
    var contactList = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    this.state = {
      list: contactList.cloneWithRows(contacts)
    };
  }

  render() {
    return (
      <ViewContainer style={styles.ViewContainer}>
        <ListView
          list={this.state.list}
          renderRow={(contacts) => { return this.renderContact(contacts)}}
        />
      </ViewContainer>
    );
  }

  renderContact(contacts) {
    return (
      <TouchableHighlight>
        <Text>{contacts.firstName}</Text>
      </TouchableHighlight>
    );
  }
}
