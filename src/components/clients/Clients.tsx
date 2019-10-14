import React, { useEffect, useState } from 'react';

import styles from './Clients.module.css';
import Client from '../client/Client';
import ClientForm from '../client-form/ClientForm';
import { ClientsProps, ClientInterface } from '../../redux/clients/types';

const Clients = ({ clients, createClient, fetchClients }: ClientsProps): React.ReactElement => {
  const [isClientFormVisible, setClientFormVisibility] = useState(false);

  const toggleClientForm = (): void => {
    setClientFormVisibility(!isClientFormVisible);
  };

  useEffect(() => {
    fetchClients();
  }, []);

  return (
    <>
      <ClientForm
        createClient={(newClient): {} => createClient(newClient)}
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
        <select className={styles.sortClientsSelector}>
          <option value="">Sort by:</option>
          {clients.map(({ id, clientName }: ClientInterface) => (
            <option key={id}>{clientName}</option>
          ))}
        </select>
      </div>
      <div className={styles.clientsContainer}>
        {clients.map(({ id, clientName }: ClientInterface): React.ReactElement => (
          <Client clientName={clientName} key={id} />
        ))}
      </div>
    </>
  );
};

export default Clients;
