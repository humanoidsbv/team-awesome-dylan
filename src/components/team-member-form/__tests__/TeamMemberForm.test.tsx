import * as React from 'react';
import { shallow } from 'enzyme';

import TeamMemberForm from '../TeamMemberForm';

it('matches snapshot', () => {
  const teamMemberForm = shallow(
    <TeamMemberForm
      isTeamMemberFormVisible={true}
      createTeamMember={({}) => {}}
      toggleTeamMemberForm={() => null}
    />
  );
  expect(teamMemberForm).toMatchSnapshot();
});
