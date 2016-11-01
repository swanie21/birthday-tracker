'use strict';
import React, { Component } from 'react';
import styles from '../styles/main';
import { View, TextInput } from 'react-native';

const SearchContacts = ({ onChange }) => {
  return (
    <View style={styles.searchBar}>
      <TextInput
        autoCapitalize='none'
        autoCorrect={false}
        autoFocus={true}
        onChange={onChange}
        style={styles.searchInput}
        placeholder='Search contacts'
      />
    </View>
  );
}


export default SearchContacts;
