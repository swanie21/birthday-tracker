import 'react-native';
import React from 'react';
import Camera from '../app/components/Camera.js';
import renderer from 'react-test-renderer';

it('renders correctly', () => {
  const tree = renderer.create(
    <Camera />
  ).toJSON();
  expect(tree).toMatchSnapshot();
});
