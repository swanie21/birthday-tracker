import React, { Component } from 'react';
import styles from '../styles/main';
import { View, Text } from 'react-native';

export default class ContactListContainer extends Component {
  render() {
    var dataSource = this.dataSource.cloneWithRows(this.props.contacts);
    return (
      <View>
        <ContactList />
      </View>
    );
  }
}
