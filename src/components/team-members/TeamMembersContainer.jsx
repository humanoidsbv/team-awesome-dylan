import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import TeamMembers from './TeamMembers';
import {
  createTeamMemberRequest,
  fetchTeamMembersRequest,
  teamMembersItemsSelector
} from '../../redux/team-members';

const TeamMembersContainer = props => <TeamMembers {...props} />;

const mapStateToProps = state => ({
  teamMembers: teamMembersItemsSelector(state)
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      createTeamMember: createTeamMemberRequest,
      fetchTeamMembers: fetchTeamMembersRequest
    },
    dispatch
  );

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TeamMembersContainer);
