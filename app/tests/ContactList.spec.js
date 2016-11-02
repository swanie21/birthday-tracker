import React from 'react';
import { View, ListView } from 'react-native';
import { shallow, mount } from 'enzyme';
import { expect } from 'chai';
import ContactList from '../screens/ContactList';
import SearchBar from '../components/SearchBar';
import ContactCard from '../components/ContactCard';

describe('ContactList components', () => {
  beforeEach(() => {
    wrapper = shallow(<ContactList />);
  });

  it('should be rendered into a View container', () => {
    expect(wrapper.type()).to.equal(View);
  });

  it('should render SearchBar component', () => {
    expect(wrapper.find(SearchBar)).to.have.length(1);
  });
});

describe('ContactList default state', () => {
  beforeEach(() => {
    wrapper = shallow(<ContactList />);
  });

  it('should have a default contacts array that is empty', function() {
    expect(wrapper.state().contacts).to.deep.equal([]);
  });

  it('should have a default searchInput state that is empty', function() {
    expect(wrapper.state().searchInput).to.equal('');
  });
});
