import React from 'react';
import PropTypes from 'prop-types';
import IconDelete from '../../assets/icons/icon-delete.svg';

import styles from './TimeEntry.module.css';

const TimeEntry = ({ id, client, deleteTimeEntry, startTime, stopTime }) => {
  const clientDurationParse =
    (Date.parse(stopTime) - Date.parse(startTime)) / 60 / 60 / 1000;

  const durationHours = Math.trunc(clientDurationParse);
  const durationMinutes = Math.round((clientDurationParse % 1) * 60);
  const totalClientDuration = `${durationHours}:${durationMinutes
    .toString()
    .padStart(2, '0')}`;

  const timeNotation = { hour: '2-digit', minute: '2-digit' };

  const startTimeString = new Date(startTime).toLocaleTimeString(
    'nl-NL',
    timeNotation
  );

  const stopTimeString = new Date(stopTime).toLocaleTimeString(
    'nl-NL',
    timeNotation
  );

  const handleDelete = () => {
    console.log(id);
    deleteTimeEntry(id);
  };

  return (
    <div className={styles.timeEntry}>
      <span className={styles.client}>{client}</span>
      <button
        className={styles.deleteButton}
        onClick={handleDelete}
        type="button"
      >
        <IconDelete className={styles.iconClose} />
        Delete
      </button>
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
  id: PropTypes.number.isRequired,
  client: PropTypes.string.isRequired,
  deleteTimeEntry: PropTypes.func.isRequired,
  startTime: PropTypes.string.isRequired,
  stopTime: PropTypes.string.isRequired
};

export default TimeEntry;
