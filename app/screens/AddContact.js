'use strict';
import React, { Component } from 'react';
import styles from '../styles/main';
import { TextInput, View, ScrollView } from 'react-native';
import firebase, { contactsRef } from '../firebase';
import { Actions } from 'react-native-router-flux';
import Button from '../components/Button';
import DatePicker from 'react-native-datepicker';
import Camera from '../components/Camera';

export default class AddContact extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: props.firstName || '',
      lastName: props.lastName || '',
      birthdayDate: props.birthdayDate || '',
      avatar: props.avatar || null
    };
  }

  componentWillReceiveProps(newProps) {
    this.setState({
      firstName: newProps.firstName,
      lastName: newProps.lastName,
      birthdayDate: newProps.birthdayDate,
      avatar: newProps.avatar || null
    });
  }

  setAvatar(avatar) {
    this.setState({
      avatar: avatar
    });
  }

  createContact() {
    if(this.props.editing) {
      this.props.updateContact(this.props.id, this.state);
    } else {
      contactsRef.push(this.state);
    }
    this.resetContactState();
  }

  resetContactState() {
    Actions.contactList();
    this.setState({
      firstName: '',
      lastName: '',
      birthdayDate: new Date(),
      avatar: null
    });
  }

  render() {
    return (
      <View style={styles.addContact}>
        <ScrollView>
          <Camera avatar={this.state.avatar} setAvatar={this.setAvatar.bind(this)} />
          <View style={styles.firstNameInput}>
            <TextInput
              style={styles.inputFields}
              placeholder='First Name'
              onChangeText={firstName => this.setState({firstName})}
              value={this.state.firstName || this.props.firstName}
              onSubmitEditing={e => this.refs.lastNameInput.focus()}
            />
          </View>
          <View style={styles.lastNameInput}>
            <TextInput
              ref='lastNameInput'
              style={styles.inputFields}
              placeholder='Last Name'
              onChangeText={lastName => this.setState({lastName})}
              value={this.state.lastName || this.props.lastName}
            />
          </View>
          <View>
            <DatePicker
              style={styles.datePicker}
              date={this.state.birthdayDate}
              mode='date'
              format='MMMM Do, YYYY'
              confirmBtnText='Save'
              cancelBtnText='Cancel'
              customStyles={{dateInput: {borderRadius: 10, borderWidth: 0, paddingLeft: 50}}}
              onDateChange={birthdayDate => this.setState({birthdayDate})}
            />
          </View>
          <View style={styles.buttonRow}>
            <Button onPress={(this.resetContactState.bind(this))} title='Cancel' />
            <Button onPress={(this.createContact.bind(this))} title='Save' />
          </View>
        </ScrollView>
      </View>
    );
  }
}
