import React from 'react';

import styles from './TimeEntryForm.module.css';
import IconClose from '../../assets/icons/icon-close.svg';

const TimeEntryForm = () => (
  <form className={styles.timeForm}>
    <IconClose className={styles.iconClose} />
    <label className={styles.labelClient}>
      CLIENT
      <select name="Clients" className={styles.inputClient}>
        <option value="Port of Rotterdam">Port of Rotterdam</option>
        <option value="Hike One">Hike One</option>
      </select>
    </label>
    <label className={styles.labelActivity}>
      ACTIVITY
      <select name="Activity" className={styles.inputActivity}>
        <option value="Design">Design</option>
        <option value="Development">Development</option>
      </select>
    </label>
    <label className={styles.labelDate}>
      DATE
      <input
        className={styles.inputDate}
        type="date"
        defaultValue="2019-09-17"
      />
    </label>
    <label className={styles.labelsTime}>
      FROM
      <input className={styles.inputsTime} type="time" defaultValue="09:00" />
    </label>
    <label className={styles.labelsTime}>
      TO
      <input className={styles.inputsTime} type="time" defaultValue="17:00" />
    </label>
    <button className={styles.buttonTimeEntry} type="button">
      Add
    </button>
  </form>
);

export default TimeEntryForm;
