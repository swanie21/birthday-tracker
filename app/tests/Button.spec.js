import React from 'react';
import { Text, TouchableHighlight } from 'react-native';
import { shallow } from 'enzyme';
import { expect } from 'chai';
import Button from '../components/Button';
// import sinon from 'sinon';

describe('Button component', () => {
  beforeEach(() => {
    wrapper = shallow(<Button />);
  });

  it('should be rendered into a View container', () => {
    expect(wrapper.type()).to.equal(TouchableHighlight);
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

  it.skip('should handle button presses', () => {
    const onPress = sinon.spy();
    const button = shallow(<Button onPress={onPress} />
    );
    button.simulate('click');
      expect(onPress.calledOnce).to.equal(true);
  });
});
