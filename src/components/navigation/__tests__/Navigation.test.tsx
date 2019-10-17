import * as React from 'react';
import { shallow } from 'enzyme';

import Navigation from '../Navigation';

it('matches snapshot', () => {
  const naviagation = shallow(
    <Navigation
    isMenuVisible= {true}
    />
  );
  expect(naviagation).toMatchSnapshot();
});
