import 'react-native';
import React from 'react';
import ContactCard from '../app/components/ContactCard.js';
import renderer from 'react-test-renderer';

it('renders correctly', () => {
  const tree = renderer.create(
    <ContactCard  />
  ).toJSON();
  expect(tree).toMatchSnapshot();
});
