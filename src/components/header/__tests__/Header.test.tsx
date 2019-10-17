import * as React from 'react';
import { shallow } from 'enzyme';

import Header from '../Header';

it('matches snapshot', () => {
  const header = shallow(
    <Header />
  );
  expect(header).toMatchSnapshot();
});
