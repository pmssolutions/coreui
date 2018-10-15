import React from 'react';
import Claim from './Claim';
import { shallow } from 'enzyme'

it('renders without crashing', () => {
  shallow(<Claim />);
});
