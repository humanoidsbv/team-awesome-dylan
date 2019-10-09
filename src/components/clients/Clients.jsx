import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

import styles from './Clients.module.css';
import Client from '../client/Client';
import ClientForm from '../client-form/ClientForm';

const Clients = ({ clients, createClient, fetchClients }) => {
  const [isClientFormVisible, setClientFormVisibility] = useState(false);
  const [clientsSort, setClientsSort] = useState(clients);

  const toggleClientForm = () => {
    setClientFormVisibility(!isClientFormVisible);
  };

  useEffect(() => {
    fetchClients();
  }, []);

  return (
    <>
      <ClientForm
        createClient={newClient => createClient(newClient)}
        isClientFormVisible={isClientFormVisible}
        toggleClientForm={toggleClientForm}
      />
      <div className={styles.headerClients}>
        <span className={styles.headerClientsText}> All Clients </span>
        <button
          className={`${styles.newClientButton} ${
            isClientFormVisible ? styles.newClientButtonGrey : ''
          }`}
          disabled={isClientFormVisible}
          onClick={toggleClientForm}
          type="button"
        >
          + New Client
        </button>
        <select type="button" className={styles.sortClientsSelector}>
          <option value="">Sort by:</option>
          {clients.map(({ id, name }) => (
            <option key={id}>{name}</option>
          ))}
        </select>
      </div>
      <div className={styles.clientsContainer}>
        {clients.map(({ id, clientName }) => (
          <Client clientName={clientName} key={id} />
        ))}
      </div>
    </>
  );
};

Clients.propTypes = {
  clients: PropTypes.arrayOf(
    PropTypes.shape({
      clientName: PropTypes.string
    })
  ),
  createClient: PropTypes.func.isRequired,
  fetchClients: PropTypes.func.isRequired
};

Clients.defaultProps = {
  clients: []
};

export default Clients;
