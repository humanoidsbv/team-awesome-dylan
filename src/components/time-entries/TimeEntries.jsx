import React from 'react';

import styles from './TimeEntries.module.css';
import TimeEntry from '../time-entry/TimeEntry';
import TimeEntryHeading from '../time-entry-heading/TimeEntryHeading';
import timeEntries from './timeEntries.json';

const TimeEntries = () => (
  <div className={styles.timeEntriesContainer}>
    {timeEntries.map(({ client, id, startTimestamp, endTimestamp }, index) => (
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
    ))}
  </div>
);

export default TimeEntries;
