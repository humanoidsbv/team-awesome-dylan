import React from 'react';

import styles from './TimeEntries.module.css';
import TimeEntry from '../time-entry/TimeEntry';

const TimeEntries = () => (
  <div className={styles.TimeEntries}>
    <TimeEntry />
    <TimeEntry />
    <TimeEntry />
  </div>
);

export default TimeEntries;
