import React from 'react';
import { View } from 'react-native';
import { shallow, mount } from 'enzyme';
import { expect } from 'chai';
import AddContact from '../screens/AddContact';

describe('<AddContact />', () => {
  it('should be a view component', () => {
    const wrapper = shallow(<AddContact />);

    expect(wrapper.type()).to.equal(View);
  });
});
