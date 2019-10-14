import React, { ReactElement } from 'react';
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
import { TimeEntriesStatePropsInterface, TimeEntriesDispatchPropsInterface } from '../../redux/time-entries/types';

const TimeEntriesContainer = (props): React.ReactElement => <TimeEntries {...props} />;

const mapStateToProps = (state): TimeEntriesStatePropsInterface => ({
  clients: clientsItemsSelector(state),
  timeEntries: timeEntriesByClientSelector(state)
});

const mapDispatchToProps = (dispatch): TimeEntriesDispatchPropsInterface => bindActionCreators(
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