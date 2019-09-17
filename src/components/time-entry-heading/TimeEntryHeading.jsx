import React from 'react';
import PropTypes from 'prop-types';

import styles from './TimeEntryHeading.module.css';

const TimeEntryHeading = ({ startDate }) => (
  <div className={styles.timeStamp}>
    <span>{startDate}</span>
    <span className={styles.duration}>08:00:00 </span>
  </div>
);

TimeEntryHeading.propTypes = {
  startDate: PropTypes.string.isRequired
};

export default TimeEntryHeading;
