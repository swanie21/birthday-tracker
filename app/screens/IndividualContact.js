import React, { Component } from 'react';
import styles from '../styles/main';
import { View, Text, TextInput, Image, ScrollView } from 'react-native';
import TextField from 'react-native-md-textinput';
import { Actions } from 'react-native-router-flux';
import firebase, { contactsRef } from '../firebase';
import split from 'split-object';
import Button from '../components/Button';

export default class IndividualContact extends Component {
  constructor(props) {
    super(props);
    this.state = {
      newNote: '',
    };
  }

  componentWillReceiveProps(newProps) {
    this.setState({
      newNote: newProps.newNote || '',
    });
  }

  saveNotes(notes) {
    this.setState({ newNote: notes });
    contactsRef.child(this.props.id).update(notes);
  }

  render() {
    let notesValue = this.state.newNote ? this.state.newNote : this.props.notesInput;
    let checkNotesObject = typeof notesValue === 'object' ? notesValue.notesInput : notesValue;

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
          <ScrollView>
            <TextField
              label={'Present ideas...'}
              highlightColor={'#02556D'}
              labelColor={'#02556D'}
              textColor={'#013240'}
              borderColor={'#EAE8E8'}
              keyboardType='default'
            />
          </ScrollView>
        </View>
        <View style={styles.row}>
          <Button onPress={() => Actions.addContacts(
            {editing: true,
            firstName: this.props.firstName,
            lastName: this.props.lastName,
            birthdayDate: this.props.birthdayDate,
            avatar: this.props.avatar,
            id: this.props.id,
            updateContact: (id, state) => contactsRef.child(id).update(state)})}
            title="Edit"
          />
          <Button onPress={e => this.props.onPress(this.props.id)} title="Delete" />
        </View>
      </View>
    );
  }
}
