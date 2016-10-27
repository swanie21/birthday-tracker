'use strict';
import React, { Component } from 'react';
import styles from '../styles/main';
import { TextInput, Text, View, DatePickerIOS, ListView, TouchableHighlight, TouchableWithoutFeedback } from 'react-native';
import Button from '../components/Button';

export default class AddContact extends Component {
  constructor() {
    super();
    this.state = {
      firstName: '',
      lastName: '',
      birthdayDate: new Date(),
      datePicker: 'hidden'
    };
    this.toggleDatePicker = this.toggleDatePicker.bind(this);
  }

  toggleDatePicker() {
    const display = this.state.datePicker === 'hidden' ? 'visible' : 'hidden';
    this.setState({ datePicker: display });
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
    const datePicker = (
      <View>
        <Button onPress={this.toggleDatePicker} title="Save Date"/>
        <DatePickerIOS
          date={this.state.birthdayDate}
          mode="date"
          onDateChange={birthdayDate => this.setState({birthdayDate})}
        />
      </View>
    )

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
        <View>
          <View style={styles.datePicker}>
            <TouchableWithoutFeedback onPress={this.toggleDatePicker}>
              <View>
                <Text>
                  {this.state.birthdayDate.getMonth() + 1}
                  /{this.state.birthdayDate.getDate()}
                  /{this.state.birthdayDate.getFullYear()}
                  </Text>
              </View>
            </TouchableWithoutFeedback>
          </View>
          {this.state.datePicker === 'visible' ? datePicker : <View/>}
        </View>
        <Button onPress={this.createContact} title="Save" />
        <Button onPress={this.editContact} title="Edit" />
      </View>
    );
  }
}
