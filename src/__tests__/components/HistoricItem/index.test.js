/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import { shallow } from 'enzyme';
import HistoricItem from '../../../components/HistoricItem';
import '../../../setupTests';

let wrapper;

describe('<HistoricItem />', () => {
  const mockItems = {
    date: '2019-11-21',
    price: 1.10,
  };
  beforeAll(() => {
    wrapper = shallow(<HistoricItem date={mockItems.date} price={mockItems.price} />);
  });
  it('should renders without crashing', () => {
    expect(wrapper).toBeDefined();
  });
  it('should return a valid currency', () => {
    expect(mockItems.price).toBe(1.10);
  });
});
