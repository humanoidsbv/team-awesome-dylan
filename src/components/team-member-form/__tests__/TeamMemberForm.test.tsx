import * as React from 'react';
import { shallow } from 'enzyme';

import TeamMemberForm from '../TeamMemberForm';

it('matches snapshot', () => {
  const teamMemberForm = shallow(
    <TeamMemberForm
      createTeamMember={({}) => {}}
      isTeamMemberFormVisible={true}
      toggleTeamMemberForm={() => null}
    />
  );
  expect(teamMemberForm).toMatchSnapshot();
});
