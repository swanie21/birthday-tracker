'use strict';
import React, { Component } from 'react';
import styles from '../styles/main';
import { View, TextInput } from 'react-native';

export default class SearchContacts extends Component {
  render() {
    return (
      <View style={styles.searchBar}>
        <TextInput
          value={this.props.searchInput}
          style={styles.searchInput}
          placeholder='Search contacts'
        />
      </View>
    );
  }
}
