import React from 'react';
import { View, TextInput } from 'react-native';
import { shallow } from 'enzyme';
import { expect } from 'chai';
import AddContact from '../screens/AddContact';
import Camera from '../components/Camera';
import Button from '../components/Button';
import MockDate from 'mockdate';

describe('AddContact components', () => {
  beforeEach(() => {
    wrapper = shallow(<AddContact />);
  });

  it('should be rendered into a View container', () => {
    expect(wrapper.type()).to.equal(View);
  });

  it('should render Camera component', () => {
    expect(wrapper.find(Camera)).to.have.length(1);
  });

  it('should render Button component', () => {
    expect(wrapper.find(Button)).to.have.length(1);
  });
});

describe('AddContact default state', () => {
  beforeEach(() => {
    wrapper = shallow(<AddContact />);
    MockDate.set(new Date('10/31/2016'));
  });

  it('should have a default firstName state that is empty', function() {
    expect(wrapper.state().firstName).to.equal('');
  });

  it('should have a default lastName state that is empty', function() {
    expect(wrapper.state().lastName).to.equal('');
  });

  it.skip('should have a default birthdayDate set to new Date()', function() {
    expect(wrapper.state().birthdayDate).to.equal(new Date('10/31/2016'));
  });
});
