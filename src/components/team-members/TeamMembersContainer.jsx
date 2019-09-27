import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import TeamMembers from './TeamMembers';
import {
  fetchTeamMembersRequest,
  teamMembersItemsSelector
} from '../../redux/team-members';

console.log(fetchTeamMembersRequest);
const TeamMembersContainer = props => <TeamMembers {...props} />;

const mapStateToProps = state => ({
  teamMembers: teamMembersItemsSelector(state)
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      fetchTeamMembers: fetchTeamMembersRequest
    },
    dispatch
  );

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TeamMembersContainer);
