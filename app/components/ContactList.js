import React, { Component } from 'react';
import styles from '../styles/main';
import { ListView } from 'react-native';

const contacts = [
  {firstName: "Kirsten", lastName: "Swanson", birthday: "🎈 February 16th"},
  {firstName: "Mitch", lastName: "Davis", birthday: "🎈 June 20th"}
];

export default class ContactList extends Component {
  constructor(props) {
    super(props);
    var dataSource = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    this.state = {
      dataSource: dataSource.cloneWithRows(contacts)
    };
  }

  render() {
    return (
      <ListView
        dataSource={this.state.dataSource}>
      </ListView>
    );
  }
}
