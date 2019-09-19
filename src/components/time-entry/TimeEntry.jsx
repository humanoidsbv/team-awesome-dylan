import React from 'react';
import PropTypes from 'prop-types';

import styles from './TimeEntry.module.css';

const TimeEntry = ({ client, startTime, stopTime }) => {
  const clientDurationParse =
    (Date.parse(stopTime) - Date.parse(startTime)) / 60 / 60 / 1000;

  const durationHours = Math.trunc(clientDurationParse);
  const durationMinutes = Math.round((clientDurationParse % 1) * 60);
  const totalClientDuration = `${durationHours}:${durationMinutes
    .toString()
    .padStart(2, '0')}`;

  const startTimeString = new Date(startTime).toLocaleTimeString('nl-NL', {
    hour: '2-digit',
    minute: '2-digit'
  });

  const stopTimeString = new Date(stopTime).toLocaleTimeString('nl-NL', {
    hour: '2-digit',
    minute: '2-digit'
  });

  return (
    <div className={styles.timeEntry}>
      <span className={styles.client}>{client}</span>
      <div className={styles.timeStamp}>
        <span>{`${startTimeString} - ${stopTimeString}`}</span>
        <span className={styles.duration}>
          <br />
          {totalClientDuration}
        </span>
      </div>
    </div>
  );
};

TimeEntry.propTypes = {
  client: PropTypes.string.isRequired,
  startTime: PropTypes.string.isRequired,
  stopTime: PropTypes.string.isRequired
};

export default TimeEntry;
