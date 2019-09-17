import React from 'react';

import styles from './TimeEntry.module.css';

const TimeEntry = () => (
  <div className={styles.timeEntry}>
    <span className={styles.client}>Port of Rotterdam</span>
    <span className={styles.timeStamp}>09:00-17:00</span>
  </div>
);

export default TimeEntry;
