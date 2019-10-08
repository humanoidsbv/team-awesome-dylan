import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import TimeEntries from './TimeEntries';
import {
  createTimeEntryRequest,
  deleteTimeEntryRequest,
  fetchTimeEntriesRequest,
  filterTimeEntriesByClient,
  timeEntriesByClientSelector
} from '../../redux/time-entries';
import { clientsItemsSelector, fetchClientsRequest } from '../../redux/clients';

const TimeEntriesContainer = props => <TimeEntries {...props} />;

const mapStateToProps = state => ({
  clients: clientsItemsSelector(state),
  timeEntries: timeEntriesByClientSelector(state)
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      createTimeEntry: createTimeEntryRequest,
      deleteTimeEntry: deleteTimeEntryRequest,
      fetchClients: fetchClientsRequest,
      fetchTimeEntries: fetchTimeEntriesRequest,
      filterTimeEntriesByClient
    },
    dispatch
  );

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TimeEntriesContainer);
