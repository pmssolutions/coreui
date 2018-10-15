import React from 'react';
import Overtime from './Overtime';
import { shallow } from 'enzyme'

it('renders without crashing', () => {
  shallow(<Overtime />);
});
