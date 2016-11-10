import 'react-native';
import React from 'react';
import ContactList from '../app/screens/ContactList.js';
import renderer from 'react-test-renderer';

it('renders correctly', () => {
  const tree = renderer.create(
    <ContactList />
  ).toJSON();
  expect(tree).toMatchSnapshot();
});
