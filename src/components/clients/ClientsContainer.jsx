import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import Clients from './Clients';

const ClientsContainer = props => <Clients {...props} />;

const mapStateToProps = state => ({});

const mapDispatchToProps = dispatch => bindActionCreators({}, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ClientsContainer);
