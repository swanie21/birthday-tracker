'use strict';
import React, { Component } from 'react';
import styles from '../styles/main';
import { View, Text, TextInput, StyleSheet } from 'react-native';
import { AutoGrowingTextInput } from 'react-native-autogrow-textinput';
import Button from '../components/Button';
import { Actions } from 'react-native-router-flux';
import firebase, { contactsRef } from '../firebase';

export default class IndividualContact extends Component {
  constructor(props) {
    super(props);
    this.state = {
      notes: ''
    };
  }

  // createNotes() {
  //   contactsRef.push(this.state);
  // }

  render() {
    return (
      <View style={styles.individualContact}>
        <Text style={styles.nameText}>{`${this.props.firstName} ${this.props.lastName}`}</Text>
        <Text style={styles.birthdayText}>🎈{this.props.birthdayDate}</Text>
        <View style={styles.notesField}>
          <AutoGrowingTextInput
            style={styles.notesInput}
            placeholder='Present ideas...'
            onChangeText={notes => this.setState({notes})}
            value={this.state.notes}
          />
        </View>
        {/* <Button onPress={this.createNotes()} title="Save" /> */}
        <Button onPress={() => Actions.addContacts()} title="Edit" />
        <Button onPress={e => this.props.onPress(this.props.id)} title="Delete" />
      </View>
    );
  }
}
