import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import TimeEntries from './TimeEntries';
import {
  createTimeEntryRequest,
  deleteTimeEntryRequest,
  fetchTimeEntriesRequest,
  timeEntriesItemsSelector
} from '../../redux/time-entries';
import { fetchClientsRequest } from '../../redux/clients';

const TimeEntriesContainer = props => <TimeEntries {...props} />;

const mapStateToProps = state => ({
  timeEntries: timeEntriesItemsSelector(state)
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      createTimeEntry: createTimeEntryRequest,
      deleteTimeEntry: deleteTimeEntryRequest,
      fetchClients: fetchClientsRequest,
      fetchTimeEntries: fetchTimeEntriesRequest
    },
    dispatch
  );

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TimeEntriesContainer);
