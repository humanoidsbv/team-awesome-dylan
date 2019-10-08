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

const TeamMembersContainer = props => <TeamMembers {...props} />;

const mapStateToProps = state => ({
  sortDirection: teamMembersSortDirectionSelector(state),
  teamMembers: teamMembersByFieldSelector(state)
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(
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
