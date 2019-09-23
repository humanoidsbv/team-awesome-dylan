import React, { useState, useEffect } from 'react';

import styles from './TimeEntries.module.css';
import TimeEntry from '../time-entry/TimeEntry';
import TimeEntryForm from '../time-entry-form/TimeEntryForm';
import TimeEntryHeading from '../time-entry-heading/TimeEntryHeading';
import fetchData from '../../services/fetchData';
import saveData from '../../services/saveData';
import removeData from '../../services/removeData';

function TimeEntries() {
  const [timeEntries, setTimeEntries] = useState([]);

  useEffect(() => {
    async function fetchTimeEntries() {
      setTimeEntries(await fetchData());
    }
    fetchTimeEntries();
  }, []);

  function createTimeEntry(newTimeEntry) {
    saveData(newTimeEntry);
    setTimeEntries([newTimeEntry, ...timeEntries]);
  }

  function deleteTimeEntry(id) {
    removeData(id);
    setTimeEntries(timeEntries.filter(timeEntry => timeEntry.id !== id));
  }

  return (
    <div className={styles.timeEntriesContainer}>
      <TimeEntryForm createTimeEntry={createTimeEntry} />
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
                deleteTimeEntry={deleteTimeEntry}
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

export default TimeEntries;
