import React from 'react';
import { View, Text } from 'react-native';
import { TextField } from 'react-native-md-textinput';
import { shallow, mount, ScrollView } from 'enzyme';
import { expect } from 'chai';
import IndividualContact from '../screens/IndividualContact';
import Button from '../components/Button';

describe('IndividualContact components', () => {
  beforeEach(() => {
    wrapper = shallow(<IndividualContact />);
  });

  it('should be rendered into a View container', () => {
    expect(wrapper.type()).to.equal(View);
  });

  it('should render 4 View components', () => {
    expect(wrapper.find(View)).to.have.length(4);
  });

  it('should render 2 Text components', () => {
    expect(wrapper.find(Text)).to.have.length(2);
  });

  it('should render 2 Button components', () => {
    expect(wrapper.find(Button)).to.have.length(2);
  });

  it('should render 1 ScrollView component', () => {
    expect(wrapper.find('ScrollView')).to.have.length(1);
  });

  it('should render 1 TextField component', () => {
    expect(wrapper.find('TextField')).to.have.length(1);
  });
});

describe('IndividualContact default state', () => {
  beforeEach(() => {
    wrapper = shallow(<IndividualContact />);
  });

  it('should have a default newNote state that is empty', () => {
    expect(wrapper.state().newNote).to.deep.equal('');
  });
});

describe('IndividualContact props', () => {
  beforeEach(() => {
    wrapper = shallow(<IndividualContact />);
  });

  it('should have props for firstName, lastName, birthdayDate, id, onPress, title, placeholder, style and notesInput', () => {
    expect(wrapper.props('firstName')).to.be.defined;
    expect(wrapper.props('lastName')).to.be.defined;
    expect(wrapper.props('birthdayDate')).to.be.defined;
    expect(wrapper.props('id')).to.be.defined;
    expect(wrapper.props('onPress')).to.be.defined;
    expect(wrapper.props('title')).to.be.defined;
    expect(wrapper.props('placeholder')).to.be.defined;
    expect(wrapper.props('style')).to.be.defined;
    expect(wrapper.props('notesInput')).to.be.defined;
  });
});
