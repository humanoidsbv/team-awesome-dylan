import React from 'react';

import styles from './TimeEntry.module.css';

const TimeEntry = () => (
  <div className={styles.timeEntry}>
    <span className={styles.client}>Port of Rotterdam</span>
    <div className={styles.timeStamp}>
      <span>09:00 - 17:00</span>
      <span className={styles.duration}>
        <br />
        08:00:00
      </span>
    </div>
  </div>
);

export default TimeEntry;
