import React, { useState } from 'react';

import styles from './TimeEntries.module.css';
import TimeEntry from '../time-entry/TimeEntry';
import TimeEntryForm from '../time-entry-form/TimeEntryForm';
import TimeEntryHeading from '../time-entry-heading/TimeEntryHeading';
import timeEntriesMock from './timeEntries.json';

function TimeEntries() {
  const [timeEntries, setTimeEntries] = useState(timeEntriesMock);

  const createTimeEntry = newTimeEntry => {
    setTimeEntries([newTimeEntry, ...timeEntries]);
  };

  return (
    <div className={styles.timeEntriesContainer}>
      <TimeEntryForm createTimeEntry={createTimeEntry} />
      {timeEntries.map(
        ({ client, id, startTimestamp, endTimestamp }, index) => (
          <React.Fragment key={id}>
            {(index === 0 ||
              (index > 0 &&
                timeEntries[index - 1].startTimestamp.split(' ')[0] !==
                  startTimestamp.split(' ')[0])) && (
              // eslint-disable-next-line react/jsx-indent
              <TimeEntryHeading startDate={startTimestamp.slice(0, 11)} />
            )}
            <TimeEntry
              client={client}
              clientDuration={
                endTimestamp.slice(11, 13) - startTimestamp.slice(11, 13)
              }
              endTime={endTimestamp.slice(11, 16)}
              key={id}
              startTime={startTimestamp.slice(11, 16)}
            />
          </React.Fragment>
        )
      )}
    </div>
  );
}

export default TimeEntries;
