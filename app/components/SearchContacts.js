import React, { Component } from 'react';
import styles from '../styles/main';
import { View, TextInput } from 'react-native';

export default class SearchContacts extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchInput: ''
    };
  }

  render() {
    return (
      <View style={styles.searchBar}>
        <TextInput
          style={styles.searchInput}
          placeholder='Search contacts'
          onChangeText={(searchInput) => this.setState({searchInput})}
        />
      </View>
    );
  }
}
