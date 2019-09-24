import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import TimeEntries from './TimeEntries';
import {
  fetchTimeEntriesRequest,
  timeEntriesItemsSelector,
  deleteTimeEntryRequest
} from '../../redux/time-entries';

const TimeEntriesContainer = props => <TimeEntries {...props} />;

const mapStateToProps = state => ({
  timeEntries: timeEntriesItemsSelector(state)
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      fetchTimeEntries: fetchTimeEntriesRequest,
      deleteTimeEntry: deleteTimeEntryRequest
    },
    dispatch
  );

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TimeEntriesContainer);
