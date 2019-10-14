import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import Clients from './Clients';
import {
  createClientRequest,
  fetchClientsRequest,
  clientsItemsSelector
} from '../../redux/clients';
import { ClientsStatePropsInterface, ClientsDispatchPropsInterface } from '../../redux/clients/types';

const ClientsContainer = (props): React.ReactElement => <Clients {...props} />;

const mapStateToProps = (state): ClientsStatePropsInterface => ({
  clients: clientsItemsSelector(state)
});

const mapDispatchToProps = (dispatch): ClientsDispatchPropsInterface => bindActionCreators(
  {
    createClient: createClientRequest,
    fetchClients: fetchClientsRequest
  },
  dispatch
);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ClientsContainer);
