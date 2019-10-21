import * as React from 'react';
import { shallow } from 'enzyme';

import TeamMembers from '../TeamMembers';

const mockedTeamMembers = [{
  address: 'string',
  currentClient: 'string',
  emailAddress: 'string',
  employeeFunction: 'string',
  employeeNumber: 'string',
  firstName: 'string',
  id: 3,
  key: 4,
  lastName: 'string',
  locality: 'string',
  postalCode: 'string',
  startingDate: 'string'
}];

it('matches snapshot', () => {
  const teamMembers = shallow(
    <TeamMembers
      createTeamMember={({}) => null}
      fetchTeamMembers={()=> null}
      sortDirection={true}
      sortTeamMembersByField={(string: string) => null }
      sortTeamMembersDirection={() => ({ type: 'bla' }) }
      teamMembers ={mockedTeamMembers}
    />
  );
  expect(teamMembers).toMatchSnapshot();
});
