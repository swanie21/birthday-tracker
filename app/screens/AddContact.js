'use strict';
import React, { Component } from 'react';
import styles from '../styles/main';
import { TextInput, View } from 'react-native';

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
      <View>
        <TextInput type="TextInput" name="firstName" onChangeText={firstName => this.setState({firstName})}/>
        <TextInput type="TextInput" name="lastName" onChangeText={lastName => this.setState({lastName})}/>
      </View>
    );
  }
}
