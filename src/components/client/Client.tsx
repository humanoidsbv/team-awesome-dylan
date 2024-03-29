import React, { useState } from 'react';

import MenuDownIcon from '../../assets/icons/icon-arrow-down.svg';
import clientAvatar from '../../../static/pictures/picture-tnt.jpg';
import styles from './Client.module.css';
import { ClientInterface } from '../../redux/clients/types';

const Client = ({ clientName }: ClientInterface): React.ReactElement => {
  const [isClientActive, setClientActivity] = useState(false);

  const toggleClientActivity = (): void => {
    setClientActivity(!isClientActive);
  };

  return (
    <div
      className={isClientActive ? styles.clientEntryActive : styles.clientEntry}
    >
      <div className={styles.clientBasicInfo}>
        <img className={styles.clientAvatar} src={clientAvatar} alt="Logo" />
        <div className={styles.clientTitle}>
          <span className={styles.clientName}>{clientName}</span>
        </div>
        <div className={styles.extraInfoDesktop}>
          <div className={styles.clientNumber}>
            <span className={styles.extraInfoMainDesktop}>Client Number</span>
            <span className={styles.extraInfoSubDesktop}>Client Number</span>
          </div>
          <div className={styles.extraClientInfo}>
            <span className={styles.extraInfoMainDesktop}>Current Project</span>
            <span className={styles.extraInfoSubDesktop}>New App</span>
          </div>
          <div className={styles.extraStartingDate}>
            <span className={styles.extraInfoMainDesktop}>Location</span>
            <span className={styles.extraInfoSubDesktop}>Utrecht</span>
          </div>
        </div>
        <MenuDownIcon
          className={styles.menuDownIcon}
          onClick={toggleClientActivity}
        />
      </div>
      <div
        className={`${
          isClientActive ? styles.extraInfoActive : styles.extraInfo
        }`}
      >
        <div className={styles.extraInfoHeader}>
          <span className={styles.extraInfoHeaderText}>
            {`Detailed information about ${clientName}`}
          </span>
        </div>
        <div className={styles.extraClientInfo}>
          <span className={styles.extraInfoMain}>Team Members Active</span>
          <span className={styles.extraInfoSub}>Team Members</span>
        </div>
        <div className={styles.extraStartingDate}>
          <span className={styles.extraInfoMain}>Projects</span>
          <span className={styles.extraInfoSub}>Project #1</span>
        </div>
      </div>
    </div>
  );
};

export default Client;
