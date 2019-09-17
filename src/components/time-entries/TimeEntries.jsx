import React from 'react';

import styles from './TimeEntries.module.css';
import TimeEntry from '../time-entry/TimeEntry';
import TimeEntryHeading from '../time-entry-heading/TimeEntryHeading';
import timeEntries from './timeEntries.json';

const TimeEntries = () => (
  <div className={styles.timeEntriesContainer}>
    {timeEntries.map(({ client, id, startTimestamp, endTimestamp }, index) => {
      return (
        <React.Fragment key={id}>
          {(index === 0 ||
            (index > 0 &&
              timeEntries[index - 1].startTimestamp.split(' ')[0] !==
                startTimestamp.split(' ')[0])) && (
            <TimeEntryHeading startDate={startTimestamp.slice(0, 11)} />
          )}
          <TimeEntry
            client={client}
            key={id}
            startTime={startTimestamp.slice(11, 16)}
            endTime={endTimestamp.slice(11, 16)}
            clientDuration={
              endTimestamp.slice(11, 13) - startTimestamp.slice(11, 13)
            }
          />
        </React.Fragment>
      );
    })}
  </div>
);

export default TimeEntries;
