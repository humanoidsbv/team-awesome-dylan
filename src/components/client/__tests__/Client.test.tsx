import * as React from 'react';
import { shallow } from 'enzyme';

import Client from '../Client';

it('matches snapshot', () => {
  const client = shallow(
    <Client
      clientName = 'Test'
    />
  );
  expect(client).toMatchSnapshot();
});
