import * as React from 'react';
import { shallow } from 'enzyme';

import Navigation from '../Navigation';

it('matches snapshot', () => {
  const navigation = shallow(
    <Navigation
      isMenuVisible= {true}
    />
  );
  expect(navigation).toMatchSnapshot();
});
