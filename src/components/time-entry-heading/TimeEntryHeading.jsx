import React from 'react';
import PropTypes from 'prop-types';

import styles from './TimeEntryHeading.module.css';

const TimeEntryHeading = ({ startTime }) => {
  const headerString = new Date(startTime).toLocaleDateString('nl-NL', {
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

TimeEntryHeading.propTypes = {
  startTime: PropTypes.string.isRequired
};

export default TimeEntryHeading;
