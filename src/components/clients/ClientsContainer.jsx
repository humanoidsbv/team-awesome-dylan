import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import Clients from './Clients';
import {
  createClientRequest,
  fetchClientsRequest,
  clientsItemsSelector
} from '../../redux/clients';

const ClientsContainer = props => <Clients {...props} />;

const mapStateToProps = state => ({
  clients: clientsItemsSelector(state)
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(
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
