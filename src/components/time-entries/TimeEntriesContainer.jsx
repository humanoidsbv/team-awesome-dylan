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
import { clientsItemsSelector, fetchClientsRequest } from '../../redux/clients';

const TimeEntriesContainer = props => <TimeEntries {...props} />;

const mapStateToProps = state => ({
  clients: clientsItemsSelector(state),
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
