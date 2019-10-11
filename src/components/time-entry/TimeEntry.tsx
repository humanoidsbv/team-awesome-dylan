import React from 'react';

import IconDelete from '../../assets/icons/icon-delete.svg';
import styles from './TimeEntry.module.css';
import { TimeEntryInterface } from '../../redux/time-entries/types';

interface TimeEntryProps extends TimeEntryInterface {
  client: string;
  deleteTimeEntry: (number) => {};
}

const TimeEntry = ({
  client, deleteTimeEntry, id, startTimestamp, stopTimestamp
}: TimeEntryProps): React.ReactElement => {
  const clientDurationParse = (
    Date.parse(stopTimestamp) - Date.parse(startTimestamp)) / 60 / 60 / 1000;

  const durationHours = Math.trunc(clientDurationParse);
  const durationMinutes = Math.round((clientDurationParse % 1) * 60);
  const totalClientDuration = `${durationHours}:${durationMinutes
    .toString()
    .padStart(2, '0')}`;

  const timeNotation = { hour: '2-digit', minute: '2-digit' };

  const startTimeString = new Date(startTimestamp).toLocaleTimeString(
    'nl-NL',
    timeNotation
  );

  const stopTimeString = new Date(stopTimestamp).toLocaleTimeString(
    'nl-NL',
    timeNotation
  );

  return (
    <div className={styles.timeEntry}>
      <span className={styles.client}>{client}</span>
      <button
        className={styles.deleteButton}
        onClick={(): {} => deleteTimeEntry(id)}
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

// TimeEntry.propTypes = {
//   id: PropTypes.number.isRequired,
//   client: PropTypes.string.isRequired,
//   deleteTimeEntry: PropTypes.func.isRequired,
//   startTime: PropTypes.string.isRequired,
//   stopTime: PropTypes.string.isRequired
// };

export default TimeEntry;
