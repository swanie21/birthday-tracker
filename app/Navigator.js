import React, { Component } from 'react';
import { NavigatorIOS } from 'react-native';
import Root from './Root';

export default class birthdayTracker extends Component {
  render() {
    return (
      <NavigatorIOS
        ref="navigator"
        initialRoute={{
          component: Root,
          title: 'Home'
        }}
        style={{flex:1}}
      />
    );
  }
}
