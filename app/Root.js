'use strict';
import React, { Component } from 'react';
import ContactList from './screens/ContactList';
import AddContact from './screens/AddContact';
import IndividualContact from './screens/IndividualContact';
import { Text } from 'react-native';
import { Router, Scene } from 'react-native-router-flux';
import Icon from 'react-native-vector-icons/Ionicons';

const TabIcon = ({ selected, title }) => {
  return (
    <Text>{title}</Text>
  );
}

const ContactBook = ({ selected }) => {
  return (
    <Icon name='ios-book' size={30} color='#013240' />
  );
}

const PlusContact = ({ selected }) => {
  return (
    <Icon name='md-person-add' size={30} color='#013240' />
  );
}

const Root = () => {

  return (
    <Router>
      <Scene key="root">

        <Scene
          key="tabbar"
          tabs={true}
          tabBarStyle={{ backgroundColor: '#EAE8E8' }}
        >

          <Scene key="contactList" title="Contact List" icon={ContactBook}>
            <Scene
              key="contacts"
              component={ContactList}
              title="Saves the Day"
              titleStyle={{ color: '#013240' }}
            />
          </Scene>

          <Scene key="addContacts" title="Add Contact" icon={PlusContact}>
            <Scene
              key="individualContact"
              component={AddContact}
              title="Add Contact"
              titleStyle={{ color: '#013240' }}
            />
          </Scene>

          <Scene
            key="contactInfo"
            component={IndividualContact}
            title="Contact Info"
            titleStyle={{ color: '#013240' }}
          />
        </Scene>

      </Scene>
    </Router>
  );
}

export default Root;
