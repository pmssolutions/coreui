import React from 'react';
import Attendance from './Attendance';
import { shallow } from 'enzyme'

it('renders without crashing', () => {
  shallow(<Attendance />);
});
