import React, { ReactElement } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import TimeEntries from './TimeEntries';
import {
  createTimeEntryRequest,
  deleteTimeEntryRequest,
  fetchTimeEntriesRequest,
  filterTimeEntriesByClient,
  timeEntriesByClientSelector,
  timeEntriesIsLoadingSelector
} from '../../redux/time-entries';
import { clientsItemsSelector, fetchClientsRequest, clientsIsLoadingSelector } from '../../redux/clients';
import { TimeEntriesStatePropsInterface, TimeEntriesDispatchPropsInterface } from '../../redux/time-entries/types';

const TimeEntriesContainer = (props: any): React.ReactElement => <TimeEntries {...props} />;

const mapStateToProps = (state: any): TimeEntriesStatePropsInterface => ({
  clients: clientsItemsSelector(state),
  isLoading: clientsIsLoadingSelector(state) || timeEntriesIsLoadingSelector(state),
  timeEntries: timeEntriesByClientSelector(state)
});

const mapDispatchToProps = (dispatch: any): TimeEntriesDispatchPropsInterface => bindActionCreators(
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
