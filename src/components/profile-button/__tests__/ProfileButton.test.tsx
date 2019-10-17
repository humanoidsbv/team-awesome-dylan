import * as React from 'react';
import { shallow } from 'enzyme';

import ProfileButton from '../ProfileButton';

it('matches snapshot', () => {
  const profileButton = shallow(
    <ProfileButton />
  );
  expect(profileButton).toMatchSnapshot();
});
