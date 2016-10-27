'use strict';
import React, { Component } from 'react';
import ContactList from './ContactList';
import AddContact from './AddContact';
import ContactCard from '../components/ContactCard';
import { Text } from 'react-native';
import { Router, Scene } from 'react-native-router-flux';

const TabIcon = ({ selected, title }) => {
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

          <Scene key="contactList" title="Contact List" icon={TabIcon}>
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
              component={AddContact}
              title="Add Contact"
            />
          </Scene>

          <Scene
            key="contactInfo"
            component={ContactCard}
            title="Contact Info"
          />
        </Scene>

      </Scene>
    </Router>
  );
}

export default Main;
