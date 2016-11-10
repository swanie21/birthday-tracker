import 'react-native';
import React from 'react';
import AddContact from '../app/screens/AddContact.js';
import renderer from 'react-test-renderer';

it.skip('renders correctly', () => {
  const tree = renderer.create(
    <AddContact />
  ).toJSON();
  expect(tree).toMatchSnapshot();
});
