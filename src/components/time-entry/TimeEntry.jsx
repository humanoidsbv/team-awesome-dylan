import React from 'react';
import PropTypes from 'prop-types';

import styles from './TimeEntry.module.css';

const TimeEntry = ({ client, startTime, endTime, clientDuration }) => (
  <div className={styles.timeEntry}>
    <span className={styles.client}>{client}</span>
    <div className={styles.timeStamp}>
      <span>{`${startTime} - ${endTime}`}</span>
      <span className={styles.duration}>
        <br />
        {clientDuration}
      </span>
    </div>
  </div>
);

TimeEntry.propTypes = {
  client: PropTypes.string.isRequired,
  clientDuration: PropTypes.number.isRequired,
  endTime: PropTypes.string.isRequired,
  startTime: PropTypes.string.isRequired
};

export default TimeEntry;
