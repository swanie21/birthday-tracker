import React from 'react';
import { View, Text } from 'react-native';
import { AutoGrowingTextInput } from 'react-native-autogrow-textinput';
import { shallow, mount } from 'enzyme';
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

  it('should render 2 View components', () => {
    expect(wrapper.find(View)).to.have.length(2);
  });

  it('should render 2 Text components', () => {
    expect(wrapper.find(Text)).to.have.length(2);
  });

  it('should render 3 Button components', () => {
    expect(wrapper.find(Button)).to.have.length(3);
  });

  it('should render 1 AutoGrowingTextInput component', () => {
    expect(wrapper.find(AutoGrowingTextInput)).to.have.length(1);
  });
});

describe('IndividualContact default state', () => {
  beforeEach(() => {
    wrapper = shallow(<IndividualContact />);
  });

  it('should have a default notes state that is empty', function() {
    expect(wrapper.state().notes).to.deep.equal('');
  });
});

describe('IndividualContact props', () => {
  beforeEach(() => {
    wrapper = shallow(<IndividualContact />);
  });

  it('should have props for firstName, lastName, birthdayDate, id, onPress, title, placeholder, style', () => {
    expect(wrapper.props('firstName')).to.be.defined;
    expect(wrapper.props('lastName')).to.be.defined;
    expect(wrapper.props('birthdayDate')).to.be.defined;
    expect(wrapper.props('id')).to.be.defined;
    expect(wrapper.props('onPress')).to.be.defined;
    expect(wrapper.props('title')).to.be.defined;
    expect(wrapper.props('placeholder')).to.be.defined;
    expect(wrapper.props('style')).to.be.defined;
  });
});
