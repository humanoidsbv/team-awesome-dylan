import React, { useState, useEffect } from 'react';

import styles from './TimeEntries.module.css';
import TimeEntry from '../time-entry/TimeEntry';
import TimeEntryForm from '../time-entry-form/TimeEntryForm';
import TimeEntryHeading from '../time-entry-heading/TimeEntryHeading';

function TimeEntries() {
  const [timeEntries, setTimeEntries] = useState([]);

  async function fetchData() {
    const response = await fetch(
      'http://localhost:3000/time-entries?_sort=startTimestamp&_order=desc'
    );
    setTimeEntries(await response.json());
  }

  function saveData(newTimeEntry) {
    fetch('http://localhost:3000/time-entries', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(newTimeEntry)
    });
  }

  useEffect(() => {
    fetchData();
  }, []);

  function createTimeEntry(newTimeEntry) {
    saveData(newTimeEntry);
    setTimeEntries([newTimeEntry, ...timeEntries]);
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
                key={id}
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
