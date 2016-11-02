import React from 'react';
import { View, Text, TouchableHighlight } from 'react-native';
import { shallow } from 'enzyme';
import { expect } from 'chai';
import Button from '../components/Button';

describe('Button component', () => {
  beforeEach(() => {
    wrapper = shallow(<Button />);
  });

  it('should be rendered into a View container', () => {
    expect(wrapper.type()).to.equal(View);
  });

  it('should have onPress prop', () => {
    expect(wrapper.props().onPress).to.be.defined;
  });

  it('should have title prop', () => {
    expect(wrapper.props().title).to.be.defined;
   });

  it('should render 1 Text component', () => {
    expect(wrapper.find(Text)).to.have.length(1);
  });

  it('should render 1 TouchableHighlight component', () => {
    expect(wrapper.find(TouchableHighlight)).to.have.length(1);
  });
});
