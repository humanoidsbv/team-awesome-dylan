import React from 'react';

import styles from './TimeForm.module.css';

const TimeForm = () => (
  <form className={styles.TimeForm}>
    <label className={styles.labels}>
      Employer
      <input className={styles.inputs} type="text" name="name" />
    </label>
  </form>
);

export default TimeForm;
