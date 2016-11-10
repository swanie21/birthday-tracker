import React from 'react';
import { View, TextInput, ScrollView } from 'react-native';
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

  it('should render 2 Button components', () => {
    expect(wrapper.find(Button)).to.have.length(2);
  });

  it('should render 1 ScrollView component', () => {
    expect(wrapper.find('ScrollView')).to.have.length(1);
  });
});

describe('AddContact default state', () => {
  beforeEach(() => {
    wrapper = shallow(<AddContact />);
    MockDate.set(new Date('10/31/2016'));
  });

  it('should have a default firstName state that is empty', () => {
    expect(wrapper.state().firstName).to.equal('');
  });

  it('should have a default lastName state that is empty', () => {
    expect(wrapper.state().lastName).to.equal('');
  });

  it('should have a default avatar state that is null', () => {
    expect(wrapper.state().avatar).to.equal(null);
  });

  it.skip('should have a default birthdayDate set to new Date()', () => {
    expect(wrapper.state().birthdayDate).to.equal(new Date('10/31/2016'));
  });
});
