'use strict';
import React, { Component } from 'react';
import styles from '../styles/main';
import { View, Text } from 'react-native';

export default class Contact extends Component {
  render() {
    const contactInfo = this.dataSource.cloneWithRows(this.props.contacts);
    return (
      <View>
        <Text>Hello</Text>
        dataSource={dataSource}
      </View>
    );
  }
}
