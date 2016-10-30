import 'react-native';
import React from 'react';
import Index from '../index.ios.js';
import AddContact from '../app/screens/AddContact';
import renderer from 'react-test-renderer';

it('renders correctly', () => {
  const tree = renderer.create(
    <AddContact />
  ).toJSON();
  expect(tree).toMatchSnapshot();
});
