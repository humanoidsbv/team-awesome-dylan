import * as React from 'react';
import { shallow } from 'enzyme';

import TeamMember from '../TeamMember';

it('matches snapshot', () => {
  const teamMember = shallow(
    <TeamMember
      currentClient = 'Test'
      employeeFunction = 'Design'
      employeeNumber = 'HUM_001'
      firstName = 'test'
      lastName = 'test'
      startingDate = 'test'
    />
  );
  expect(teamMember).toMatchSnapshot();
});
