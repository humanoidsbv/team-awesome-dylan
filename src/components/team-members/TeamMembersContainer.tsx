import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import TeamMembers from './TeamMembers';
import {
  createTeamMemberRequest,
  fetchTeamMembersRequest,
  sortTeamMembersByField,
  sortTeamMembersDirection,
  teamMembersByFieldSelector,
  teamMembersSortDirectionSelector
} from '../../redux/team-members';
import { TeamMembersStatePropsInterface, TeamMembersDispatchPropsInterface } from '../../redux/team-members/types';

const TeamMembersContainer = (props): React.ReactElement => <TeamMembers {...props} />;

const mapStateToProps = (state): TeamMembersStatePropsInterface => ({
  sortDirection: teamMembersSortDirectionSelector(state),
  teamMembers: teamMembersByFieldSelector(state)
});

const mapDispatchToProps = (dispatch): TeamMembersDispatchPropsInterface => bindActionCreators(
  {
    createTeamMember: createTeamMemberRequest,
    fetchTeamMembers: fetchTeamMembersRequest,
    sortTeamMembersByField,
    sortTeamMembersDirection
  },
  dispatch
);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TeamMembersContainer);
