import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import TimeEntries from './TimeEntries';
import {
  deleteTimeEntryRequest,
  fetchTimeEntriesRequest,
  createTimeEntryRequest,
  timeEntriesItemsSelector
} from '../../redux/time-entries';

const TimeEntriesContainer = props => <TimeEntries {...props} />;

const mapStateToProps = state => ({
  timeEntries: timeEntriesItemsSelector(state)
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      createTimeEntry: createTimeEntryRequest,
      deleteTimeEntry: deleteTimeEntryRequest,
      fetchTimeEntries: fetchTimeEntriesRequest
    },
    dispatch
  );

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TimeEntriesContainer);
