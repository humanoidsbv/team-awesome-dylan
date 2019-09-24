import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import TimeEntries from './TimeEntries';
import { requestTimeEntries } from '../../redux/time-entries';

const TimeEntriesContainer = props => <TimeEntries {...props} />;

const mapStateToProps = state => ({
  timeEntries: state.timeEntries.items
});
const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      fetchTimeEntries: requestTimeEntries
    },
    dispatch
  );

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TimeEntriesContainer);
