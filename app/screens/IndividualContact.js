import React, { Component } from 'react';
import styles from '../styles/main';
import { View, Text, TextInput, StyleSheet, Image } from 'react-native';
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
    this.createNotes = this.createNotes.bind(this);
  }

  createNotes(id) {
    firebase.database().ref(`contacts/${id}`).push(this.state);
  }

  render() {
    return (
      <View style={styles.individualContact}>
        <View>
          { !this.props.avatar ? <Image style={styles.individualAvatar} source={require('../img/individual-avatar.png')} /> :
            <Image style={styles.individualAvatar} source={{uri: this.props.avatar.uri}} />
          }
        </View>
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
        {/* <Button onPress={e => this.createNotes(this.props.id)} title="Save" /> */}
        <View style={styles.row}>
          <Button onPress={() => Actions.addContacts({firstName: this.props.firstName})} title="Edit" />
          <Button onPress={e => this.props.onPress(this.props.id)} title="Delete" />
        </View>
      </View>
    );
  }
}
