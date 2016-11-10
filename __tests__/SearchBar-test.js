import 'react-native';
import React from 'react';
import SearchBar from '../app/components/SearchBar.js';
import renderer from 'react-test-renderer';

it('renders correctly', () => {
  const tree = renderer.create(
    <SearchBar />
  ).toJSON();
  expect(tree).toMatchSnapshot();
});
