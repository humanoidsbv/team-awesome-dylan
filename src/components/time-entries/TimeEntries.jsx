import React, { useEffect } from 'react';
import PropTypes from 'prop-types';

import styles from './TimeEntries.module.css';
import TimeEntryHeading from '../time-entry-heading/TimeEntryHeading';
import TimeEntryForm from '../time-entry-form/TimeEntryForm';
import TimeEntry from '../time-entry/TimeEntry';

function TimeEntries({
  createTimeEntry,
  deleteTimeEntry,
  fetchTimeEntries,
  timeEntries
}) {
  useEffect(() => {
    fetchTimeEntries();
  }, []);

  return (
    <div className={styles.timeEntriesContainer}>
      <button type="button" className={styles.NewTimeEntryButton}>
        + New Time Entry
      </button>
      <TimeEntryForm
        createTimeEntry={newTimeEntry => createTimeEntry(newTimeEntry)}
      />
      {timeEntries.map(
        ({ client, id, startTimestamp, stopTimestamp }, index) => {
          const startDate = new Date(startTimestamp).toDateString();
          const previousDate =
            index > 0
              ? new Date(timeEntries[index - 1].startTimestamp).toDateString()
              : '';
          return (
            <React.Fragment key={id}>
              {previousDate !== startDate && (
                // eslint-disable-next-line react/jsx-indent
                <TimeEntryHeading startTime={startTimestamp} />
              )}
              <TimeEntry
                client={client}
                deleteTimeEntry={timeEntryId => deleteTimeEntry(timeEntryId)}
                id={id}
                startTime={startTimestamp}
                stopTime={stopTimestamp}
              />
            </React.Fragment>
          );
        }
      )}
    </div>
  );
}

TimeEntries.propTypes = {
  timeEntries: PropTypes.arrayOf(
    PropTypes.shape({
      startTimestamp: PropTypes.string
    })
  ),
  createTimeEntry: PropTypes.func.isRequired,
  deleteTimeEntry: PropTypes.func.isRequired,
  fetchTimeEntries: PropTypes.func.isRequired
};

TimeEntries.defaultProps = {
  timeEntries: []
};

export default TimeEntries;
