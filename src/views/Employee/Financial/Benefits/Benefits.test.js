import React from 'react';
import Benefits from './Benefits';
import { shallow } from 'enzyme'

it('renders without crashing', () => {
  shallow(<Benefits />);
});
