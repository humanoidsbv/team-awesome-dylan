import React from 'react';

import styles from './TimeEntries.module.css';
import TimeEntry from '../time-entry/TimeEntry';
import TimeStamp from '../time-stamp/TimeStamp';

const TimeEntries = () => (
  <div className={styles.timeEntries}>
    <TimeStamp className={styles.timeStamp} />
    <TimeEntry />
    <TimeStamp className={styles.timeStamp} />
    <TimeEntry />
    <TimeEntry />
  </div>
);

export default TimeEntries;
