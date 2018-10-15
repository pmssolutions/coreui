import React from 'react';
import Leave from './Leave';
import { shallow } from 'enzyme'

it('renders without crashing', () => {
  shallow(<Leave />);
});
