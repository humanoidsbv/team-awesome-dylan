import React from 'react';

import styles from './TimeEntries.module.css';
import TimeEntry from '../time-entry/TimeEntry';
import TimeEntryHeading from '../time-entry-heading/TimeEntryHeading';

const TimeEntries = () => (
  <div className={styles.timeEntries}>
    <TimeEntryHeading />
    <TimeEntry />
    <TimeEntryHeading />
    <TimeEntry />
    <TimeEntry />
  </div>
);

export default TimeEntries;
