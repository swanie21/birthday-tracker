import 'react-native';
import React from 'react';
import Button from '../app/components/Button.js';
import renderer from 'react-test-renderer';

it('renders correctly', () => {
  let title='Save';
  const tree = renderer.create(
    <Button title={title} />
  ).toJSON();
  expect(tree).toMatchSnapshot();
});
