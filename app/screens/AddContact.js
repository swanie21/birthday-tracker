'use strict';
import React, { Component } from 'react';
import styles from '../styles/main';
import { TextInput, View, DatePickerIOS } from 'react-native';
import Button from '../components/Button';

export default class AddContact extends Component {
  constructor() {
    super();
    this.state = {
      birthdayDate: new Date()
    };
  }

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
        <Button onPress={this.onPress} title="Save" />
      </View>
    );
  }
}
