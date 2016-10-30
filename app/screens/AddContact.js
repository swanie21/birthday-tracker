'use strict';
import React, { Component } from 'react';
import styles from '../styles/main';
import { TextInput, Image, View, TouchableHighlight } from 'react-native';
import Button from '../components/Button';
import firebase, { contactsRef } from '../firebase';
import ContactList from './ContactList';
import DatePicker from 'react-native-datepicker';
import Camera from '../components/Camera';

export default class AddContact extends Component {
  constructor() {
    super();
    this.state = {
      firstName: '',
      lastName: '',
      birthdayDate: new Date(),
    };
  }

  createContact() {
    contactsRef.push(this.state);
    // this.props.navigator.push({
    //   component: ContactList,
    //   title: 'Saves the Day'
    // });
    this.setState({
      firstName: '',
      lastName: '',
    });
  }

  render() {
    return (
      <View style={styles.addContact}>
        <Camera />
        <View style={styles.firstNameInput}>
          <TextInput
            style={styles.inputFields}
            placeholder='First Name'
            onChangeText={firstName => this.setState({firstName})}
            value={this.state.firstName}
          />
        </View>
        <View style={styles.lastNameInput}>
          <TextInput
            style={styles.inputFields}
            placeholder='Last Name'
            onChangeText={lastName => this.setState({lastName})}
            value={this.state.lastName}
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
        <Button onPress={this.createContact.bind(this)} title='Save' />
      </View>
    );
  }
}
