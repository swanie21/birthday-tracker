'use strict';
import React, { Component } from 'react';
import styles from '../styles/main';
import { TextInput, View, DatePickerIOS, ListView } from 'react-native';
import Button from '../components/Button';

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
    const contactInfo = new ListView.DataSource({rowHasChanged: (row1, row2) => row1 !== row2});
    contactInfo.push(this.state);
    this.setState({
      firstName: '',
      lastName: ''
    });
  }

  // editContact() {
  //
  // }

  render() {
    return (
      <View style={styles.addContact}>
        <View style={styles.firstNameInput}>
          <TextInput
            style={styles.inputFields}
            placeholder="First Name"
            onChangeText={firstName => this.setState({firstName})}
            value={this.state.firstName}
          />
        </View>
        <View style={styles.lastNameInput}>
          <TextInput
            style={styles.inputFields}
            placeholder="Last Name"
            onChangeText={lastName => this.setState({lastName})}
            value={this.state.lastName}
          />
        </View>
        <DatePickerIOS
          date={this.state.birthdayDate}
          mode="date"
          onDateChange={birthdayDate => this.setState({birthdayDate})}
        />
        <Button onPress={this.createContact} title="Save" />
        <Button onPress={this.editContact} title="Edit" />
      </View>
    );
  }
}
