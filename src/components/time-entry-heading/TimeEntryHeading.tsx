import React from 'react';

import styles from './TimeEntryHeading.module.css';
import { TimeEntryInterface } from '../../redux/time-entries/types';

const TimeEntryHeading = ({ startTimestamp }: TimeEntryInterface): React.ReactElement => {
  const headerString = new Date(startTimestamp).toLocaleDateString('nl-NL', {
    day: 'numeric',
    month: 'long',
    weekday: 'long'
  });

  return (
    <div className={styles.timeStamp}>
      <span>{headerString}</span>
      <span className={styles.duration}>08:00:00 </span>
    </div>
  );
};

export default TimeEntryHeading;
