'use strict';
import React, { Component } from 'react';
import styles from '../styles/main';
import { TextInput, View } from 'react-native';
import { Form, DatePickerIOS } from 'react-native-form';

export default class AddContact extends Component {
  constructor() {
    super();
    this.state = {
      firstName: '',
      lastName: '',
      birthday: ''
    };
  }

  render() {
    return (
      <Form ref="form">
        <View>
          <TextInput type="TextInput" name="firstName" onChangeText={(firstName) => this.setState({firstName})}/>
          <TextInput type="TextInput" name="lastName" onChangeText={(lastName) => this.setState({lastName})}/>
        </View>
        <DatePickerIOS type="DatePickerIOS" name="myBirthday" />
      </Form>
    );
  }
}
