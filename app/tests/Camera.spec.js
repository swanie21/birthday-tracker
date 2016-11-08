import React from 'react';
import { View, Image, TouchableOpacity } from 'react-native';
import { shallow, mount } from 'enzyme';
import { expect } from 'chai';
import Camera from '../components/Camera';

describe('Camera component', () => {
  beforeEach(() => {
    wrapper = shallow(<Camera />);
  });

  it('should be rendered into a View container', () => {
    expect(wrapper.type()).to.equal(View);
  });

  it('should render 2 View components', () => {
    expect(wrapper.find(View)).to.have.length(2);
  });

  it('should render 1 Image component', () => {
    expect(wrapper.find(Image)).to.have.length(1);
  });

  it('should render 1 TouchableOpacity component', () => {
    expect(wrapper.find(TouchableOpacity)).to.have.length(1);
  });

  it('should have props for source, onPress, and style', () => {
    expect(wrapper.props('source')).to.be.defined;
    expect(wrapper.props('onPress')).to.be.defined;
    expect(wrapper.props('style')).to.be.defined;
  });
});
