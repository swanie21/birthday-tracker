import React, { Component } from 'react';
import ContactList from './ContactList';
import AddContact from './AddContact';
import { Text } from 'react-native';
import { Router, Scene } from 'react-native-router-flux';

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
          tabBarStyle={{ backgroundColor: '#FFF' }}
        >

          <Scene key="contactList" title="Contacts" icon={TabIcon}>
            <Scene
              key="contacts"
              component={ContactList}
              title="Contacts"
              initial
            />
          </Scene>

          <Scene key="addContacts" title="Add Contact" icon={TabIcon}>
            <Scene
              key="addContact"
              component={AddContact}
              title="Add Contacts"
            />
          </Scene>
        </Scene>
      </Scene>
    </Router>
  );
}

export default Main;
