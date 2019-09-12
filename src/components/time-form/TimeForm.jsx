import React from 'react';

import styles from './TimeForm.module.css';

const TimeForm = () => (
  <div>
    <form className={styles.timeForm}>
      <label className={styles.labels}>
        EMPLOYER
        <input className={styles.inputs} type="text" name="name" />
      </label>
      <label className={styles.labels}>
        ACTIVITY
        <input className={styles.inputs} type="text" name="name" />
      </label>
      <label className={styles.labels}>
        Date
        <input className={styles.inputs} type="text" name="name" />
      </label>
      <label className={styles.labels}>
        FROM
        <input className={styles.inputs} type="text" name="name" />
      </label>
      <label className={styles.labels}>
        TO
        <input className={styles.inputs} type="text" name="name" />
      </label>
    </form>
  </div>
);

export default TimeForm;
