import React from 'react';

import styles from './TimeEntry.module.css';

const TimeEntry = () => (
  <div className={styles.TimeEntry}>
    <span className={styles.Task}>Port of Rotterdam</span>
    <span className={styles.TimeStamp}>09:00-17:00</span>
  </div>
);

export default TimeEntry;
