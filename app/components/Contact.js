'use strict';
import React, { Component } from 'react';
import styles from '../styles/main';
import { TouchableHighlight } from 'react-native';

export default class Contact extends Component {
  render() {
    var dataSource = this.dataSource.cloneWithRows(this.props.contacts);
    return (
      <TouchableHighlight>
        dataSource={dataSource}
      </TouchableHighlight>
    );
  }
}
