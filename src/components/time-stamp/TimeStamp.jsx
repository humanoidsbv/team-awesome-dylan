import React from 'react';

import styles from './TimeStamp.module.css';

const TimeStamp = () => (
  <div className={styles.timeStamp}>
    <span>Friday 29-07 (Today) </span>
    <span className={styles.duration}>08:00:00 </span>
  </div>
);

export default TimeStamp;
