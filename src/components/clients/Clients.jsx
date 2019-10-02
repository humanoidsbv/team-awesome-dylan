import React, { useState } from 'react';

import styles from './Clients.module.css';
import Client from '../client/Client';
import ClientForm from '../client-form/ClientForm';

const Clients = () => {
  const [isClientFormVisible, setClientFormVisibility] = useState(false);

  const toggleClientForm = () => {
    setClientFormVisibility(!isClientFormVisible);
  };

  return (
    <>
      <ClientForm
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
        </select>
      </div>
      <Client />
    </>
  );
};

export default Clients;
