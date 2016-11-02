import React from 'react';
import { View, TextInput } from 'react-native';
import { shallow } from 'enzyme';
import { expect } from 'chai';
import SearchBar from '../components/SearchBar';

describe('SearchBar component', () => {
  beforeEach(() => {
    wrapper = shallow(<SearchBar />);
  });

  it('should be rendered into a View container', () => {
    expect(wrapper.type()).to.equal(View);
  });

  it('should render 1 TextInput component', () => {
    expect(wrapper.find(TextInput)).to.have.length(1);
  });

  it('should have TextInput props for autoCapitalize, autoCorrect, onChange, style, and placeholder', () => {
    expect(wrapper.props('autoCapitalize')).to.be.defined;
    expect(wrapper.props('autoCorrect')).to.be.defined;
    expect(wrapper.props('onChange')).to.be.defined;
    expect(wrapper.props('style')).to.be.defined;
    expect(wrapper.props('placeholder')).to.be.defined;
  });
});
