'use strict';
import React, { Component } from 'react';
import ContactList from './ContactList';
import AddContact from './AddContact';
import { Text } from 'react-native';
import { Router, Scene } from 'react-native-router-flux';
import IndividualContact from './IndividualContact';

const { TabIcon } = ({ selected, title }) => {
  return (
    <Text>{title}</Text>
  );
}

const Main = () => {
  return (
    <Router>
      <Scene key="root">

        <Scene
          key="tabbar"
          tabs={true}
          tabBarStyle={{ backgroundColor: '#EAE8E8' }}
        >

          <Scene key="contactList" title="Contacts" icon={TabIcon}>
            <Scene
              key="contacts"
              component={ContactList}
              title="Saves the Day"
              initial
            />
          </Scene>

          <Scene key="addContacts" title="Add Contact" icon={TabIcon}>
            <Scene
              key="individualContact"
              component={IndividualContact}
              title="Contact Info"
            />
          </Scene>
        </Scene>
      </Scene>
    </Router>
  );
}

export default Main;