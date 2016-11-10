import 'react-native';
import React from 'react';
import IndividualContact from '../app/screens/IndividualContact.js';
import renderer from 'react-test-renderer';

it('renders correctly', () => {
  const tree = renderer.create(
    <IndividualContact />
  ).toJSON();
  expect(tree).toMatchSnapshot();
});
